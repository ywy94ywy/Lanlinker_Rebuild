import React from 'react';
import { Form } from 'antd';
import styles from './style.less';
import classNames from 'classnames';
import license from './license.png';

export default ({ className, data = {}, ...props }) => {
  const { a, b, c, d, e, f, g, h, i, j, k, l } = data;
  return (
    <div className={classNames(styles.license, className)} {...props}>
      <img src={license} alt="" />
      <div className={styles.content}>
        <Form>
          <Form.Item label="统一社会信用代码">
            <span>{a}</span>
          </Form.Item>
          <Form.Item label="名称">
            <span>{c}</span>
          </Form.Item>
          <Form.Item label="类型">
            <span>{d}</span>
          </Form.Item>
          <Form.Item label="住所">
            <span>{e}</span>
          </Form.Item>
          <Form.Item label="法定代表人">
            <span>{f}</span>
          </Form.Item>
          <Form.Item label="注册资本">
            <span>{g}</span>
          </Form.Item>
          <Form.Item label="成立日期">
            <span>{h}</span>
          </Form.Item>
          <Form.Item label="营业期限">
            <span>{i}</span>
          </Form.Item>
          <Form.Item label="经营范围" className={styles.ellipsis}>
            <span>{j}</span>
          </Form.Item>
          <Form.Item label="登记机关">
            <span>{k}</span>
          </Form.Item>
          <Form.Item label="登记时间">
            <span>{l}</span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
