/**
 * @module 系统执照管理
 * @author DesYang
 */

import { CustomCard, CustomTable, PageHeaderWrapper, CustomButton } from 'lanlinker';
import { Input, Button } from 'antd';
import DataManagement from '@/components/DataManagement';

export default () => {
  return (
    <PageHeaderWrapper>
      <CustomCard title="执照详细列表" style={{ height: '660px' }}>
        <CustomTable
          columns={columns}
          dataSource={data}
          rowKey={(v, i) => i}
          scroll={{ y: 380 }}
          pagination={true}
          actions={{
            left: (
              <CustomButton.Modal
                text="新增"
                buttonProps={{
                  type: 'primary',
                }}
                modalProps={{ title: '新增执照' }}
              ></CustomButton.Modal>
            ),
            right: (
              <>
                <Input placeholder="请输入要查询的关键字"></Input>
                <Button type="primary">查询</Button>
              </>
            ),
          }}
        ></CustomTable>
      </CustomCard>
      <CustomCard title="数据管理" marginTop>
        <DataManagement />
      </CustomCard>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '系统名称',
    dataIndex: 'a',
  },
  {
    title: '激活码编号',
    dataIndex: 'b',
  },
  {
    title: '授权类型',
    dataIndex: 'c',
  },
  {
    title: '剩余时间',
    dataIndex: 'd',
  },
  {
    title: '激活日期',
    dataIndex: 'e',
  },
  {
    title: '到期日期',
    dataIndex: 'f',
  },
];

const data = [
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
];
