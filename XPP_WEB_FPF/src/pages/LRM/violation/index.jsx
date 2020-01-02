import React, { useEffect } from 'react';
import { PageHeaderWrapper, CustomCardTabs, CustomTable, usePagination } from 'lanlinker';
import { Button, Input, Select, Form } from 'antd';
import { connect } from 'dva';

const { TabPane } = CustomCardTabs;
export default connect(({ violation, loading: { effects } }) => ({
  ...violation,
  loadingTable1: effects['violation/fetchTable1'],
}))(({ table1: { data: tableData1 = [], total: total1 = 0 }, loadingTable1, dispatch }) => {
  const [pageSize1, current1, onChange1] = usePagination();

  useEffect(() => {
    dispatch({
      type: 'violation/fetchTable1',
      payload: { pageSize: pageSize1, current: current1 },
    });
  }, [pageSize1, current1]);

  return (
    <PageHeaderWrapper>
      <CustomCardTabs>
        <TabPane tab="违规员工信息" key="1">
          <CustomTable
            columns={columns}
            dataSource={tableData1}
            rowKey={(v, i) => i}
            loading={loadingTable1}
            actions={{
              right: (
                <>
                  <div style={{ width: 'fit-content' }}>
                    <Form layout="inline">
                      <Form.Item label="违规类型">
                        <Select style={{ width: '150px' }}></Select>
                      </Form.Item>
                      <Form.Item>
                        <Input></Input>
                      </Form.Item>
                    </Form>
                  </div>
                  <Button type="primary">查询</Button>
                  <Button>打印</Button>
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
        <TabPane tab="违规流水信息" key="2"></TabPane>
      </CustomCardTabs>
    </PageHeaderWrapper>
  );
});

const columns = [
  {
    title: '序号',
    key: 'number',
    render: (v, r, i) => i,
  },
  {
    title: '姓名',
    dataIndex: 'a',
  },
  {
    title: '身份证号',
    dataIndex: 'b',
  },
  {
    title: '劳务队伍',
    dataIndex: 'c',
  },
  {
    title: '劳务班组',
    dataIndex: 'd',
  },
  {
    title: '违规次数',
    dataIndex: 'e',
  },
  {
    title: '操作',
    render: () => (
      <>
        <a href="/">查看详情</a>
      </>
    ),
  },
];
