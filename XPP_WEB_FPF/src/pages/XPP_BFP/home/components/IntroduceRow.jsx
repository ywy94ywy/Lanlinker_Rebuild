import { Col, Icon, Row, Tooltip } from 'antd';
import React from 'react';
import numeral from 'numeral';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from './Charts';
import Trend from './Trend';
import styles from '../style.less';

const commaDigital = number => numeral(number).format('0,0');

const IntroduceRow = ({ loading, visitData }) => (
  <Row gutter={24} type="flex">
    <Col span={6}>
      <ChartCard
        bordered={false}
        title="注册用户数据量"
        action={
          <Tooltip title="介绍">
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        loading={loading}
        total={commaDigital(126560)}
        footer={<Field label="日均注册用户量" value={commaDigital(12423)} />}
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          周同比
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag="down">
          日环比
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>
    <Col span={6}>
      <ChartCard
        bordered={false}
        loading={loading}
        title="访问量"
        action={
          <Tooltip title="介绍">
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total={commaDigital(8846)}
        footer={<Field label="日访问量" value={commaDigital(1234)} />}
        contentHeight={46}
      >
        <MiniArea color="#975FE4" data={visitData} />
      </ChartCard>
    </Col>
    <Col span={6}>
      <ChartCard
        bordered={false}
        loading={loading}
        title="日点击量"
        action={
          <Tooltip title="介绍">
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total={commaDigital(6560)}
        footer={<Field label="平均日点击量" value={commaDigital(1234)} />}
        contentHeight={46}
      >
        <MiniBar data={visitData} />
      </ChartCard>
    </Col>
    <Col span={6}>
      <ChartCard
        loading={loading}
        bordered={false}
        title="各系统购买率"
        action={
          <Tooltip title="介绍">
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total="78%"
        footer={
          <div
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <Trend
              flag="up"
              style={{
                marginRight: 16,
              }}
            >
              周同比
              <span className={styles.trendText}>12%</span>
            </Trend>
            <Trend flag="down">
              日环比
              <span className={styles.trendText}>11%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <MiniProgress percent={78} strokeWidth={12} target={80} />
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
