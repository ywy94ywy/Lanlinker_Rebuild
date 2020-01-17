/**
 * @module 通用组件-Tree[antd]
 * @description
 * 1、通过数据额渲染，自定义[title,key,icon]name
 * 2、添加右键菜单功能
 */
import React, { useCallback, useState } from 'react'
import classNames from 'classnames'
import { Tree, Icon } from 'antd'
import { ContextMenuTrigger, ContextMenu } from 'react-contextmenu' // 右键菜单插件
import './style.less'

const { TreeNode } = Tree

const CustomTree = ({
  data = [],
  className,
  titleName = 'title', // TreeNode-titleName
  keyName = 'id', // TreeNode-keyName
  iconName = 'icon', // TreeNode-iconName
  rightClickMenu = '',
  rightClickMenuId = '',
  children,
  ...props
}) => {
  let [rightMenuData, setRightMenuData] = useState({}) // 右键菜单传递的数据

  // 右键菜单触发器
  const WithRightMenu = ({ children, data }) => {
    return rightClickMenuId ? (
      <ContextMenuTrigger
        id={rightClickMenuId}
        collect={() => {
          setRightMenuData(data)
        }}
      >
        {children}
      </ContextMenuTrigger>
    ) : (
      children
    )
  }

  const generateTreeNode = useCallback(
    data => {
      return data.map(({ children = [], ...props }) => {
        const title = props[titleName] || ''
        const key = props[keyName]
        const icon = props[iconName] || ' '
        const rMenuData = { key, title }

        if (children && children.length > 0) {
          return (
            <TreeNode
              icon={
                <WithRightMenu data={rMenuData}>
                  <Icon type={icon} />
                </WithRightMenu>
              }
              title={<WithRightMenu data={rMenuData}>{title}</WithRightMenu>}
              key={key}
            >
              {generateTreeNode(children)}
            </TreeNode>
          )
        } else {
          return (
            <TreeNode
              icon={
                <WithRightMenu data={rMenuData}>
                  <Icon type={icon} />
                </WithRightMenu>
              }
              title={<WithRightMenu data={rMenuData}>{title}</WithRightMenu>}
              key={key}
            />
          )
        }
      })
    },
    [data, titleName, keyName, iconName],
  )

  return (
    <>
      <Tree {...props} className={classNames('hide-file-icon', className)}>
        {children || generateTreeNode(data)}
      </Tree>
      {rightClickMenuId && (
        <ContextMenu id={rightClickMenuId}>
          {rightClickMenu && rightClickMenu(rightMenuData)}
        </ContextMenu>
      )}
    </>
  )
}

export default CustomTree
