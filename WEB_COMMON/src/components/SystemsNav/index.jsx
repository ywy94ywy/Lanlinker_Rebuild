/**
 * @module 系统菜单栏
 */
import React from 'react'
import { Icon } from 'antd'
import style from './index.less'

const systems = [
  {
    icon: 'appstore',
    title: '物料',
  },
  {
    icon: 'appstore',
    title: '设备',
  },
  {
    icon: 'appstore',
    title: '质量',
  },
  {
    icon: 'appstore',
    title: '视频',
  },
  {
    icon: 'appstore',
    title: '综合',
  },
  {
    icon: 'appstore',
    title: '环境',
  },
]

export default () => {
  return (
    <div className={style.systemsNav}>
      {systems.map((v, i) => (
        <span key={i}>
          <Icon type={v.icon}></Icon>
          {v.title}
        </span>
      ))}
    </div>
  )
}
