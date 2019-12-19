/**
 * @module 数字验证框(未限制数字)
 * @author 杨文渊
 */
import { Fragment, forwardRef, useRef } from "react";
import { Input } from "antd";

const saveInputStyle = {
  width: "32px",
  marginRight: "10px"
};

const number = 6;

export default forwardRef(({ value = new Array(number).fill(""), onChange }, ref) => {
  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    value[index] = e ? e.target.value : "";
    onChange(value);
  };

  const focusInputNext = i => {
    if (i < number - 1) {
      inputRef.current[i + 1].focus();
    }
  };
  const focusInputPrev = i => {
    if (i > 0) {
      inputRef.current[i - 1].focus();
    }
  };

  const inputArray = value.map((_, i) => (
    <Input
      style={saveInputStyle}
      onChange={e => {
        handleChange(e, i);
        focusInputNext(i);
      }}
      value={value[i]}
      onFocus={() => {
        handleChange("", i);
      }}
      onKeyUp={e => {
        if (e.keyCode === 8) {
          handleChange("", i);
          focusInputPrev(i);
        }
      }}
      maxLength={1}
      ref={e => {
        inputRef.current[i] = e;
      }}
    ></Input>
  ));

  return (
    <Input.Group>
      {inputArray.map((v, i) => (
        <Fragment key={i}>{v}</Fragment>
      ))}
    </Input.Group>
  );
});
