/**
 * @module: antd-Table(Resizeable)
 * @author: DesYang
 */
import React from "react";
import { Table } from "antd";
import styles from "./style.less";

export default ({
  bordered = true,
  pagination = false,
  actions = {
    left: null,
    right: null
  },
  extra = null,
  ...props
}) => {
  const withActions = !!(actions.left || actions.right);
  const T = (
    <Table
      bordered={bordered}
      pagination={TablePagination(pagination)}
      {...props}
    />
  );
  return withActions ? TableWithHeader(T, actions, extra) : T;
};

const TableWithHeader = (T, actions, extra) => {
  const { left, right } = actions;
  return (
    <>
      <div className={styles.tableActions}>
        {left && <div className={styles.left}>{left}</div>}
        {right && <div className={styles.right}>{right}</div>}
      </div>
      {extra && <div className={styles.tableExtra}>{extra}</div>}
      {T}
    </>
  );
};

const TablePagination = pagination => {
  if (!pagination) {
    return false;
  }

  return {
    showQuickJumper: true,
    ...pagination
  };
};
