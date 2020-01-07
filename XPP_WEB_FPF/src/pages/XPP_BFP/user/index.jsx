/**
 * @module 用户综合管理
 * @author DesYang
 * @todo 模态框内容
 */
import React from 'react';
import { PageHeaderWrapper, CustomCard, SearchTree, CustomTable, CustomButton } from 'lanlinker';
import { Tabs, Button, Input, Checkbox, Modal } from 'antd';
import ManageLayout from '@/components/ManageLayout';
import DataManagement from '@/components/DataManagement';
import styles from './style.less';

const { TabPane } = Tabs;
const { Search } = Input;
const { confirm } = Modal;

export default () => {
  return (
    <PageHeaderWrapper className={styles.userManagement}>
      <ManageLayout>
        <ManageLayout.LeftCard title="用户组别列表">
          <Tabs tabBarGutter={6}>
            <TabPane tab="用户职能分类" key="1">
              <SearchTree data={fakeTree} className={styles.searchTree}></SearchTree>
            </TabPane>
            <TabPane tab="用户项目标签" key="2">
              <SearchTree data={fakeTree} className={styles.searchTree}></SearchTree>
            </TabPane>
            <TabPane tab="用户权限标签" key="3">
              <SearchTree data={fakeTree} className={styles.searchTree}></SearchTree>
            </TabPane>
          </Tabs>
        </ManageLayout.LeftCard>
        <ManageLayout.RightCard title="用户详细列表" extra="单位帐套编号：11">
          <CustomTable
            rowSelection={rowSelection}
            rowKey={(v, i) => i}
            columns={columns}
            dataSource={data}
            pagination={true}
            scroll={{ x: 2320, y: 380 }}
            actions={{
              left: (
                <>
                  <CustomButton.Modal
                    text="新增"
                    buttonProps={{
                      type: 'primary',
                    }}
                  ></CustomButton.Modal>
                  <Button
                    type="danger"
                    onClick={() => {
                      confirm({
                        title: '确定删除记录?',
                        onOk() {
                          console.log('OK');
                        },
                      });
                    }}
                  >
                    删除
                  </Button>
                  <CustomButton.Modal
                    text="修改"
                    buttonProps={{
                      type: 'primary',
                    }}
                  ></CustomButton.Modal>
                </>
              ),
              right: (
                <>
                  <Checkbox style={{ width: 100 }}>组别继承</Checkbox>
                  <Input style={{ width: 200 }} placeholder="请输入"></Input>
                  <Button type="primary">搜索</Button>
                  {/* <Search
                    placeholder="请输入"
                    enterButton="搜索"
                    onSearch={value => console.log(value)}
                    className={styles.search}
                  /> */}
                </>
              ),
            }}
          ></CustomTable>
        </ManageLayout.RightCard>
      </ManageLayout>
      <CustomCard title="数据管理" marginTop>
        <DataManagement
          onClicks={{
            importClassify() {
              console.log(1);
            },
            exportTags() {
              console.log(2);
            },
            importUsers() {
              console.log(3);
            },
            exportUsers() {
              console.log(4);
            },
            importLicense() {
              console.log(5);
            },
            licenseRecords() {
              console.log(6);
            },
          }}
        />
      </CustomCard>
    </PageHeaderWrapper>
  );
};

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const columns = [
  {
    title: '账号类型',
    dataIndex: 'a',
    width: 90,
  },
  {
    title: '数字账号',
    dataIndex: 'b',
  },
  {
    title: '昵称账号',
    dataIndex: 'c',
  },
  {
    title: '手机账号',
    dataIndex: 'd',
  },
  {
    title: '邮箱账号',
    dataIndex: 'e',
  },
  {
    title: '证件账号',
    dataIndex: 'f',
  },
  {
    title: '用户全名',
    dataIndex: 'g',
  },
  {
    title: '用户简名',
    dataIndex: 'h',
  },
  {
    title: '用户常用地址',
    dataIndex: 'i',
  },
  {
    title: '用户常用电话',
    dataIndex: 'j',
  },
  {
    title: '用户虚拟货币总额',
    dataIndex: 'k',
  },
  {
    title: '用户通用积分总额',
    dataIndex: 'l',
  },
];
const data = [
  {
    a: '个人',
    b: 2342,
    c: '南通二建集团有限公司',
    d: 15812345678,
    e: '12345678910@qq.com',
    f: 310109197708022019,
    g: '南通二建集团有限公司',
    h: '南通二建',
    i: '江苏省南通市启东市人民中路683号',
    j: '0351-0123456',
    k: 65756,
    l: 54645,
  },
  {
    a: '个人',
    b: 2342,
    c: '南通二建集团有限公司',
    d: 15812345678,
    e: '12345678910@qq.com',
    f: 310109197708022019,
    g: '南通二建集团有限公司',
    h: '南通二建',
    i: '江苏省南通市启东市人民中路683号',
    j: '0351-0123456',
    k: 65756,
    l: 54645,
  },
  {
    a: '个人',
    b: 2342,
    c: '南通二建集团有限公司',
    d: 15812345678,
    e: '12345678910@qq.com',
    f: 310109197708022019,
    g: '南通二建集团有限公司',
    h: '南通二建',
    i: '江苏省南通市启东市人民中路683号',
    j: '0351-0123456',
    k: 65756,
    l: 54645,
  },
  {
    a: '个人',
    b: 2342,
    c: '南通二建集团有限公司',
    d: 15812345678,
    e: '12345678910@qq.com',
    f: 310109197708022019,
    g: '南通二建集团有限公司',
    h: '南通二建',
    i: '江苏省南通市启东市人民中路683号',
    j: '0351-0123456',
    k: 65756,
    l: 54645,
  },
  {
    a: '个人',
    b: 2342,
    c: '南通二建集团有限公司',
    d: 15812345678,
    e: '12345678910@qq.com',
    f: 310109197708022019,
    g: '南通二建集团有限公司',
    h: '南通二建',
    i: '江苏省南通市启东市人民中路683号',
    j: '0351-0123456',
    k: 65756,
    l: 54645,
  },
  {
    a: '个人',
    b: 2342,
    c: '南通二建集团有限公司',
    d: 15812345678,
    e: '12345678910@qq.com',
    f: 310109197708022019,
    g: '南通二建集团有限公司',
    h: '南通二建',
    i: '江苏省南通市启东市人民中路683号',
    j: '0351-0123456',
    k: 65756,
    l: 54645,
  },
  {
    a: '个人',
    b: 2342,
    c: '南通二建集团有限公司',
    d: 15812345678,
    e: '12345678910@qq.com',
    f: 310109197708022019,
    g: '南通二建集团有限公司',
    h: '南通二建',
    i: '江苏省南通市启东市人民中路683号',
    j: '0351-0123456',
    k: 65756,
    l: 54645,
  },
  {
    a: '个人',
    b: 2342,
    c: '南通二建集团有限公司',
    d: 15812345678,
    e: '12345678910@qq.com',
    f: 310109197708022019,
    g: '南通二建集团有限公司',
    h: '南通二建',
    i: '江苏省南通市启东市人民中路683号',
    j: '0351-0123456',
    k: 65756,
    l: 54645,
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
