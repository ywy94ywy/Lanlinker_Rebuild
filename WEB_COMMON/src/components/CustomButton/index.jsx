import React, { useState } from "react";
import CustomModal from "../CustomModal";
import { Button } from "antd";

const CustomButton = Button;

export default CustomButton;

CustomButton.Modal = ({
  buttonProps: { text = "", ...buttonRest } = {},
  modalProps,
  children
}) => {
  const [state, setState] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setState(true);
        }}
        {...buttonRest}
      >
        {text}
      </Button>
      <CustomModal
        visible={state}
        onCancel={() => {
          setState(false);
        }}
        {...modalProps}
      >
        {children}
      </CustomModal>
    </>
  );
};
