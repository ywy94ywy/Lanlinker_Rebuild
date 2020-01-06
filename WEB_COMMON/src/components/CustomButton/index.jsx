import React, { useState } from 'react'
import CustomModal from '../CustomModal'
import { Button } from 'antd'

const CustomButton = Button

export default CustomButton

CustomButton.Modal = ({
  type = 'button',
  text = '',
  buttonProps: { onClick, ...buttonRest } = {},
  modalProps: { visible = null, onCancel, ...modalRest } = {},
  children,
}) => {
  const [state, setState] = useState(visible)

  return (
    <>
      {type === 'button' && (
        <Button
          onClick={() => {
            if (visible !== null) {
              setState(true)
            }
            if (onClick) {
              onClick()
            }
          }}
          {...buttonRest}
        >
          {text}
        </Button>
      )}
      {type === 'a' && (
        <a
          onClick={() => {
            if (visible !== null) {
              setState(true)
            }
            if (onClick) {
              onClick()
            }
          }}
          {...buttonRest}
        >
          {text}
        </a>
      )}
      <CustomModal
        visible={visible !== null ? visible : state}
        onCancel={() => {
          if (!visible) {
            setState(false)
          }
          if (onCancel) {
            onCancel()
          }
        }}
        {...modalRest}
      >
        {children}
      </CustomModal>
    </>
  )
}
