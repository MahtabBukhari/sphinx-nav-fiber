import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as sphinx from 'sphinx-bridge'
import { BaseModal } from '~/components/Modal'
import { NODE_ADD_ERROR } from '~/constants'
import { api } from '~/network/api'
import { NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useGraphStore } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { SubmitErrRes } from '~/types'
import { executeIfProd, getLSat, payLsat, updateBudget } from '~/utils'
import { BudgetStep } from './BudgetStep'
import { SourceStep } from './SourceStep'
import { SourceTypeStep } from './SourceTypeStep'

export type FormData = {
  name: string
  nodeType: string
  sourceLink?: string
}

const handleSubmitForm = async (
  data: FieldValues,
  close: () => void,
  setBudget: (value: number | null) => void,
  onAddNewData: (value: FieldValues) => void,
): Promise<void> => {
  const endPoint = 'node'

  const body: { [index: string]: unknown } = {}

  body.node_type = data.nodeType
  body.name = data.name

  if (data.nodeType === 'Image') {
    body.node_data = {
      source_link: data.sourceLink,
    }
  }

  let lsatToken = ''

  // skipping this for end to end test because it requires a sphinx-relay to be connected
  await executeIfProd(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const enable = await sphinx.enable()

    body.pubkey = enable?.pubkey

    lsatToken = await getLSat()
  })

  try {
    const res: SubmitErrRes = await api.post(`/${endPoint}`, JSON.stringify(body), {
      Authorization: lsatToken,
    })

    if (res.error) {
      const { message } = res.error

      throw new Error(message)
    }

    onAddNewData(data)

    close()

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.status === 402) {
      await payLsat(setBudget)

      await updateBudget(setBudget)

      await handleSubmitForm(data, close, setBudget, onAddNewData)
    }

    if (err.status === 400) {
      await err.json()

      close()
    }

    if (err instanceof Error) {
      close()
    }
  }
}

export const AddItemModal = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const { close, visible } = useModal('addItem')
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)

  const [addNewNode, setSelectedNode] = useGraphStore((s) => [s.addNewNode, s.setSelectedNode])
  const [addNewNodeToGraph] = useGraphStore((s) => [s.addNewNode])

  useEffect(
    () => () => {
      setCurrentStep(0)
      reset()
    },
    [visible, reset],
  )

  const nodeType = watch('nodeType')
  const name = watch('name')
  const sourceLink = watch('sourceLink')

  const handleClose = () => {
    close()
  }

  const onNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const onPrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const onAddNewNode = (data: FieldValues) => {
    const newId = `new-id-${Math.random()}`
    const newType = data.nodeType.toLocaleLowerCase()

    const node: NodeExtendedNew = {
      name: data.name,
      node_type: newType,
      ref_id: newId,
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      date_added_to_graph: parseInt((new Date().getTime() / 1000).toFixed(0), 10),
    }

    addNewNode(node)

    setSelectedNode(node)
    close()
  }

  const handleMockingSubmit = (data: FieldValues) => {
    const newId = `new-id-${Math.random()}`
    const newType: string = data.nodeType

    const node: NodeExtendedNew = {
      ref_id: newId,
      node_type: newType,
      properties: {
        topic: (data.name || '') as string,
        date_added_to_graph: parseInt((new Date().getTime() / 1000).toFixed(0), 10) as number,
        ...(data.sourceLink ? { source_link: data.sourceLink as string } : {}),
      },
      x: Math.random() * 1000,
      y: Math.random() * 1000,
      z: Math.random() * 1000,
    }

    addNewNodeToGraph(node)
    // setSelectedNode(node)
    close()
  }

  const onSubmit = form.handleSubmit(async (data) => {
    // eslint-disable-next-line no-constant-condition
    if (data || true) {
      handleMockingSubmit(data)

      return
    }

    setLoading(true)

    try {
      await handleSubmitForm(data, handleClose, setBudget, onAddNewNode)
    } catch {
      console.error(NODE_ADD_ERROR)
    } finally {
      setLoading(false)
    }
  })

  const handleSelectType = (val: string) => setValue('nodeType', val)

  return (
    <BaseModal id="addItem" kind="small" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="add-node-form" onSubmit={onSubmit}>
          {currentStep === 0 && (
            <SourceTypeStep
              allowNextStep={!!nodeType}
              onNextStep={onNextStep}
              onSelectType={handleSelectType}
              selectedType={nodeType}
            />
          )}
          {currentStep === 1 && (
            <SourceStep
              name={name}
              onNextStep={onNextStep}
              onPrevStep={onPrevStep}
              sourceLink={sourceLink || ''}
              type={nodeType}
            />
          )}
          {currentStep === 2 && <BudgetStep loading={loading} onClick={() => null} />}
        </form>
      </FormProvider>
    </BaseModal>
  )
}
