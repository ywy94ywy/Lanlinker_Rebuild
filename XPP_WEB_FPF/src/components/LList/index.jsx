import React from 'react';
import { List, Button } from 'antd';
import styles from './style.less';

const LList = List;

export default LList;

// 合同管理右侧员工信息卡片
LList.Labour = ({
  profile,
  name = '员工姓名',
  post = '岗位',
  company,
  team,
  group,
  buttonProps: { text = '', ...props } = {},
}) => (
  <List.Item className={styles.lList}>
    <List.Item.Meta
      avatar={<div className={styles.profile}>{profile && <img src={profile} alt="头像" />}</div>}
      title={name}
      description={
        <>
          <p>{post}</p>
          <div>劳务公司：{company}</div>
          <div>队伍：{team}</div>
          <div>班组：{group}</div>
        </>
      }
    />
    {text && (
      <Button type="primary" size="small" className={styles.btn} {...props}>
        {text}
      </Button>
    )}
  </List.Item>
);
