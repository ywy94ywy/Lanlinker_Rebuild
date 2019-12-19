/**
 * @module 配置型表单(缺陷：定宽)
 * @author 杨文渊
 */

import { Form, Col } from "antd";
import classnames from "classnames";
import style from "./style.less";

export default Form.create()(
  ({
    data = [],
    width,
    column,
    form,
    style: formStyle = {},
    className: formClassName,
    inline,
    itemWidth,
    ...rest
  }) => {
    const { getFieldDecorator } = form;
    if (typeof itemWidth !== "number") {
      itemWidth = width;
    }

    let colSpan = 0;
    const cols = Math.floor(width / itemWidth); // 列数
    const gutter = (width - itemWidth * cols) / (cols - 1 || 1); // 间距

    return (
      <Form
        style={Object.assign({ width: width }, formStyle)}
        className={classnames(formClassName, style.configForm)}
        {...rest}
      >
        {data.map(
          (
            {
              name,
              label,
              component,
              rules,
              initialValue,
              span,
              style: itemStyle,
              className: itemClassName
            },
            i
          ) => {
            const currentSpan = span || 1;
            colSpan += currentSpan;

            const hasGutter = colSpan !== cols;
            if (!hasGutter) {
              colSpan = 0;
            }

            return (
              <Col
                key={i}
                style={{
                  float: "left",
                  width: `${itemWidth * currentSpan +
                    (currentSpan - 1) * gutter}px`,
                  marginRight: `${hasGutter && gutter}px`
                }}
              >
                <Form.Item
                  label={label}
                  style={Object.assign(inline ? { display: "flex" } : {}, {
                    ...itemStyle
                  })}
                  className={itemClassName}
                >
                  {component &&
                    getFieldDecorator(name || label, {
                      initialValue,
                      rules,
                      validateTrigger: false
                    })(component)}
                </Form.Item>
              </Col>
            );
          }
        )}
      </Form>
    );
  }
);
