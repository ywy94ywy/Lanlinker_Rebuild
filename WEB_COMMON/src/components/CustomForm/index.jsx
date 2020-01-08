import React from 'react'
import { Input, Form, Row, Col } from 'antd'
import classNames from 'classnames'
import styles from './style.less'

export default Form.create()(
  ({
    data = [],
    className,
    form,
    columns = 1,
    gutter = 24,
    layout = 'horizontal',
    ...restFormProps
  }) => {
    const { getFieldDecorator } = form
    const cols = 24 / columns
    const five = columns === 5

    return (
      <Form
        className={classNames(styles.customForm, className)}
        {...restFormProps}
      >
        <Row gutter={gutter}>
          {data.map(
            (
              {
                label,
                name,
                component,
                style,
                className,
                colSpan = 1,
                rules,
                initialValue,
                ...restItemProps
              },
              index,
            ) => {
              return component ? (
                <Col
                  span={five ? 555 : cols * colSpan}
                  key={index}
                  style={
                    five
                      ? {
                          display: 'block',
                          flex: '0 0 auto',
                          float: 'left',
                          width: `${20 * colSpan}%`,
                          ...style,
                        }
                      : { ...style }
                  }
                  className={className}
                >
                  <Form.Item
                    label={label}
                    className={layout === 'inline' ? styles.inline : null}
                    {...restItemProps}
                  >
                    {getFieldDecorator(name || label, {
                      rules,
                      initialValue,
                    })(component)}
                  </Form.Item>
                </Col>
              ) : (
                <Col
                  span={five ? 555 : cols * colSpan}
                  key={index}
                  style={
                    five && {
                      display: 'block',
                      flex: '0 0 auto',
                      float: 'left',
                      width: `${20 * colSpan}%`,
                    }
                  }
                >
                  <Form.Item
                    label=' '
                    style={{
                      visibility: 'hidden',
                      ...{ display: layout === 'inline' && 'flex' },
                    }}
                  >
                    <Input></Input>
                  </Form.Item>
                </Col>
              )
            },
          )}
        </Row>
      </Form>
    )
  },
)
