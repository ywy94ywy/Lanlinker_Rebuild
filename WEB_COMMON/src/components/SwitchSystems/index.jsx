/**
 * @module 系统切换
 * @todo 公司列表
 * @todo 项目树
 */
import React from 'react'
import { Icon, Dropdown, Card } from 'antd'
import style from './index.less'

const systems = [
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(113,187,255,1) 0%,rgba(24,144,255,1) 100%)',
    title: '项目综合管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(255,188,190,1) 0%,rgba(247,121,125,1) 100%)',
    title: '通行证管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(95,226,255,1) 0%,rgba(18,194,233,1) 100%)',
    title: '视频监控管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(181,181,255,1) 0%,rgba(127,127,213,1) 100%)',
    title: '质量安全监管系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(255,224,153,1) 0%,rgba(254,182,20,1) 100%)',
    title: '物料管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(148,148,148,1) 0%,rgba(51,51,51,1) 100%)',
    title: '设备管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(61,243,87,1) 0%,rgba(39,198,62,1) 100%)',
    title: '环境管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(180,255,250,1) 0%,rgba(111,216,209,1) 100%)',
    title: '项目进度管理系统',
  },
]

export default ({ currentSystem }) => {
  return (
    <div className={style.switchSystems}>
      <Dropdown
        overlayClassName={style.sysPanel}
        overlay={<Content></Content>}
        trigger={['click']}
        getPopupContainer={trigger => trigger.parentNode}
      >
        <div className={style.switcher}>
          <Icon type='appstore'></Icon>
        </div>
      </Dropdown>
      {currentSystem && <div className={style.systems}>{currentSystem}</div>}
    </div>
  )
}

const Content = () => {
  return (
    <Card title='南通二建集团有限公司' bordered={false}>
      {systems.map((v, i) => {
        return (
          <div className={style.system} key={i}>
            <div className={style.icon} style={{ background: v.background }}>
              <Icon type={v.icon} className={style.i}></Icon>
            </div>
            <div className={style.title}>{v.title}</div>
          </div>
        )
      })}
    </Card>
  )
}
