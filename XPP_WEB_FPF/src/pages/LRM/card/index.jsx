import React, { useState, useEffect, useRef } from 'react';
import { PageHeaderWrapper, CustomCardTabs, CustomTable, usePagination } from 'lanlinker';
import { Button, Input, Layout } from 'antd';
import { connect } from 'dva';
import LList from '@/components/LList';
import styles from './style.less';

const { TabPane } = CustomCardTabs;
const { Sider, Content } = Layout;

export default connect(({ card, loading: { effects } }) => ({
  ...card,
  loadingTable1: effects['card/fetchTable1'],
}))(({ table1, loadingTable1, dispatch }) => {
  const [pageSize1, current1, onChange1] = usePagination();
  const [search, setSearch] = useState('');
  const ref = useRef();

  useEffect(() => {
    dispatch({
      type: 'card/fetchTable1',
      payload: {
        pageSize: pageSize1,
        current: current1,
        state: [0, 1],
        identity: search,
      },
    });
  }, [search]);

  return (
    <PageHeaderWrapper className={styles.card}>
      <CustomCardTabs>
        <TabPane tab="员工卡片授权" key="1">
          <Layout>
            <Content>
              <CustomTable
                columns={columns}
                dataSource={table1.data}
                loading={loadingTable1}
                rowKey={(v, i) => i}
                actions={{
                  right: (
                    <>
                      <Input placeholder="请输入姓名或身份证号" ref={ref}></Input>
                      <Button
                        type="primary"
                        onClick={() => {
                          setSearch(ref.current.state.value);
                        }}
                      >
                        查询
                      </Button>
                    </>
                  ),
                }}
                pagination={{
                  pageSize: pageSize1,
                  current: current1,
                  total: table1.total,
                  onChange: onChange1,
                }}
                onChange={({ pageSize, current }, filters) => {
                  dispatch({
                    type: 'card/fetchTable1',
                    payload: {
                      pageSize,
                      current,
                      ...filters,
                      identity: search,
                    },
                  });
                }}
              ></CustomTable>
            </Content>
            <Sider theme="light" width={340} className={styles.right}>
              <LList.Labour {...fd} />
              <h4>授权方式</h4>
            </Sider>
          </Layout>
        </TabPane>
        <TabPane tab="临时卡片授权" key="2"></TabPane>
        <TabPane tab="卡片门区授权" key="3"></TabPane>
        <TabPane tab="卡片授权查询" key="4"></TabPane>
        <TabPane tab="卡片记录查询" key="5"></TabPane>
      </CustomCardTabs>
    </PageHeaderWrapper>
  );
});

const columns = [
  {
    title: '姓名',
    dataIndex: 'a',
  },
  {
    title: '性别',
    dataIndex: 'b',
  },
  {
    title: '身份证号',
    dataIndex: 'identity',
  },
  {
    title: '岗位',
    dataIndex: 'd',
  },
  {
    title: '授权状态',
    dataIndex: 'state',
    render: v => (v === 0 ? '未授权' : '已授权'),
    defaultFilteredValue: [0, 1],
    filters: [
      { text: '已授权', value: 1 },
      { text: '未授权', value: 0 },
    ],
  },
];

const fd = {
  name: '赵建平',
  post: '混凝土工',
  company: '南通奇润建筑工程有限公司',
  team: '胡志鹏队',
  group: '胡志混凝土组',
  profile: 'http://b-ssl.duitang.com/uploads/item/201607/26/20160726185736_yPmrE.thumb.224_0.jpeg',
};
