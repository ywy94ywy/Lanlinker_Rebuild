/**
 * @module 培训管理
 * @author DesYang
 */
import React, { useEffect } from 'react';
import {
  PageHeaderWrapper,
  CustomCardTabs,
  CustomTable,
  CustomButton,
  usePagination,
} from 'lanlinker';
import { Button, Input, DatePicker, Form, Select } from 'antd';
import { connect } from 'dva';

const { TabPane } = CustomCardTabs;

export default connect(({ train, loading: { effects } }) => ({
  ...train,
  loadingTable1: effects['train/fetchTable1'],
}))(({ table1: { data: tableData1 = [], total: total1 = 0 }, loadingTable1, dispatch }) => {
  const [pageSize1, current1, onChange1] = usePagination();

  useEffect(() => {
    dispatch({
      type: 'train/fetchTable1',
      payload: { pageSize: pageSize1, current: current1 },
    });
  }, [current1]);

  return (
    <PageHeaderWrapper>
      <CustomCardTabs>
        <TabPane tab="培训汇总记录" key="1">
          <CustomTable
            columns={columns}
            dataSource={tableData1}
            loading={loadingTable1}
            rowKey={(v, i) => i}
            actions={{
              left: (
                <>
                  <CustomButton.Modal
                    buttonProps={{
                      text: '新增',
                      type: 'primary',
                    }}
                  >
                    hello
                  </CustomButton.Modal>
                  <CustomButton.Modal
                    buttonProps={{
                      text: '删除',
                      type: 'danger',
                    }}
                  >
                    hello
                  </CustomButton.Modal>
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
            pagination={{
              pageSize: pageSize1,
              current: current1,
              total: total1,
              onChange: onChange1,
            }}
          ></CustomTable>
        </TabPane>
        <TabPane tab="培训明细记录" key="2"></TabPane>
      </CustomCardTabs>
    </PageHeaderWrapper>
  );
});

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
