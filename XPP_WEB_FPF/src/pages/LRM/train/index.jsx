import React from 'react';
import { PageHeaderWrapper, CustomCardTabs, CustomTable } from 'lanlinker';
import { Button, Input, DatePicker, Form, Select } from 'antd';
const { TabPane } = CustomCardTabs;

export default () => {
  return (
    <PageHeaderWrapper>
      <CustomCardTabs>
        <TabPane tab="培训汇总记录" key="1">
          <CustomTable
            columns={columns}
            dataSource={data}
            rowKey={(v, i) => i}
            actions={{
              left: (
                <>
                  <Button type="primary">新增</Button>
                  <Button type="danger">删除</Button>
                </>
              ),
              right: (
                <>
                  <div style={{ width: 'fit-content' }}>
                    <Form layout="inline">
                      <Form.Item label="培训日期">
                        <DatePicker></DatePicker>
                      </Form.Item>
                      <Form.Item label="培训类型">
                        <Select placeholder="请选择" style={{ width: 140 }}></Select>
                      </Form.Item>
                    </Form>
                  </div>
                  <div style={{ width: 250 }}>
                    <Input placeholder="请输入培训名称或培训老师姓名"></Input>
                  </div>
                  <div>
                    <Button type="primary">查询</Button>
                  </div>
                </>
              ),
            }}
          ></CustomTable>
        </TabPane>
        <TabPane tab="培训明细记录" key="2"></TabPane>
      </CustomCardTabs>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '培训名称',
    dataIndex: 'a',
  },
  {
    title: '培训类型',
    dataIndex: 'b',
  },
  {
    title: '培训老师',
    dataIndex: 'c',
  },
  {
    title: '培训日期',
    dataIndex: 'd',
  },
  {
    title: '培训时长（小时）',
    dataIndex: 'e',
  },
  {
    title: '培训机构',
    dataIndex: 'f',
  },
  {
    title: '培训地点',
    dataIndex: 'g',
  },
  {
    title: '操作',
    render: () => <a href="/">修改</a>,
  },
];

const data = [
  {
    a: '三级安全培训',
    b: '安全教育',
    c: '孙琼',
    d: '2019-10-11',
    e: '7',
    f: '安全项目部',
    g: '上海市嘉定区德园南路',
  },
  {
    a: '三级安全培训',
    b: '安全教育',
    c: '孙琼',
    d: '2019-10-11',
    e: '7',
    f: '安全项目部',
    g: '上海市嘉定区德园南路',
  },
  {
    a: '三级安全培训',
    b: '安全教育',
    c: '孙琼',
    d: '2019-10-11',
    e: '7',
    f: '安全项目部',
    g: '上海市嘉定区德园南路',
  },
  {
    a: '三级安全培训',
    b: '安全教育',
    c: '孙琼',
    d: '2019-10-11',
    e: '7',
    f: '安全项目部',
    g: '上海市嘉定区德园南路',
  },
  {
    a: '三级安全培训',
    b: '安全教育',
    c: '孙琼',
    d: '2019-10-11',
    e: '7',
    f: '安全项目部',
    g: '上海市嘉定区德园南路',
  },
  {
    a: '三级安全培训',
    b: '安全教育',
    c: '孙琼',
    d: '2019-10-11',
    e: '7',
    f: '安全项目部',
    g: '上海市嘉定区德园南路',
  },
];
