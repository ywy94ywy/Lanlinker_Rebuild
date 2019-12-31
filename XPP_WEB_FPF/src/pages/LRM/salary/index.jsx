import React from 'react';
import { PageHeaderWrapper, CustomCard, CustomTable } from 'lanlinker';
import { Button, Input, DatePicker, Form, Upload, Icon } from 'antd';

export default () => {
  return (
    <PageHeaderWrapper>
      <CustomCard>
        <CustomTable
          columns={columns}
          dataSource={data}
          rowKey={(v, i) => i}
          scroll={{
            x: 2700,
          }}
          actions={{
            left: (
              <Upload>
                <Button>
                  <Icon type="upload" /> Upload
                </Button>
              </Upload>
            ),
            right: (
              <>
                <div style={{ width: 'fit-content' }}>
                  <Form layout="inline">
                    <Form.Item label="考勤月份">
                      <DatePicker></DatePicker>
                    </Form.Item>
                  </Form>
                </div>
                <div style={{ width: 250 }}>
                  <Input placeholder="请输入姓名或身份证号"></Input>
                </div>
                <Button type="primary">查询</Button>
                <Button type="primary">导出工资清单</Button>
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
    title: '序号',
    key: 'index',
    fixed: 'left',
    width: 80,
    render: (text, record, index) => index,
  },
  {
    title: '姓名',
    dataIndex: 'a',
    fixed: 'left',
    width: 120,
  },
  {
    title: '身份证号',
    dataIndex: 'b',
    fixed: 'left',
    width: 170,
  },
  {
    title: '银行卡号',
    dataIndex: 'c',
    width: 200,
  },
  {
    title: '岗位',
    dataIndex: 'd',
    width: 150,
  },
  {
    title: '出勤工时',
    dataIndex: 'e',
    width: 100,
  },
  {
    title: '工时单价(元)',
    dataIndex: 'f',
    width: 120,
  },
  {
    title: '计件工资/件',
    dataIndex: 'g',
    width: 120,
  },
  {
    title: '计件结算数量',
    dataIndex: 'h',
    width: 120,
  },
  {
    title: '应发金额',
    children: [
      {
        title: '基本工资金额',
        dataIndex: 'i1',
        // width: 120,
      },
      {
        title: '岗位工资金额',
        dataIndex: 'i2',
        // width: 120,
      },
      {
        title: '绩效工资金额',
        dataIndex: 'i3',
        // width: 120,
      },
      {
        title: '奖金金额',
        dataIndex: 'i4',
        // width: 120,
      },
      {
        title: '津贴金额',
        dataIndex: 'i5',
        // width: 120,
      },
      {
        title: '补贴金额',
        dataIndex: 'i6',
        // width: 120,
      },
      {
        title: '加班工资金额',
        dataIndex: 'i7',
        // width: 120,
      },
      {
        title: '应发其他金额',
        dataIndex: 'i8',
        // width: 120,
      },
      {
        title: '应发金额',
        dataIndex: 'i9',
        // width: 120,
      },
      {
        title: '扣发金额',
        dataIndex: 'i10',
        // width: 120,
      },
      {
        title: '实发金额',
        dataIndex: 'i11',
        // width: 120,
      },
      {
        title: '借款金额',
        dataIndex: 'i12',
        // width: 120,
      },
      {
        title: '待款金额',
        dataIndex: 'i13',
        // width: 120,
      },
    ],
  },
  {
    title: '发放时间',
    dataIndex: 'j',
    width: 120,
  },
  {
    title: '备注',
    dataIndex: 'k',
    width: 120,
  },
  {
    title: '操作',
    fixed: 'right',
    render: () => (
      <>
        <a href="/">保存</a>&nbsp;
        <a href="/">取消</a>
      </>
    ),
  },
];

const data = [
  {
    a: '孙可一',
    b: '237167199412616291',
    c: '6222600260001072444',
    d: '二次结构瓦工',
    e: '180',
    f: '20',
    g: '20',
    h: '20',
    i1: '123',
    i2: '123',
    i3: '123',
    i4: '123',
    i5: '123',
    i6: '123',
    i7: '123',
    i8: '123',
    i9: '123',
    i10: '123',
    i11: '123',
    i12: '123',
    i13: '123',
    j: '1dsafssd',
    k: '1dsafssd',
  },
  {
    a: '孙可一',
    b: '237167199412616291',
    c: '6222600260001072444',
    d: '二次结构瓦工',
    e: '180',
    f: '20',
    g: '20',
    h: '20',
    i1: '123',
    i2: '123',
    i3: '123',
    i4: '123',
    i5: '123',
    i6: '123',
    i7: '123',
    i8: '123',
    i9: '123',
    i10: '123',
    i11: '123',
    i12: '123',
    i13: '123',
    j: '1dsafssd',
    k: '1dsafssd',
  },
  {
    a: '孙可一',
    b: '237167199412616291',
    c: '6222600260001072444',
    d: '二次结构瓦工',
    e: '180',
    f: '20',
    g: '20',
    h: '20',
    i1: '123',
    i2: '123',
    i3: '123',
    i4: '123',
    i5: '123',
    i6: '123',
    i7: '123',
    i8: '123',
    i9: '123',
    i10: '123',
    i11: '123',
    i12: '123',
    i13: '123',
    j: '1dsafssd',
    k: '1dsafssd',
  },
  {
    a: '孙可一',
    b: '237167199412616291',
    c: '6222600260001072444',
    d: '二次结构瓦工',
    e: '180',
    f: '20',
    g: '20',
    h: '20',
    i1: '123',
    i2: '123',
    i3: '123',
    i4: '123',
    i5: '123',
    i6: '123',
    i7: '123',
    i8: '123',
    i9: '123',
    i10: '123',
    i11: '123',
    i12: '123',
    i13: '123',
    j: '1dsafssd',
    k: '1dsafssd',
  },
  {
    a: '孙可一',
    b: '237167199412616291',
    c: '6222600260001072444',
    d: '二次结构瓦工',
    e: '180',
    f: '20',
    g: '20',
    h: '20',
    i1: '123',
    i2: '123',
    i3: '123',
    i4: '123',
    i5: '123',
    i6: '123',
    i7: '123',
    i8: '123',
    i9: '123',
    i10: '123',
    i11: '123',
    i12: '123',
    i13: '123',
    j: '1dsafssd',
    k: '1dsafssd',
  },
  {
    a: '孙可一',
    b: '237167199412616291',
    c: '6222600260001072444',
    d: '二次结构瓦工',
    e: '180',
    f: '20',
    g: '20',
    h: '20',
    i1: '123',
    i2: '123',
    i3: '123',
    i4: '123',
    i5: '123',
    i6: '123',
    i7: '123',
    i8: '123',
    i9: '123',
    i10: '123',
    i11: '123',
    i12: '123',
    i13: '123',
    j: '1dsafssd',
    k: '1dsafssd',
  },
  {
    a: '孙可一',
    b: '237167199412616291',
    c: '6222600260001072444',
    d: '二次结构瓦工',
    e: '180',
    f: '20',
    g: '20',
    h: '20',
    i1: '123',
    i2: '123',
    i3: '123',
    i4: '123',
    i5: '123',
    i6: '123',
    i7: '123',
    i8: '123',
    i9: '123',
    i10: '123',
    i11: '123',
    i12: '123',
    i13: '123',
    j: '1dsafssd',
    k: '1dsafssd',
  },
  {
    a: '孙可一',
    b: '237167199412616291',
    c: '6222600260001072444',
    d: '二次结构瓦工',
    e: '180',
    f: '20',
    g: '20',
    h: '20',
    i1: '123',
    i2: '123',
    i3: '123',
    i4: '123',
    i5: '123',
    i6: '123',
    i7: '123',
    i8: '123',
    i9: '123',
    i10: '123',
    i11: '123',
    i12: '123',
    i13: '123',
    j: '1dsafssd',
    k: '1dsafssd',
  },
];
