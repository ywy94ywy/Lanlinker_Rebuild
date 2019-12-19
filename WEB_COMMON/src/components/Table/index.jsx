/**
 * @module: antd-Table(Resizeable)
 * @author: DesYang
 */
import React, { useState } from 'react'
import { Table } from 'antd'
import { Resizable } from 'react-resizable'
import './style.less'

const ResizeableTitle = ({ onResize, width, ...restProps }) => {
  if (!width) {
    return <th {...restProps} />
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  )
}

const components = {
  header: {
    cell: ResizeableTitle,
  },
}

export default ({ scale, pagination = false, columns, ...props }) => {
  const [myColumns, setMyColumns] = useState(columns)

  const handleResize = index => (e, { size }) => {
    setMyColumns(oldColumns => {
      const nextColumns = [...oldColumns]
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      }
      return nextColumns
    })
  }

  columns = scale
    ? myColumns.map((col, index) => ({
        ...col,
        onHeaderCell: column => ({
          width: column.width,
          onResize: handleResize(index),
        }),
      }))
    : columns

  return (
    <Table
      columns={columns}
      pagination={pagination}
      bordered
      components={scale && components}
      {...props}
    />
  )
}
