/**
 * @module antd-Tree (with search)
 * @author DesYang
 */
import React, { useState, useMemo } from 'react'
import { Tree, Input, Icon } from 'antd'
import { ContextMenuTrigger, ContextMenu } from 'react-contextmenu'
import styles from './index.less'
import classnames from 'classnames'

const { TreeNode } = Tree
const { Search } = Input

// 默认展开第一项
// const defaultExpended = (data = [], keyName) => {
//   let innerKey = ''
//   let d = data
//   while (d[0] && d[0].children) {
//     d = d[0].children
//     innerKey = d[0].id
//   }
//   const parentKey = getParentKey(innerKey, data, keyName)
//   return [parentKey]
// }

// 获取父节点
const getParentKey = (key, tree, keyName) => {
  let parentKey
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node.children) {
      if (node.children.some(item => item[keyName] === key)) {
        parentKey = node[keyName]
      } else if (getParentKey(key, node.children, keyName)) {
        parentKey = getParentKey(key, node.children, keyName)
      }
    }
  }
  return parentKey
}

// 生成树节点
const generateTreeNode = (tree, keyName, onlySelectLeaf) => {
  return tree.map(v => {
    let title = v.name
    if (v.children) {
      return (
        <TreeNode
          icon={<Icon type='bank' />}
          title={<ContextMenuTrigger id='test'>123</ContextMenuTrigger>}
          key={v[keyName]}
          selectable={!onlySelectLeaf}
        >
          {generateTreeNode(v.children, keyName, onlySelectLeaf)}
        </TreeNode>
      )
    } else {
      return (
        <TreeNode
          icon={<Icon type='apartment' />}
          title={title}
          key={v[keyName]}
        />
      )
    }
  })
}

// 生成key列表
const generateList = (tree, keyName) => {
  const dataList = []
  tree.forEach(v => {
    dataList.push(v)
    if (v.children) {
      dataList.push(...generateList(v.children, keyName))
    }
  })
  return dataList
}

/**
 * @description: 带搜索框的Tree
 * @param data:Array
 */
export default ({
  data = [],
  searchName = 'name', // 根据name搜索
  keyName = 'id', // 以id为key
  onlySelectLeaf = false,
  className,
  style,
  ...params
}) => {
  // const [expand, setExpand] = useState(defaultExpended(data, keyName))
  const [autoExpandParent, setAutoExpandParent] = useState(true)
  const TreeChildren = useMemo(
    () => generateTreeNode(data, keyName, onlySelectLeaf),
    [data],
  )
  const nodeList = useMemo(() => generateList(data, keyName), [data])

  // SearchChanged
  const onChange = e => {
    const { value } = e.target
    const expandList = nodeList
      .filter(v => v[searchName].indexOf(value) > -1)
      .map(v => v[keyName])
    setExpand(expandList)
    setAutoExpandParent(true)
  }

  // TreeExpanded
  // const onExpand = expandedKeys => {
  //   setExpand(expandedKeys)
  //   setAutoExpandParent(false)
  // }
  
  return (
    <div className={classnames(styles.tree, className)} style={style}>
      <Search
        className={styles.search}
        placeholder='请输入...'
        onChange={onChange}
      ></Search>
      <Tree
        showLine
        showIcon
        switcherIcon={<Icon type='down' />}
        className={classnames(styles.searchTree, 'hide-file-icon')}
        // expandedKeys={expand}
        // onExpand={onExpand}
        defaultExpandAll={true}
        autoExpandParent={autoExpandParent}
        {...params}
      >
        {TreeChildren}
      </Tree>
      <ContextMenu id='test'>hello</ContextMenu>
    </div>
  )
}
