import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Row, Layout, Form, DatePicker } from 'antd';
import { PageHeaderWrapper, CustomCardTabs, CustomTable } from 'lanlinker';
import LList from '@/components/LList';
import styles from './style.less';

const { TabPane } = CustomCardTabs;
const { Sider, Content } = Layout;

export default () => {
  const [s, ss] = useState({});
  const { a, b, c, d, e, f } = s;

  useEffect(() => {
    setTimeout(() => {
      ss(fd);
    }, 1000);
  }, []);

  return (
    <PageHeaderWrapper
      className={styles.contract}
      extra={
        <>
          <span>组织名称：</span>
          <Select></Select>
        </>
      }
    >
      <CustomCardTabs
      // tabBarExtraContent={
      //   <Row type="flex" style={{ width: 300, marginTop: '12px' }}>
      //     <Input
      //       placeholder="请输入姓名或身份证号"
      //       style={{ width: 200, marginRight: '10px' }}
      //     ></Input>
      //     <Button type="primary">查询</Button>
      //   </Row>
      // }
      >
        <TabPane tab="未签劳动合同" key="1">
          <Layout>
            <Content>
              <CustomTable
                dataSource={data1}
                columns={columns1}
                rowKey={(v, i) => i}
                bordered
                scroll={{ y: 500 }}
                actions={{
                  right: (
                    <>
                      <Input
                        placeholder="请输入姓名或身份证号"
                        style={{ width: 200, marginRight: '10px' }}
                      ></Input>
                      <Button type="primary">查询</Button>
                      <Button type="primary">导出Excel</Button>
                    </>
                  ),
                }}
              ></CustomTable>
            </Content>
            <Sider theme="light" width={340} className={styles.right}>
              <LList.Labour
                profile={f}
                name={a}
                post={b}
                company={c}
                team={d}
                group={e}
                buttonProps={{ text: '签订劳动合同' }}
              ></LList.Labour>
              <div className={styles.file}>
                <p className={styles.title}>合同文件</p>
                <ContractForm></ContractForm>
              </div>
            </Sider>
          </Layout>
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

const fd = {
  a: '赵建平',
  b: '混凝土工',
  c: '南通奇润建筑工程有限公司',
  d: '胡志鹏队',
  e: '胡志混凝土组',
  f: 'http://b-ssl.duitang.com/uploads/item/201607/26/20160726185736_yPmrE.thumb.224_0.jpeg',
};
