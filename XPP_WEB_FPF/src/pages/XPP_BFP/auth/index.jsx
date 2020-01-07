/**
 * @module 权限分配管理
 * @author DesYang
 */
import React from 'react';
import { PageHeaderWrapper, CustomTable, SearchTree } from 'lanlinker';
import ManageLayout from '@/components/ManageLayout';
import styles from './style.less';

export default () => {
  return (
    <PageHeaderWrapper className={styles.authManagement}>
      <ManageLayout>
        <ManageLayout.LeftCard title="用户权限标签" bodyStyle={{ padding: 15 }}>
          <SearchTree data={fakeTree} className={styles.searchTree}></SearchTree>
        </ManageLayout.LeftCard>
        <ManageLayout.RightCard title="模块权限标签">
          <CustomTable columns={columns} rowKey={(v, i) => i} dataSource={data}></CustomTable>
        </ManageLayout.RightCard>
      </ManageLayout>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '模块权限标签编号',
    dataIndex: 'a',
  },
  {
    title: '模块权限标签名称',
    dataIndex: 'b',
  },
  {
    title: '用户权限特征',
    dataIndex: 'c',
  },
  {
    title: '用户权限操作',
    render: () => {
      return (
        <>
          <a>修改</a>&nbsp;
          <a>删除</a>
        </>
      );
    },
  },
];

const data = [
  {
    a: 1,
    b: 2,
    c: 3,
  },
  {
    a: 1,
    b: 2,
    c: 3,
  },
  {
    a: 1,
    b: 2,
    c: 3,
  },
  {
    a: 1,
    b: 2,
    c: 3,
  },
];

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
