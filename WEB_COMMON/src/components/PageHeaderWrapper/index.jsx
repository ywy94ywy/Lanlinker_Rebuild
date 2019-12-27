/**
 * @module pageWrapper
 */
import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'

export default ({ children, style, ...rest }) => {
  return (
    <PageHeaderWrapper style={{ margin: '0', ...style }} {...rest}>
      {children}
    </PageHeaderWrapper>
  )
}
