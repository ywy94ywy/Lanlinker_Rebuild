/**
 * @module 项目信息
 * @author DesYang
 * @todo 未完成,因为表单与表格的封装，营业执照的逻辑
 */
import React from 'react';
import { Card, Row, Tabs, Form } from 'antd';
import License from '@/components/License';
import styles from './style.less';
const { TabPane } = Tabs;

const index = () => {
  return (
    <div className={styles.project}>
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
            <TabPane tab="项目基本信息" key="1-1">
              <Test></Test>
            </TabPane>
            <TabPane tab="五方责任主体基本信息" key="2-2">
              <Tabs type="card">
                <TabPane tab="承建单位" key="1">
                  1<License data={data}></License>
                </TabPane>
                <TabPane tab="建设单位" key="2">
                  2<License data={data}></License>
                </TabPane>
                <TabPane tab="设计单位" key="3">
                  3<License data={data}></License>
                </TabPane>
                <TabPane tab="勘查单位" key="4">
                  4<License data={data}></License>
                </TabPane>
                <TabPane tab="监理单位" key="5">
                  5<License data={data}></License>
                </TabPane>
              </Tabs>
            </TabPane>
            <TabPane tab="参建各方基本信息" key="3-3">
              <Tabs type="card">
                <TabPane tab="劳务分包单位" key="11">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="劳务专业分包单位" key="22">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="劳务甲指分包单位" key="33">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

const data = {
  a: '913206811388888888',
  b: '320681000000000',
  c: '江苏南通二建集团有限公司',
  d: '有限责任公司',
  e: '上海市人民中路888号',
  f: '杨晓东',
  g: '人民币18500万元整',
  h: '2001-11-12',
  i: '2001-06-18 ~ 2033-12-02',
  j:
    '房屋建筑工程总承包（特级）；市政公用工程施工总承包（壹级）；建筑装修装饰工程专业承包（壹级）；机电设备安装工程专业承包（壹级）；钢结构工程专业承包（壹级）；机电安装工程施工总承包（贰级）；消防设施工程专业承包（贰级）；地基基础工程专业承包（贰级）；起重设备安装工程专业承包（贰级）（涉及专项审批的，在审批机关批准的经营期限内从事经营）；承包与其实力、规模、业绩相适应的国外工程项目；五金、建筑材料销售；建筑施工机械设备租赁，园林绿化工程施工，模块化建筑技术研发、组装。（依法须经批准的项目，经相关部门批准后方可开展经营活动）',
  k: '上海市市场监督管理局',
  l: '2001-06-18',
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
