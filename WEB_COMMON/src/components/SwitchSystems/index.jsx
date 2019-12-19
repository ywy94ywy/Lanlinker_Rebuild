/**
 * @module 系统切换
 * @todo 公司列表
 * @todo 项目树
 */
import React from 'react'
import { Icon, Dropdown, Card, Select } from 'antd'
import SearchTree from '../SearchTree'
import style from './index.less'

export default ({
  currentProject = <></>,
  applications = [],
  companys = [],
  tree = [],
  ...props
}) => {

  return (
    <div className={style.switchSystems}>
      <Dropdown
        overlayClassName={style.appPanel}
        overlay={<App applications={applications} companys={companys}></App>}
        trigger={['click']}
        getPopupContainer={trigger => trigger.parentNode}
      >
        <div className={style.switcher}>
          <Icon type='appstore'></Icon>
        </div>
      </Dropdown>
      <Dropdown
        overlayClassName={style.projPanel}
        overlay={<Project tree={tree} {...props}></Project>}
        trigger={['click']}
        getPopupContainer={trigger => trigger.parentNode}
      >
        {currentProject && (
          <div className={style.project}>{currentProject}</div>
        )}
      </Dropdown>
    </div>
  )
}

// 应用中心
const App = ({ applications, companys }) => {
  return (
    <Card
      title='应用中心'
      bordered={false}
      extra={
        <Select defaultValue={companys[0].value} style={{ width: '200px' }}>
          {companys.map((v, i) => (
            <Select.Option value={v.value} key={i}>
              {v.value}
            </Select.Option>
          ))}
        </Select>
      }
    >
      {applications.map((v, i) => {
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

// 项目
const Project = ({ tree, onSelect }) => {
  return (
    <SearchTree
      data={tree}
      style={{ height: '505px' }}
      onlySelectLeaf
      onSelect={onSelect}
    ></SearchTree>
  )
}
