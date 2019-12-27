/**
 * @module 用户综合管理
 * @author DesYang
 * @todo 模态框内容、样式抽离
 */
import React, { useState } from 'react';
import { Card, Row, Col, Tabs, Icon, Table, Button, Input, Checkbox, Modal } from 'antd';
import { PageHeaderWrapper, CustomCard, SearchTree ,CustomModal} from 'lanlinker';
import styles from './style.less';

const { TabPane } = Tabs;
const { Search } = Input;
const { confirm } = Modal;

export default () => {
  const [addModal, setAddModal] = useState(false);
  const [modifyModal, setModifyModal] = useState(false);

  return (
    <PageHeaderWrapper className={styles.user}>
      <Row gutter={24} type="flex" className={styles.top}>
        <Col className={styles.left}>
          <Card
            title="用户组别管理"
            bodyStyle={{ padding: 0 }}
            className={styles.card}
            bordered={null}
          >
            <Tabs tabBarGutter={6} className={styles.tabs}>
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
          </Card>
        </Col>
        <Col className={styles.right}>
          <Card title="用户详细列表" extra="单位帐套编号：11" className={styles.card}>
            <Row type="flex" justify="space-between">
              <div className={styles.buttons}>
                <Button
                  type="primary"
                  onClick={() => {
                    setAddModal(true);
                  }}
                >
                  新增
                </Button>
                <CustomModal
                  title="新增"
                  visible={addModal}
                  onCancel={() => {
                    setAddModal(false);
                  }}
                >
                  123
                </CustomModal>
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
                <Button
                  type="primary"
                  onClick={() => {
                    setModifyModal(true);
                  }}
                >
                  修改
                </Button>
                <CustomModal
                  title="修改"
                  visible={modifyModal}
                  onCancel={() => {
                    setModifyModal(false);
                  }}
                >
                  123
                </CustomModal>
              </div>
              <div className={styles.extra}>
                <Checkbox>组别继承</Checkbox>
                <Search
                  placeholder="请输入"
                  enterButton="搜索"
                  onSearch={value => console.log(value)}
                  className={styles.search}
                />
              </div>
            </Row>
            <Table
              className={styles.table}
              rowSelection={rowSelection}
              rowKey={(v, i) => i}
              columns={columns}
              dataSource={data}
              scroll={{ x: 2320, y: 400 }}
              bordered
            ></Table>
          </Card>
        </Col>
      </Row>
      <CustomCard title="数据管理" gap>
        <Row type="flex" justify="space-around">
          <div className={styles.optionCard}>
            <Icon type="file-done"></Icon>
            <div className={styles.text}>导入分类数据</div>
          </div>
          <div className={styles.optionCard}>
            <Icon type="file-done"></Icon>
            <div className={styles.text}>导入分类数据</div>
          </div>
          <div className={styles.optionCard}>
            <Icon type="file-done"></Icon>
            <div className={styles.text}>导入分类数据</div>
          </div>
          <div className={styles.optionCard}>
            <Icon type="file-done"></Icon>
            <div className={styles.text}>导入分类数据</div>
          </div>
          <div className={styles.optionCard}>
            <Icon type="file-done"></Icon>
            <div className={styles.text}>导入分类数据</div>
          </div>
          <div className={styles.optionCard}>
            <Icon type="file-done"></Icon>
            <div className={styles.text}>导入分类数据</div>
          </div>
        </Row>
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
