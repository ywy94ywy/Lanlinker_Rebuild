import { Card, Col, Row, Table } from 'antd';
import React from 'react';
import numeral from 'numeral';
import { MiniArea } from './Charts';
import NumberInfo from './NumberInfo';
import Trend from './Trend';
import styles from '../style.less';

const columns = [
  {
    title: '排名',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '系统名称',
    dataIndex: 'keyword',
    key: 'keyword',
    render: text => <a href="/">{text}</a>,
  },
  {
    title: '用户数',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
    className: styles.alignRight,
  },
  {
    title: '周涨幅',
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => (
      <Trend flag={record.status === 1 ? 'down' : 'up'}>
        <span
          style={{
            marginRight: 4,
          }}
        >
          {text}%
        </span>
      </Trend>
    ),
  },
];

const TopSearch = ({ loading, visitData2, searchData, dropdownGroup }) => (
  <Card loading={loading} bordered={false} title="用户日活量">
    <Row gutter={68} type="flex">
      <Col
        sm={12}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <NumberInfo
          subTitle={<span>当日活跃用户量</span>}
          gap={8}
          total={numeral(12321).format('0,0')}
          status="up"
          subTotal="17.1%"
        />
        <MiniArea line height={45} data={visitData2} />
      </Col>
      <Col
        sm={12}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <NumberInfo
          subTitle={<span>当日登录用户量</span>}
          total={2.7}
          status="down"
          subTotal="26.2%"
          gap={8}
        />
        <MiniArea line height={45} data={visitData2} />
      </Col>
    </Row>
    <Table
      rowKey={record => record.index}
      columns={columns}
      dataSource={searchData}
      bordered
      pagination={{
        style: {
          marginBottom: 0,
        },
        pageSize: 5,
      }}
    />
  </Card>
);

export default TopSearch;
