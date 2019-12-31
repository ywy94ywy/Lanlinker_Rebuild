import React from 'react';
import { Select, Card, Tabs, Input, Button, Row, Table, List, Form, DatePicker } from 'antd';
import { PageHeaderWrapper, CustomCardTabs, CustomTable } from 'lanlinker';
import styles from './style.less';

const { TabPane } = CustomCardTabs;

export default () => {
  return (
    <PageHeaderWrapper
      extra={
        <>
          <span> 组织名称：</span>
          <Select></Select>
        </>
      }
      className={styles.contract}
    >
      <CustomCardTabs
        className={styles.tabs}
        tabBarExtraContent={
          <Row type="flex" style={{ width: 300, marginTop: '12px' }}>
            <Input
              placeholder="请输入姓名或身份证号"
              style={{ width: 200, marginRight: '10px' }}
            ></Input>
            <Button type="primary">查询</Button>
          </Row>
        }
      >
        <TabPane tab="未签劳动合同" key="1">
          <div className={styles.layout}>
            <div className={styles.left}>
              <CustomTable
                dataSource={data1}
                columns={columns1}
                rowKey={(v, i) => i}
                bordered
                scroll={{ y: 400 }}
                actions={{
                  right: <Button type="primary">导出Excel</Button>,
                }}
              ></CustomTable>
            </div>
            <div className={styles.right}>
              <List.Item className={styles.list}>
                <List.Item.Meta
                  avatar={
                    <div style={{ width: 100, height: 125, background: 'blue' }}>
                      <img src="" style={{ width: 100, height: 125 }} alt="头像" />
                    </div>
                  }
                  title="赵建平"
                  description={
                    <>
                      <p>混凝土工</p>
                      <div>劳务公司：南通奇润建筑工程有限…</div>
                      <div>队伍：胡志鹏队</div>
                      <div>班组：胡志混凝土组</div>
                    </>
                  }
                />
                <div className={styles.button}>
                  <Button type="primary" size="small">
                    签订劳动合同
                  </Button>
                </div>
              </List.Item>
              <div className={styles.file}>
                <p className={styles.title}>合同文件</p>
                <ContractForm></ContractForm>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="已签劳动合同" key="2"></TabPane>
        <TabPane tab="即将到期劳动合同" key="3"></TabPane>
      </CustomCardTabs>
    </PageHeaderWrapper>
  );
};

const ContractForm = Form.create()(() => {
  return (
    <div>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
        <Form.Item label="期限类型" layout="horizontal">
          <Select></Select>
        </Form.Item>
        <Form.Item label="生效日期">
          <DatePicker></DatePicker>
        </Form.Item>
        <Form.Item label="失效日期">
          <DatePicker></DatePicker>
        </Form.Item>
        <Form.Item label="计量单位">
          <Select></Select>
        </Form.Item>
        <Form.Item label="计量单价">
          <Input style={{ width: '80%', marginRight: '20px' }}></Input>元
        </Form.Item>
        <Form.Item label="附件上传">
          <Row type="flex" justify="space-between" style={{ width: '200px', flexWrap: 'wrap' }}>
            <Button type="primary">本地上传</Button>
            <Button type="primary">高拍仪上传</Button>
            <Button type="primary">查看详情</Button>
          </Row>
        </Form.Item>
        <div>
          <Button type="primary">保存</Button>
          <Button>取消</Button>
        </div>
      </Form>
    </div>
  );
});

const data1 = [
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
  },
];

const columns1 = [
  {
    title: '姓名',
    dataIndex: 'a',
    width: 120,
  },
  {
    title: '性别',
    dataIndex: 'b',
    width: 90,
    filters: [
      {
        text: '男',
        value: '1',
      },
      {
        text: '女',
        value: '2',
      },
    ],
  },
  {
    title: '年龄',
    dataIndex: 'c',
    width: 100,
    filters: [
      {
        text: '16~30',
        value: '1',
      },
      {
        text: '31~40',
        value: '2',
      },
      {
        text: '41~50',
        value: '3',
      },
      {
        text: '51~55',
        value: '4',
      },
      {
        text: '55以上',
        value: '5',
      },
    ],
  },
  {
    title: '身份证号',
    dataIndex: 'd',
  },
  {
    title: '岗位',
    dataIndex: 'e',
  },
];
