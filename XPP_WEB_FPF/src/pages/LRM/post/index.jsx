/**
 * @module 项目人员统计
 * @author DesYang
 */

import React from 'react';
import { PageHeaderWrapper, CustomCardTabs, CustomTable } from 'lanlinker';
import { Input, Button, DatePicker, Form } from 'antd';
const { TabPane } = CustomCardTabs;

export default () => {
  return (
    <PageHeaderWrapper extra={<div>123</div>}>
      <CustomCardTabs>
        <TabPane tab="劳务队伍" key="1">
          <CustomTable
            dataSource={data1}
            columns={columns1}
            actions={{
              right: (
                <>
                  <div style={{ width: 'fit-content' }}>
                    <Form layout="inline">
                      <Form.Item label="进场日期">
                        <DatePicker></DatePicker>
                      </Form.Item>
                      <Form.Item>
                        <Input placeholder="请输入姓名或身份证号"></Input>
                      </Form.Item>
                    </Form>
                  </div>
                  <Button type="primary">查询</Button>
                  <Button>重置</Button>
                </>
              ),
            }}
          ></CustomTable>
        </TabPane>
        <TabPane tab="劳务班组" key="2">
          <CustomTable
            dataSource={data1}
            columns={columns2}
            actions={{
              right: (
                <>
                  <div style={{ width: 'fit-content' }}>
                    <Form layout="inline">
                      <Form.Item label="进场日期">
                        <DatePicker></DatePicker>
                      </Form.Item>
                      <Form.Item>
                        <Input placeholder="请输入姓名或身份证号"></Input>
                      </Form.Item>
                    </Form>
                  </div>
                  <Button type="primary">查询</Button>
                  <Button>重置</Button>
                </>
              ),
            }}
          ></CustomTable>
        </TabPane>
        <TabPane tab="劳务人员" key="3">
          <CustomTable
            dataSource={data3}
            columns={columns3}
            scroll={{
              x: 1050,
            }}
            actions={{
              right: (
                <>
                  <div style={{ width: 'fit-content' }}>
                    <Form layout="inline">
                      <Form.Item label="进场日期">
                        <DatePicker></DatePicker>
                      </Form.Item>
                      <Form.Item>
                        <Input placeholder="请输入姓名或身份证号"></Input>
                      </Form.Item>
                    </Form>
                  </div>
                  <Button type="primary">查询</Button>
                  <Button>重置</Button>
                </>
              ),
            }}
          ></CustomTable>
        </TabPane>
      </CustomCardTabs>
    </PageHeaderWrapper>
  );
};

const columns1 = [
  {
    title: '序号',
    render: (v, r, i) => i,
  },
  {
    title: '劳务队伍名称',
    dataIndex: 'a',
  },
  {
    title: '在职人员',
    dataIndex: 'b',
  },
  {
    title: '进场人员',
    dataIndex: 'c',
  },
  {
    title: '退场人员',
    dataIndex: 'd',
  },
  {
    title: '银行账号',
    dataIndex: 'e',
  },
  {
    title: '劳动合同',
    dataIndex: 'f',
  },
  {
    title: '安全教育',
    dataIndex: 'g',
  },
  {
    title: '持证上岗',
    dataIndex: 'h',
  },
  {
    title: '住宿分配',
    dataIndex: 'i',
  },
];
const columns2 = [
  {
    title: '序号',
    render: (v, r, i) => i,
  },
  {
    title: '劳务班组名称',
    dataIndex: 'a',
  },
  {
    title: '在职人员',
    dataIndex: 'b',
  },
  {
    title: '进场人员',
    dataIndex: 'c',
  },
  {
    title: '退场人员',
    dataIndex: 'd',
  },
  {
    title: '银行账号',
    dataIndex: 'e',
  },
  {
    title: '劳动合同',
    dataIndex: 'f',
  },
  {
    title: '安全教育',
    dataIndex: 'g',
  },
  {
    title: '持证上岗',
    dataIndex: 'h',
  },
  {
    title: '住宿分配',
    dataIndex: 'i',
  },
];
const columns3 = [
  {
    title: '序号',
    render: (v, r, i) => i,
  },
  {
    title: '姓名',
    dataIndex: 'a',
  },
  {
    title: '身份证号',
    dataIndex: 'b',
  },
  {
    title: '岗位',
    dataIndex: 'c',
  },
  {
    title: '进场时间',
    dataIndex: 'd',
  },
  {
    title: '退场时间',
    dataIndex: 'e',
  },
  {
    title: '劳动合同',
    dataIndex: 'f',
  },
  {
    title: '安全教育',
    dataIndex: 'g',
  },
  {
    title: '持证上岗',
    dataIndex: 'h',
  },
  {
    title: '住宿分配',
    dataIndex: 'i',
  },
  {
    title: '家庭地址',
    dataIndex: 'j',
  },
  {
    title: '联系电话',
    dataIndex: 'k',
  },
  {
    title: '开户银行',
    dataIndex: 'l',
  },
  {
    title: '银行分行',
    dataIndex: 'm',
  },
  {
    title: '银行账号',
    dataIndex: 'n',
  },
  {
    title: '工资详情',
    render: () => <a href="/">查看详情</a>,
  },
  {
    title: '考勤记录',
    render: () => <a href="/">查看详情</a>,
  },
];

const data1 = [
  {
    a: '案发时发生',
    b: '200',
    c: '200',
    d: '200',
    e: '200',
    f: '200',
    g: '200',
    h: '200',
    i: '200',
  },
  {
    a: '案发时发生',
    b: '200',
    c: '200',
    d: '200',
    e: '200',
    f: '200',
    g: '200',
    h: '200',
    i: '200',
  },
  {
    a: '案发时发生',
    b: '200',
    c: '200',
    d: '200',
    e: '200',
    f: '200',
    g: '200',
    h: '200',
    i: '200',
  },
];
const data3 = [
  {
    a: '案发时发生',
    b: '200',
    c: '200',
    d: '200',
    e: '200',
    f: '200',
    g: '200',
    h: '200',
    i: '200',
    j: '200',
    k: '200',
    l: '200',
    m: '200',
    n: '200',
  },
];
