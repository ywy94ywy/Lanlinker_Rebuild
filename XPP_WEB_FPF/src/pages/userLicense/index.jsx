/**
 * @module 用户执照管理
 */
import { PageHeaderWrapper } from 'lanlinker';
import { Card, Collapse, Icon, Row, Col, List, Menu, Avatar } from 'antd';
import { Link } from 'umi';
import { useState } from 'react';
import style from './style.less';
import applied from './imgs/applied.png';

const systems = [
  {
    name: '已申请系统',
    cards: [
      {
        title: '劳务实名制管理系统_江苏南通二建集团公司',
        icon: applied,
      },
      {
        title: '劳务实名制管理系统_江苏南通二建集团公司',
        icon: applied,
      },
    ],
  },
  {
    name: '未申请系统',
    cards: [
      {
        title: '劳务实名制管理系统_2013-84号地块一期（A3-02）工程',
        icon: applied,
      },
      {
        title: '劳务实名制管理系统_首创国际项目',
        icon: applied,
      },
      {
        title: '劳务实名制管理系统_2013-84号地块一期（A3-02）工程',
        icon: applied,
      },
      {
        title: '劳务实名制管理系统_首创国际项目',
        icon: applied,
      },
    ],
  },
];
const type = ['全部', '已申请系统', '未申请系统'];

export default () => {
  const [currentSystem, setCurrentSystem] = useState(systems);
  const [activeKey, setActiveKey] = useState(['0', '1']);

  const filtrateSystems = name => {
    if (name === '全部') {
      setCurrentSystem(systems);
      return;
    }

    setCurrentSystem(systems.filter(v => v.name === name));
  };

  return (
    <PageHeaderWrapper>
      <div className={style.userLicense}>
        <Card>
          <div className={style.type}>
            <span className={style.title}>所属类目：</span>
            <div className={style.items}>
              {type.map((v, i) => (
                <span key={i} onClick={() => filtrateSystems(v)}>
                  {v}
                </span>
              ))}
            </div>
          </div>
        </Card>
        <Collapse
          defaultActiveKey={activeKey}
          onChange={e => {
            setActiveKey(e);
          }}
        >
          {currentSystem.map((item, i) => {
            const index = String(i);
            return (
              <Collapse.Panel
                header={
                  <>
                    <span>{item.name}</span>
                    <Icon
                      type="down"
                      rotate={!activeKey.includes(index) && -180}
                      className={style.arrow}
                    ></Icon>
                  </>
                }
                key={index}
                showArrow={false}
              >
                <Row type="flex">
                  {item.cards.map((v, i) => (
                    <Col key={i} className={style.cardWrapper}>
                      <SysytemCard
                        data={v}
                        type={item.name === '已申请系统' ? 'applied' : 'notApplied'}
                      ></SysytemCard>
                      <div className={style.cardBottom}>
                        {item.name === '已申请系统' ? (
                          <Row>
                            <Col span={12} className={style.btn}>
                              取消执照
                            </Col>
                            <Col span={12} className={style.btn}>
                              <Link to="/">进入</Link>
                            </Col>
                          </Row>
                        ) : (
                          <Row>
                            <Col className={style.btn}>
                              <Link to="/">申请</Link>
                            </Col>
                          </Row>
                        )}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Collapse.Panel>
            );
          })}
        </Collapse>
      </div>
    </PageHeaderWrapper>
  );
};

const SysytemCard = ({ data, type = 'applied' }) => {
  return (
    <div className={style.cardContent}>
      <List.Item className={type === 'notApplied' && style.notApplied}>
        <List.Item.Meta
          avatar={<Avatar src={data.icon} size={48} />}
          title={data.title}
          description="单位系统执照编号：88888888"
        />
      </List.Item>
    </div>
  );
};
