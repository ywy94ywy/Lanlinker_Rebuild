/**
 * @module 登记管理
 * @author DesYang
 * @todo 模态框，表格，搜索树
 */
import React from 'react';
import { Button, Tabs, Select, Input, Table, Popconfirm } from 'antd';
import { PageHeaderWrapper, CustomCard, SearchTree, CustomTable } from 'lanlinker';
import styles from './style.less';

const { TabPane } = Tabs;

export default () => {
  return (
    <PageHeaderWrapper className={styles.register}>
      <CustomCard title="待进场员工信息">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Button icon="plus" type="primary" block>
              新增人员资料
            </Button>
            <Tabs tabBarGutter={17} className={styles.tabs}>
              <TabPane tab="行政职能分类" key="1">
                <SearchTree data={fakeTree} className={styles.searchTree}></SearchTree>
              </TabPane>
              <TabPane tab="合作组织标签" key="2">
                <SearchTree data={fakeTree} className={styles.searchTree}></SearchTree>
              </TabPane>
            </Tabs>
          </div>
          <div className={styles.right}>
            <CustomTable
              dataSource={data1}
              columns={columns1}
              rowKey={(v, i) => i}
              bordered
              scroll={{ y: 270 }}
              actions={{
                left: (
                  <>
                    <Button>刷身份证登记</Button>
                    <Button>批量导入</Button>
                  </>
                ),
                right: (
                  <>
                    <Select defaultValue="1">
                      <Select.Option value="1">全部岗位</Select.Option>
                    </Select>
                    <Select defaultValue="2">
                      <Select.Option value="2">全部年龄</Select.Option>
                    </Select>
                    <Select defaultValue="3">
                      <Select.Option value="3">全部性别</Select.Option>
                    </Select>
                    <Input placeholder="请输入姓名或身份证号"></Input>
                    <Button type="primary">查询</Button>
                  </>
                ),
              }}
            ></CustomTable>
          </div>
        </div>
      </CustomCard>
      <CustomCard title="已进场员工信息" gt>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <SearchTree data={fakeTree} className={styles.treeWrapper}></SearchTree>
          </div>
          <div className={styles.right}>
            <CustomTable
              dataSource={data2}
              columns={columns2}
              rowKey={(v, i) => i}
              bordered
              scroll={{ x: 900, y: 270 }}
              actions={{
                right: (
                  <>
                    <Select defaultValue="1">
                      <Select.Option value="1">全部岗位</Select.Option>
                    </Select>
                    <Select defaultValue="2">
                      <Select.Option value="2">全部年龄</Select.Option>
                    </Select>
                    <Select defaultValue="3">
                      <Select.Option value="3">全部性别</Select.Option>
                    </Select>
                    <Input placeholder="请输入姓名或身份证号"></Input>
                    <Button type="primary">查询</Button>
                    <Button type="primary">全选</Button>
                    <Button type="danger">批量退场</Button>
                  </>
                ),
              }}
            ></CustomTable>
          </div>
        </div>
      </CustomCard>
    </PageHeaderWrapper>
  );
};

const fakeTree = [
  {
    id: '1',
    name: '123',
    children: [
      {
        id: '2',
        name: '222',
        children: [
          {
            id: '3',
            name: '333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
          },
          {
            id: '4',
            name: '333',
          },
          {
            id: '5',
            name: '333',
          },
          {
            id: '67',
            name: '333',
          },
        ],
      },
      {
        id: '22',
        name: '222',
      },
      {
        id: '11',
        name: '1111',
      },
      {
        id: '111',
        name: '1111',
        children: [
          {
            id: '6',
            name: '6',
          },
          {
            id: '66',
            name: '66',
          },
          {
            id: '666',
            name: '666',
          },
        ],
      },
      {
        id: '1111',
        name: '1111',
        children: [
          {
            id: '7',
            name: '7',
          },
          {
            id: '77',
            name: '77',
          },
          {
            id: '777',
            name: '777',
          },
        ],
      },
      {
        id: '11112',
        name: '1111',
      },
    ],
  },
];
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
const data2 = [
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
  },
  {
    a: 'asfas',
    b: '0',
    c: '30',
    d: '7334575674',
    e: '钢筋工',
    f: '2019-01-01 12:11:24',
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
  {
    title: '操作',
    width: 120,
    render: () => <a>修改</a>,
  },
];

const columns2 = [
  {
    title: '姓名',
    dataIndex: 'a',
    width: 120,
    fixed: true,
  },
  {
    title: '性别',
    dataIndex: 'b',
    width: 90,
    fixed: true,
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
    fixed: true,
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
  {
    title: '进场时间',
    dataIndex: 'f',
  },
  {
    title: '操作',
    width: 120,
    fixed: 'right',
    render: () => (
      <Popconfirm title="你确定该人员退场吗？">
        <span style={{ color: 'red', cursor: 'pointer' }}>删除</span>
      </Popconfirm>
    ),
  },
];
