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
  const [state, setState] = useState(false)
  const noVisible = visible === null
  
  return (
    <>
      {type === 'button' && (
        <Button
          onClick={() => {
            if (noVisible) {
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
            if (noVisible) {
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
        visible={noVisible ? state : visible}
        onCancel={() => {
          if (noVisible) {
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
