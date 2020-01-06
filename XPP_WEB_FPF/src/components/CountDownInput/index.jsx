import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import classNames from 'classnames';
import styles from './style.less';

export default ({
  value,
  onChange,
  inputProps: { inputClassName, ...restInput } = {},
  buttonProps: { buttonClassName, text, ...restButton } = {},
}) => {
  return (
    <div className={styles.countDown}>
      <Input
        value={value}
        onChange={e => onChange(e.target.value)}
        className={classNames(styles.input, inputClassName)}
        placeholder="请输入验证码"
        {...restInput}
      ></Input>
      <CountDownButton
        type="primary"
        className={classNames(styles.btn, buttonClassName)}
        {...restButton}
      >
        {text || '获取验证码'}
      </CountDownButton>
    </div>
  );
};

// 倒计时按钮
const CountDownButton = ({ className, children, onClick, ...rest }) => {
  const [counting, setCounting] = useState(false);
  const [time, setTime] = useState(59);

  useEffect(() => {
    if (counting) {
      const countdown = setTimeout(() => {
        if (time > 0) {
          setTime(s => s - 1);
        } else {
          setCounting(false);
        }
      }, 1000);
      return () => clearTimeout(countdown);
    }
  }, [time, counting]);

  return counting ? (
    <Button className={className} disabled>
      {time}s
    </Button>
  ) : (
    <Button
      onClick={() => {
        if (onClick) onClick();
        setCounting(true);
      }}
      className={className}
      {...rest}
    >
      {children}
    </Button>
  );
};
