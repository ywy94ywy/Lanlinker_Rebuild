/**
 * @module: antd-Table(Resizeable)
 * @author: DesYang
 */
import React from 'react'
import { Table } from 'antd'
import styles from './style.less'

export default ({
  bordered = true,
  actions = {
    left: null,
    right: null,
  },
  alert = null,
  ...props
}) => {
  const withActions = !!(actions.left || actions.right)
  const T = <Table bordered={bordered} {...props} />
  return withActions ? TableWithHeader(T, actions, alert) : T
}

const TableWithHeader = (T, actions, alert) => {
  const { left, right } = actions
  return (
    <>
      <div className={styles.tableActions}>
        {left && <div className={styles.left}>{left}</div>}
        {right && <div className={styles.right}>{right}</div>}
      </div>
      {alert && <div className={styles.tableAlert}>{alert}</div>}
      {T}
    </>
  )
}
