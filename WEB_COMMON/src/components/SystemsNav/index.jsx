/**
 * @module 系统菜单栏
 */
import React from 'react'
import { Icon } from 'antd'
import style from './index.less'

export default ({ systemsNav = [] }) => {
  return (
    <div className={style.systemsNav}>
      {systemsNav.map((v, i) => (
        <span key={i}>
          <Icon type={v.icon}></Icon>
          {v.title}
        </span>
      ))}
    </div>
  )
}
