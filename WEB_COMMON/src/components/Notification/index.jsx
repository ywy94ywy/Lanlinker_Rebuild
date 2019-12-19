/**
 * @module 消息中心
 * @todo 消息详情
 */
import React from 'react'
import { Icon, Badge, Dropdown } from 'antd'
import style from './index.less'

export default ({ className, content = <></>, count = 0 } = {}) => {
  return (
    <Dropdown
      overlayClassName={className}
      overlay={content}
      trigger={['click']}
      getPopupContainer={trigger => trigger.parentNode}
    >
      <div className={style.notification}>
        <Badge count={count}>
          <Icon type='bell'></Icon>
        </Badge>
      </div>
    </Dropdown>
  )
}
