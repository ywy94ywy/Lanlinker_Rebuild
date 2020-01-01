/**
 * @module 项目考勤统计
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
            dataSource={data}
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
            dataSource={data}
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
            dataSource={data}
            columns={columns3}
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
        <TabPane tab="刷卡记录" key="4">
          <CustomTable
            dataSource={data}
            columns={columns4}
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
    title: '劳务队长姓名',
    dataIndex: 'b',
  },
  {
    title: '刷卡次数',
    dataIndex: 'c',
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
    title: '劳务班长姓名',
    dataIndex: 'b',
  },
  {
    title: '刷卡次数',
    dataIndex: 'c',
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
    title: '姓名',
    dataIndex: 'c',
  },
  {
    title: '岗位',
    dataIndex: 'd',
  },
  {
    title: '刷卡次数',
    dataIndex: 'e',
  },
];
const columns4 = [
  {
    title: '流水编号',
    dataIndex: 'a',
  },
  {
    title: '刷卡时间',
    dataIndex: 'b',
  },
  {
    title: '通勤标志',
    dataIndex: 'c',
  },
  {
    title: '通勤类型',
    dataIndex: 'd',
  },
  {
    title: '刷卡照片',
    dataIndex: 'e',
  },
];
const data= [
  {
    a: 'aaaaaa',
    b: 'aaaaaa',
    c: 'aaaaaa',
    d: 'aaaaaa',
    e: 'aaaaaa',
  },
  {
    a: 'aaaaaa',
    b: 'aaaaaa',
    c: 'aaaaaa',
    d: 'aaaaaa',
    e: 'aaaaaa',
  },
  {
    a: 'aaaaaa',
    b: 'aaaaaa',
    c: 'aaaaaa',
    d: 'aaaaaa',
    e: 'aaaaaa',
  },
  {
    a: 'aaaaaa',
    b: 'aaaaaa',
    c: 'aaaaaa',
    d: 'aaaaaa',
    e: 'aaaaaa',
  },
  {
    a: 'aaaaaa',
    b: 'aaaaaa',
    c: 'aaaaaa',
    d: 'aaaaaa',
    e: 'aaaaaa',
  },
];
