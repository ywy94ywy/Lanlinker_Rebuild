/**
 * @module 首页
 * @author DesYang
 * @todo 快捷桌面-模态框
 */
import { Avatar, Radio, Col, Skeleton, Row, Statistic, Tabs, Table, Button } from 'antd';
import React, { useEffect, useState, useMemo } from 'react';
import Link from 'umi/link';
import { PageHeaderWrapper, CustomCard, IconFont } from 'lanlinker';
import { connect } from 'dva';
import styles from './style.less';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
const { TabPane } = Tabs;
const peopleColor = ['#F15D9F', '#27C63E', '#FEB614', '#1890FF'];
const workersColor = [
  '#1890FF',
  '#f47b8f',
  '#66d186',
  '#55d3d3',
  '#97d3ec',
  '#a575e6',
  '#da8dd6',
  '#ecb183',
];
const peopleSituation = [
  {
    title: '在册人员',
    number: 6678,
  },
  {
    title: '在职人员',
    number: 5859,
  },
  {
    title: '入场人数',
    number: 423,
  },
  {
    title: '在场人员',
    number: 188,
  },
];

const PageHeaderContent = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;

  if (!loading) {
    return (
      <Skeleton
        avatar
        paragraph={{
          rows: 1,
        }}
        active
      />
    );
  }

  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          早安，
          {currentUser.name}
          ，祝你开心每一天！
        </div>
        <div>
          {currentUser.title} |{currentUser.group}
        </div>
      </div>
    </div>
  );
};

const ExtraContent = () => (
  <div className={styles.extraContent}>
    <div className={styles.statItem}>
      <Statistic title="项目数" value={56} />
    </div>
    <div className={styles.statItem}>
      <Statistic title="团队内排名" value={8} suffix="/ 24" />
    </div>
    <div className={styles.statItem}>
      <Statistic title="项目访问" value={2223} />
    </div>
  </div>
);

