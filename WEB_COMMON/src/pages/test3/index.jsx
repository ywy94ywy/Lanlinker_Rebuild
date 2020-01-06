import React, { useState, useEffect, useRef } from 'react'
import {
  PageHeaderWrapper,
  CustomCard,
  CustomForm,
  CustomButton,
  CustomModal,
} from '@/'
import { Input, Button } from 'antd'

const index = () => {
  const [state, setstate] = useState(false)
  const ref = useRef()
  useEffect(() => {})
  return (
    <PageHeaderWrapper style={{ margin: '0' }}>
      <CustomCard>
        <CustomButton.Modal
          type='a'
          text='hello '
          buttonProps={{
            onClick() {
              setstate(true)
            },
          }}
          modalProps={{
            visible: state,
            footer: (
              <Button
                onClick={() => {
                  setstate(false)
                }}
              >
                asf
              </Button>
            ),
            onCancel() {
              setstate(false)
            },
          }}
        ></CustomButton.Modal>
        <CustomForm
          data={formData({ t2: 'hello2' })}
          ref={ref}
          columns={5}
        ></CustomForm>
        <Button
          onClick={() => {
            ref.current.validateFields((err, value) => {
              console.log(value)
            })
          }}
        >
          teswt
        </Button>
      </CustomCard>
    </PageHeaderWrapper>
  )
}

export default index

const formData = ({ t2 }) => [
  {
    label: 'hello',
    name: 't1',
    component: <Input></Input>,
    rules: [{ required: true }],
  },
  {
    label: 'hello2',
    name: 't2',
    component: <Input></Input>,
    initialValue: t2,
  },
  {
    component: null,
  },
  {
    component: null,
  },
  {
    component: null,
  },
  {
    component: null,
  },
  {
    component: null,
  },
  {
    label: 'hello4',
    name: '1',
    colSpan: 3,
    component: <Input></Input>,
  },
  {
    label: 'hello44',
    name: '2',
    component: <Input.TextArea></Input.TextArea>,
  },
  {
    label: 'hello444',
    name: '3',
    component: <Input></Input>,
  },
  {
    label: 'hello4444',
    name: '4',
    component: <Input></Input>,
  },
  {
    label: 'hello44444',
    name: '5',
    component: <Input></Input>,
  },
]
