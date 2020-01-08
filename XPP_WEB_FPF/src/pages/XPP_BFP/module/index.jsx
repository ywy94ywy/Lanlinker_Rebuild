/**
 * @module 模块综合管理
 * @author DesYang
 * @todo 模态框内容
 */
import React from 'react';
import { Tabs, Button, Modal, Row, Col, Avatar } from 'antd';
import {
  PageHeaderWrapper,
  CustomCard,
  SearchTree,
  CustomTable,
  CustomButton,
  CustomForm,
} from 'lanlinker';
import ManageLayout from '@/components/ManageLayout';
import DataManagement from '@/components/DataManagement';
import moduleForm from './forms/module';
import accountForm from './forms/account';
import baseForm from './forms/base';
import styles from './style.less';

const { TabPane } = Tabs;
const { confirm } = Modal;

export default () => {
  return (
    <PageHeaderWrapper className={styles.moduleManagement}>
      <ManageLayout>
        <ManageLayout.LeftCard title="模块组别列表">
          <Tabs tabBarGutter={6}>
            <TabPane tab="模块菜单分类" key="1">
              <SearchTree data={fakeTree} className={styles.searchTree}></SearchTree>
            </TabPane>
            <TabPane tab="模块权限标签" key="2">
              <SearchTree data={fakeTree} className={styles.searchTree}></SearchTree>
            </TabPane>
          </Tabs>
        </ManageLayout.LeftCard>
        <ManageLayout.RightCard title="模块详细列表">
          <CustomTable
            rowSelection={rowSelection}
            rowKey={(v, i) => i}
            columns={columns}
            dataSource={data}
            pagination={true}
            scroll={{ x: 3800, y: 380 }}
            actions={{
              left: (
                <>
                  <CustomButton.Modal
                    text="新增"
                    buttonProps={{
                      type: 'primary',
                    }}
                    modalProps={{
                      title: '新增',
                      width: 920,
                      bodyStyle: {
                        height: 640,
                        overflowX: 'auto',
                      },
                      wrapClassName: styles.moduleManagementModal,
                    }}
                  >
                    <CustomForm
                      data={moduleForm()}
                      layout="inline"
                      columns={2}
                      labelCol={{ span: 10 }}
                    ></CustomForm>
                    <Tabs>
                      <Tabs.TabPane tab="账号信息" key="1">
                        <Row>
                          <Col span={12}>
                            <CustomForm
                              data={accountForm()}
                              layout="inline"
                              labelCol={{ span: 9 }}
                            ></CustomForm>
                          </Col>
                          <Col span={12}>
                            <User></User>
                          </Col>
                        </Row>
                      </Tabs.TabPane>
                      <Tabs.TabPane tab="基本信息" key="2">
                        <CustomForm
                          data={baseForm()}
                          layout="inline"
                          labelCol={{ span: 4 }}
                        ></CustomForm>
                      </Tabs.TabPane>
                    </Tabs>
                  </CustomButton.Modal>
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
            }}
          ></CustomTable>
        </ManageLayout.RightCard>
      </ManageLayout>

      <CustomCard title="数据管理" marginTop>
        <DataManagement />
      </CustomCard>
    </PageHeaderWrapper>
  );
};

const User = () => {
  return (
    <div className={styles.user}>
      <Avatar
        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
        size={180}
      ></Avatar>
      <CustomButton.Modal
        text="更换头像"
        buttonProps={{
          icon: 'upload',
          className: styles.upload,
        }}
        modalProps={{
          title: '上传头像',
        }}
      >
        暂无页面
      </CustomButton.Modal>
      <div className={styles.info}>
        <p>
          <span>图标中文名称：</span>
          <span>蓝瓴科技</span>
        </p>
        <p>
          <span>图标fontclass英文名称：</span>
          <span>icon-logo-enterprise-lanlinker</span>
        </p>
        <p>
          <span>图标unicode英文名称：</span>
          <span>e69b</span>
        </p>
      </div>
    </div>
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
    title: '平台系统执照中文名称',
    dataIndex: 'a',
  },
  {
    title: '模块中文类型',
    dataIndex: 'b',
  },
  {
    title: '模块编号',
    dataIndex: 'c',
  },
  {
    title: '模块中文名称',
    dataIndex: 'd',
  },
  {
    title: '模块英文名称',
    dataIndex: 'e',
  },
  {
    title: '图标fontclass英文名称',
    dataIndex: 'f',
  },
  {
    title: '图标unicode英文名称',
    dataIndex: 'g',
  },
  {
    title: '模块URI',
    dataIndex: 'h',
  },
  {
    title: '模块简介',
    dataIndex: 'i',
  },
  {
    title: '模块描述',
    dataIndex: 'j',
  },
  {
    title: '模块备注',
    dataIndex: 'k',
  },
  {
    title: '模块元素名',
    dataIndex: 'l',
  },
  {
    title: '模块元素值',
    dataIndex: 'm',
  },
  {
    title: '创建时间',
    dataIndex: 'n',
  },
  {
    title: '修改时间',
    dataIndex: 'o',
  },
  {
    title: '启用时间',
    dataIndex: 'p',
  },
  {
    title: '失效时间',
    dataIndex: 'q',
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
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
