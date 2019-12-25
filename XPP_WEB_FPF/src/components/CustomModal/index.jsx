import { Modal, Button } from 'antd';

import React from 'react';

export default ({ onOk, onCancel, ...props }) => {
  return (
    <Modal
      footer={
        <div>
          <Button
            type="primary"
            onClick={() => {
              onOk && onOk();
            }}
          >
            确定
          </Button>
          <Button
            onClick={() => {
              onCancel && onCancel();
            }}
          >
            取消
          </Button>
        </div>
      }
      onCancel={onCancel}
      {...props}
    ></Modal>
  );
};
