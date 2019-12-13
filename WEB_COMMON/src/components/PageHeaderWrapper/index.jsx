/**
 * @module pageWrapper
 */
import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'

export default ({ children, style, ...props }) => {
  return (
    <PageHeaderWrapper style={{ margin: '0', ...style }} {...props}>
      {children}
    </PageHeaderWrapper>
  )
}