export default connect(({ lrmAndhome: { currentUser } }) => ({
  currentUser,
}))(({ currentUser, dispatch }) => {
  const [workerType, setWorkerType] = useState('managers');

  useEffect(() => {
    dispatch({
      type: 'lrmAndhome/init',
    });
    dispatch({
      type: 'lrmAndhome/clear',
    });
  }, []);

  return (
    <PageHeaderWrapper
      title={false}
      content={<PageHeaderContent currentUser={currentUser} />}
      extraContent={<ExtraContent />}
      className={styles.homepage}
    >
      <Row gutter={24}>
        <Col span={16}>
          <CustomCard title="项目概况" extra={<Link to="/">查看更多</Link>} bordered={false}>
            <div className={styles.general}>
              <p className={styles.title}>项目人员概况</p>
              <div className={styles.content}>
                {peopleSituation.map((item, index) => {
                  return (
                    <div key={index} className={styles.item}>
                      <div className={styles.numberWrapper} style={{ color: peopleColor[index] }}>
                        <span className={styles.number}>{item.number}</span>
                        <span>人</span>
                      </div>
                      <div className={styles.type}>{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CustomCard>
          <CustomCard bordered={false} bodyStyle={{ padding: 0 }} gap>
            <Tabs className={styles.projectTable} size='large'>
              <TabPane tab="项目人数" key="1">
                <Table columns={columns} dataSource={dataSource}></Table>
              </TabPane>
              <TabPane tab="培训情况" key="2">
                <Table columns={columns} dataSource={dataSource}></Table>
              </TabPane>
              <TabPane tab="工资发放" key="3">
                <Table columns={columns} dataSource={dataSource}></Table>
              </TabPane>
              <TabPane tab="最近7天出勤统计" key="4">
                <Chart height={400}  padding={[ 20, 20, 30, 40]} data={data} scale={cols} forceFit>
                  <Axis name="year" />
                  <Axis name="sales" />
                  <Tooltip
                    crosshairs={{
                      type: 'y',
                    }}
                  />
                  <Geom type="interval" position="year*sales" />
                </Chart>
              </TabPane>
            </Tabs>
          </CustomCard>
        </Col>
        <Col span={8}>
          <CustomCard
            title="快捷桌面"
            extra={<Button type="primary">添加</Button>}
            bordered={false}
          >
            <div className={styles.shortcuts}>
              {shortcuts.map((v, i) => {
                return (
                  <div className={styles.shortcut} key={i}>
                    <IconFont type={v.icon} />
                    <div>{v.title}</div>
                  </div>
                );
              })}
            </div>
          </CustomCard>
          <CustomCard
            title="现场工人岗位分布"
            extra={<Link to="/">查看更多</Link>}
            bordered={false}
            gap
          >
            <div className={styles.switchWorkers}>
              <Radio.Group
                value={workerType}
                onChange={e => {
                  setWorkerType(e.target.value);
                }}
              >
                <Radio.Button value="managers">管理人员</Radio.Button>
                <Radio.Button value="labors">劳务工人</Radio.Button>
              </Radio.Group>
              <div className={styles.workers}>
                {workerType === 'managers' && (
                  <WorkersStatistics workers={managers} data={managersData}></WorkersStatistics>
                )}
                {workerType === 'labors' && (
                  <WorkersStatistics workers={labors} data={laborsData}></WorkersStatistics>
                )}
              </div>
            </div>
          </CustomCard>
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
});

const data = [
  {
    year: '1951 年',
    sales: 38,
  },
  {
    year: '1952 年',
    sales: 52,
  },
  {
    year: '1956 年',
    sales: 61,
  },
  {
    year: '1957 年',
    sales: 145,
  },
  {
    year: '1958 年',
    sales: 48,
  },
  {
    year: '1959 年',
    sales: 38,
  },
  {
    year: '1960 年',
    sales: 38,
  },
  {
    year: '1962 年',
    sales: 38,
  },
];
const cols = {
  sales: {
    tickInterval: 20,
  },
};
// 工人统计
const WorkersStatistics = ({ workers, data }) => {
  const keys = Object.keys(workers);
  return keys.map((key, index) => {
    return (
      <WorkerBar
        key={key}
        name={workers[key]}
        current={data.current[key]}
        total={data.total[key]}
        index={index}
      />
    );
  });
};

// 工人统计条
const WorkerBar = ({ name, current, total, index }) => {
  const [value, setValue] = useState(0);
  const percent = useMemo(() => Math.floor((current * 100) / total), [current, total]);

  useEffect(() => {
    const increase = setTimeout(() => {
      if (value < percent) {
        setValue(v => (v + 3 <= 100 ? v + 3 : 100));
      }
    }, 10);
    return () => {
      clearTimeout(increase);
    };
  }, [value]);

  return (
    <div className={styles.workerBar}>
      <span className={styles.name}>{name}</span>
      <span className={styles.current}>
        <span style={{ width: `${value}%`, background: workersColor[index % workersColor.length] }}>
          {current}
        </span>
      </span>
      <span className={styles.total}>{total}</span>
    </div>
  );
};

const managers = {
  a: '施工员',
  b: '质检员',
  c: '安全员',
  d: '标准员',
  e: '材料员',
  f: '机械员',
  g: '劳务员',
  h: '项目总工',
};

const managersData = {
  total: {
    a: 200,
    b: 180,
    c: 164,
    d: 300,
    e: 270,
    f: 150,
    g: 380,
    h: 190,
  },
  current: {
    a: 180,
    b: 144,
    c: 123,
    d: 150,
    e: 120,
    f: 60,
    g: 110,
    h: 70,
  },
};

const labors = {
  a: '木工',
  b: '钢筋工',
  c: '电工',
  d: '抹灰工',
  e: '电焊工',
  f: '水泥工',
  g: '塔吊工',
  h: '机修工',
};
const laborsData = {
  total: {
    a: 300,
    b: 280,
    c: 564,
    d: 300,
    e: 270,
    f: 150,
    g: 380,
    h: 190,
  },
  current: {
    a: 280,
    b: 244,
    c: 323,
    d: 150,
    e: 120,
    f: 60,
    g: 110,
    h: 70,
  },
};

const shortcuts = [
  {
    title: '人员管理',
    icon: 'icon-shortcut',
  },
  {
    title: '人员管理',
    icon: 'icon-shortcut',
  },
  {
    title: '人员管理',
    icon: 'icon-shortcut',
  },
  {
    title: '人员管理',
    icon: 'icon-shortcut',
  },
  {
    title: '人员管理',
    icon: 'icon-shortcut',
  },
  {
    title: '人员管理',
    icon: 'icon-shortcut',
  },
  {
    title: '人员管理',
    icon: 'icon-shortcut',
  },
];

const columns = [
  {
    title: '序号',
    key: 'id',
    render: (text, record, index) => index,
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
  },
];

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
