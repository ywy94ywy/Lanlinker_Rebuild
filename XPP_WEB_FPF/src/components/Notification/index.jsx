import { useMemo } from 'react';
import { Notification } from 'lanlinker';
import { Tabs, List, Avatar, message } from 'antd';
import { connect } from 'dva';
import classNames from 'classnames';
import style from './index.less';

const { TabPane } = Tabs;

export default connect(({ user: { notifications, prompts } }) => ({
  notifications,
  prompts,
}))(({ notifications, prompts, dispatch }) => {
  const readNotification = index => {
    dispatch({ type: 'user/fakeReadNotification', payload: index });
  };
  const readPrompt = index => {
    dispatch({ type: 'user/fakeReadPrompt', payload: index });
  };

  const clearNotifications = () => {
    dispatch({ type: 'user/clearNotifications' }).then(() => {
      message.success('您已清空了通知！');
    });
  };

  const clearPrompts = () => {
    dispatch({ type: 'user/clearPrompts' }).then(() => {
      message.success('您已清空了提醒！');
    });
  };

  const notificationsLength = useMemo(() => notifications.filter(v => !v.readed).length, [
    notifications,
  ]);
  const promptsLength = useMemo(() => prompts.filter(v => !v.readed).length, [prompts]);

  return (
    <Notification
      className={style.notiPanel}
      content={
        <Content
          notifications={notifications}
          prompts={prompts}
          readNotification={readNotification}
          readPrompt={readPrompt}
          clearNotifications={clearNotifications}
          clearPrompts={clearPrompts}
          notificationsLength={notificationsLength}
          promptsLength={promptsLength}
        ></Content>
      }
      count={notificationsLength + promptsLength}
    ></Notification>
  );
});

const Content = ({
  notifications,
  prompts,
  readNotification,
  readPrompt,
  clearNotifications,
  clearPrompts,
  notificationsLength,
  promptsLength,
}) => {
  return (
    <Tabs>
      <TabPane
        tab={`通知${notificationsLength > 0 ? ' (' + notificationsLength + ')' : ''}`}
        key="1"
      >
        <List
          className={style.list}
          dataSource={notifications}
          locale={{
            emptyText: <Empty></Empty>,
          }}
          renderItem={(item, index) => (
            <List.Item
              className={classNames(style.listItem, item.readed && style.itemReaded)}
              onClick={() => {
                readNotification && readNotification(index);
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
            clearNotifications && clearNotifications();
          }}
        >
          清空消息
        </div>
      </TabPane>
      <TabPane tab={`提醒${promptsLength > 0 ? ' (' + promptsLength + ')' : ''}`} key="2">
        <List
          className={style.list}
          dataSource={prompts}
          locale={{
            emptyText: <Empty></Empty>,
          }}
          renderItem={(item, index) => (
            <List.Item
              className={classNames(style.listItem, item.readed && style.itemReaded)}
              onClick={() => {
                readPrompt && readPrompt(index);
              }}
            >
              <List.Item.Meta title={item.description} description={item.time} />
            </List.Item>
          )}
        />
        <div
          className={style.clear}
          onClick={() => {
            clearPrompts && clearPrompts();
          }}
        >
          清空消息
        </div>
      </TabPane>
    </Tabs>
  );
};

// 空消息
const Empty = () => (
  <div className={style.empty}>
    <img
      src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
      alt="您已读完所有消息"
    />
    <div>您已读完所有消息</div>
  </div>
);
