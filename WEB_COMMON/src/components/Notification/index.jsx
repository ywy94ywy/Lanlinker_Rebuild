/**
 * @module 消息中心
 * @todo 消息详情
 * @todo 清空消息message
 */
import React from 'react'
import { Icon, Badge, Dropdown, Tabs, List, Avatar, message } from 'antd'
import classnames from 'classnames'
import style from './index.less'

const { TabPane } = Tabs

export default (props = {}) => {
  const { notificationsLength = 0, promptsLength = 0 } = props

  return (
    <Dropdown
      overlayClassName={style.notiPanel}
      overlay={<Content {...props}></Content>}
      trigger={['click']}
      getPopupContainer={trigger => trigger.parentNode}
    >
      <div className={style.notification}>
        <Badge count={notificationsLength + promptsLength}>
          <Icon type='bell'></Icon>
        </Badge>
      </div>
    </Dropdown>
  )
}

const Content = ({
  notifications,
  prompts,
  setNotifications,
  setPrompts,
  notificationsLength,
  promptsLength,
}) => {
  return (
    <Tabs>
      <TabPane
        tab={`通知${
          notificationsLength > 0 ? ' (' + notificationsLength + ')' : ''
        }`}
        key='1'
      >
        <List
          className={style.list}
          dataSource={notifications}
          locale={{
            emptyText: (
              <div className={style.empty}>
                <img
                  src='https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg'
                  alt=''
                />
                <div>您已读完所有消息</div>
              </div>
            ),
          }}
          renderItem={(item, index) => (
            <List.Item
              className={classnames(
                style.listItem,
                item.readed && style.itemReaded,
              )}
              onClick={() => {
                const temp = [...notifications]
                temp[index].readed = true
                if (setNotifications) setNotifications(temp)
              }}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.title}
                description={
                  <div className={style.description}>
                    <p>姓名：{item.name}</p>
                    <p>事件：{item.event}</p>
                    <p>{item.time}</p>
                  </div>
                }
              />
            </List.Item>
          )}
        />
        <div
          className={style.clear}
          onClick={() => {
            if (setNotifications) {
              setNotifications([])
              message.success('您已清空了通知！')
            }
          }}
        >
          清空消息
        </div>
      </TabPane>
      <TabPane
        tab={`提醒${promptsLength > 0 ? ' (' + promptsLength + ')' : ''}`}
        key='2'
      >
        <List
          className={style.list}
          dataSource={prompts}
          locale={{
            emptyText: (
              <div className={style.empty}>
                <img
                  src='https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg'
                  alt=''
                />
                <div>您已读完所有消息</div>
              </div>
            ),
          }}
          renderItem={(item, index) => (
            <List.Item
              className={classnames(
                style.listItem,
                item.readed && style.itemReaded,
              )}
              onClick={() => {
                const temp = [...prompts]
                temp[index].readed = true
                if (setPrompts) setPrompts(temp)
              }}
            >
              <List.Item.Meta
                title={item.description}
                description={item.time}
              />
            </List.Item>
          )}
        />
        <div
          className={style.clear}
          onClick={() => {
            if (setPrompts) {
              setPrompts([])
              message.success('您已清空了提醒！')
            }
          }}
        >
          清空消息
        </div>
      </TabPane>
    </Tabs>
  )
}
