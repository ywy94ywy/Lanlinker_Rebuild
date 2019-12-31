import React from 'react';
import { PageHeaderWrapper, CustomCard, CustomTable } from 'lanlinker';
import { Button, Input, DatePicker, Form, Select } from 'antd';

export default () => {
  return (
    <PageHeaderWrapper>
      <CustomCard>
        <CustomTable
          columns={columns}
          dataSource={data}
          rowKey={(v, i) => i}
          actions={{
            left: <Button type="primary">新增刷卡记录</Button>,
            right: (
              <>
                <div style={{ width: 'fit-content' }}>
                  <Form layout="inline">
                    <Form.Item label="入场日期">
                      <DatePicker></DatePicker>
                    </Form.Item>
                  </Form>
                </div>
                <div style={{ width: 250 }}>
                  <Input placeholder="请输入姓名或身份证号"></Input>
                </div>
                <Button type="primary">查询</Button>
                <Button type="primary">导出Excel</Button>
              </>
            ),
          }}
        ></CustomTable>
      </CustomCard>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '流水编号',
    dataIndex: 'a',
  },
  {
    title: '姓名',
    dataIndex: 'b',
  },
  {
    title: '身份证号',
    dataIndex: 'c',
  },
  {
    title: '岗位',
    dataIndex: 'd',
  },
  {
    title: '劳务队伍',
    dataIndex: 'e',
  },
  {
    title: '劳务班组',
    dataIndex: 'f',
  },
];

const data = [
  {
    a: '20190304123',
    b: '翟志刚',
    c: '237167199412616291',
    d: '起重机械拆装工',
    e: 'fffffffff队',
    f: 'ffffff班组',
  },
  {
    a: '20190304123',
    b: '翟志刚',
    c: '237167199412616291',
    d: '起重机械拆装工',
    e: 'fffffffff队',
    f: 'ffffff班组',
  },
  {
    a: '20190304123',
    b: '翟志刚',
    c: '237167199412616291',
    d: '起重机械拆装工',
    e: 'fffffffff队',
    f: 'ffffff班组',
  },
  {
    a: '20190304123',
    b: '翟志刚',
    c: '237167199412616291',
    d: '起重机械拆装工',
    e: 'fffffffff队',
    f: 'ffffff班组',
  },
  {
    a: '20190304123',
    b: '翟志刚',
    c: '237167199412616291',
    d: '起重机械拆装工',
    e: 'fffffffff队',
    f: 'ffffff班组',
  },
  {
    a: '20190304123',
    b: '翟志刚',
    c: '237167199412616291',
    d: '起重机械拆装工',
    e: 'fffffffff队',
    f: 'ffffff班组',
  },
  {
    a: '20190304123',
    b: '翟志刚',
    c: '237167199412616291',
    d: '起重机械拆装工',
    e: 'fffffffff队',
    f: 'ffffff班组',
  },
  {
    a: '20190304123',
    b: '翟志刚',
    c: '237167199412616291',
    d: '起重机械拆装工',
    e: 'fffffffff队',
    f: 'ffffff班组',
  },
];
