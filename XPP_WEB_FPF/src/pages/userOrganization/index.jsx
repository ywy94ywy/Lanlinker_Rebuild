import { PageHeaderWrapper } from 'lanlinker';
import { CustomCard } from 'lanlinker';
import { Input, Button, Table, Row, Col, Card } from 'antd';
import style from './style.less';
import applied from './imgs/applied.png';

const systems = [
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    icon: applied,
  },
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    icon: applied,
  },
];

export default () => {
  return (
    <PageHeaderWrapper>
      <div className={style.userOrganization}>
        <CustomCard icon="icon-shortcut" title="搜索组织名称">
          <Row>
            <span>公司全名:</span>
            <Input placeholder="请输入公司名称查询" style={{ margin: '0 15px', width: '200px' }} />
            <Button icon="search" type="primary">
              搜索
            </Button>
          </Row>
          <Row type="flex" className={style.cards}>
            {systems.map((v, i) => (
              <Col key={i} className={style.cardWrapper}>
                <Card className={style.cardContent}>
                  <Row type="flex">
                    <Col className={style.icon}>
                      <img src={v.icon} alt="icon" />
                    </Col>
                    <Col className={style.title}>
                      <p>{v.title}</p>
                      <p>单位系统执照编号：88888888</p>
                    </Col>
                  </Row>
                </Card>
                <div className={style.cardBottom}>
                  <Row>
                    <Col className={style.btn}>
                      <a to="/">申请加入</a>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </CustomCard>
        <CustomCard icon="icon-shortcut" title="已关联组织" gap>
          <Table columns={columns} dataSource={dataSource}></Table>
        </CustomCard>
      </div>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '事务编号',
    dataIndex: 'key',
  },
  {
    title: '事务类型',
    dataIndex: 'type',
  },
  {
    title: '事务时间',
    dataIndex: 'address',
  },
  {
    title: '事务状态',
    dataIndex: 'name',
  },
  {
    title: '事务附注',
    dataIndex: 'age',
  },
];

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    type: '1',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    type: '2',
  },
  {
    key: '3',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    type: '2',
  },
  {
    key: '4',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    type: '2',
  },
];
