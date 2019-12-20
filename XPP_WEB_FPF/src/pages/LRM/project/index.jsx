import React from 'react';
import { Card, Row, Tabs, Form, Col } from 'antd';
import styles from './style.less';

const { TabPane } = Tabs;

const index = () => {
  return (
    <Row className={styles.project} type="flex">
      <div className={styles.left}>
        <Card title="吾悦广场1-7号楼住宅楼项目" bodyStyle={{ padding: 0 }} bordered={false}></Card>
        <div className={styles.gallery}>
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576839330224&di=0512159bdc6a2d7bcbc32ecadaa37c5e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170426%2F046dc4a2a4064e928e740980324e5c41_th.jpg"
            alt=""
          />
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576839330224&di=0512159bdc6a2d7bcbc32ecadaa37c5e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170426%2F046dc4a2a4064e928e740980324e5c41_th.jpg"
            alt=""
          />
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576839330224&di=0512159bdc6a2d7bcbc32ecadaa37c5e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170426%2F046dc4a2a4064e928e740980324e5c41_th.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <Card title="项目基础信息详情" bodyStyle={{ padding: 0 }} bordered={false}>
          <Tabs className={styles.tabs}>
            <TabPane tab="项目基本信息" key="1">
              <Test></Test>
            </TabPane>
            <TabPane tab="五方责任主体基本信息" key="2">
              <Tabs type="card">
                <TabPane tab="承建单位" key="1">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="建设单位" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="设计单位" key="3">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="勘查单位" key="4">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="监理单位" key="5">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </TabPane>
            <TabPane tab="参建各方基本信息" key="3">
              <Tabs type="card">
                <TabPane tab="劳务分包单位" key="1">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="劳务专业分包单位" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="劳务甲指分包单位" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </Row>
  );
};

const Test = Form.create()(({ form }) => {
  const { getFieldDecorator } = form;
  return (
    <Form layout="inline">
      <div className={styles.wrapper}>
        <Row type="flex">
          <Form.Item label="项目简称">
            <span>吾悦广场2222222222222222</span>
          </Form.Item>
        </Row>
        <Row type="flex">
          <Form.Item label="项目简称asdasd">
            <span>吾悦广场</span>
          </Form.Item>
          <Form.Item label="项目简称">
            {getFieldDecorator('1', {
              rules: [{ required: true }],
            })(<span>吾悦广场</span>)}
          </Form.Item>
        </Row>
        <Row type="flex">
          <Form.Item label="项目简称asdasd">
            <span>吾悦广场</span>
          </Form.Item>
          <Form.Item label="项目简称">
            {getFieldDecorator('1', {
              rules: [{ required: true }],
            })(<span>吾悦广场</span>)}
          </Form.Item>
        </Row>
        <Row type="flex">
          <Form.Item label="项目简称asdasd">
            <span>吾悦广场</span>
          </Form.Item>
          <Form.Item label="项目简称">
            {getFieldDecorator('1', {
              rules: [{ required: true }],
            })(<span>吾悦广场</span>)}
          </Form.Item>
        </Row>
      </div>
      <div className={styles.wrapper}>
        <Form.Item label="项目简称">
          <span>吾悦广场</span>
        </Form.Item>
        <Form.Item label="项目简称">
          {getFieldDecorator('1', {
            rules: [{ required: true }],
          })(<span>吾悦广场</span>)}
        </Form.Item>
      </div>
      <div className={styles.wrapper}>
        <Form.Item label="项目简称">
          <span>吾悦广场</span>
        </Form.Item>
        <Form.Item label="项目简称">
          {getFieldDecorator('1', {
            rules: [{ required: true }],
          })(<span>吾悦广场</span>)}
        </Form.Item>
      </div>
    </Form>
  );
});

export default index;
