import React, { useState, useMemo } from 'react'
import { Input, Icon } from 'antd'
import classNames from 'classnames'
import CustomTree from '../../CustomTree'
import styles from './style.less'

export default ({
  data = [],
  titleName = 'title',
  keyName = 'id',
  className,
  style,
  children,
  ...props
}) => {
  const nodeList = useMemo(() => getNodeList(data, titleName, keyName), [
    data,
    titleName,
    keyName,
  ]) // 平铺树节点
  const [expandedKeys, setExpendedKeys] = useState(nodeList.map(v => v.key))
  const [autoExpandParent, setAutoExpandParent] = useState(false)

  // 搜索
  const onSearch = value => {
    const expandList = nodeList
      .filter(v => v.title.indexOf(value) > -1)
      .map(v => v.key)
    setExpendedKeys(expandList)
    setAutoExpandParent(true)
  }

  return (
    <div className={classNames(styles.searchTree, className)} style={style}>
      <Input.Search
        placeholder='请输入...'
        className={styles.search}
        onSearch={onSearch}
      ></Input.Search>
      <CustomTree
        data={data}
        titleName={titleName}
        keyName={keyName}
        switcherIcon={<Icon type='down' />}
        className={styles.tree}
        showIcon
        showLine
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onExpand={expandedKeys => {
          setExpendedKeys(expandedKeys)
          setAutoExpandParent(false)
        }}
        {...props}
      >
        {children}
      </CustomTree>
    </div>
  )
}

// 平铺树节点
const getNodeList = (tree, titleName, keyName) => {
  const dataList = []
  tree.forEach(v => {
    dataList.push({
      title: v[titleName],
      key: v[keyName],
    })
    if (v.children) {
      dataList.push(...getNodeList(v.children, titleName, keyName))
    }
  })
  return dataList
}
