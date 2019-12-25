/**
 * @module 用户执照管理
 * @author DesYang
 * @todo UI-卡片、选择、优化
 */
import { useState } from 'react';
import { PageHeaderWrapper, SearchTree } from 'lanlinker';
import { Card, Collapse, Icon, Row, Col, List, Avatar } from 'antd';
import { Link } from 'umi';
import style from './style.less';
import applied from './imgs/applied.png';
import CustomModal from '@/components/CustomModal';

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
  const [show, setShow] = useState(false);

  return (
    <div className={style.cardContent}>
      <List.Item className={type === 'notApplied' && style.notApplied}>
        <List.Item.Meta
          avatar={<Avatar src={data.icon} size={48} />}
          title={
            <>
              <span>{data.title}</span>
              <a
                style={{ marginLeft: '10px' }}
                onClick={() => {
                  setShow(true);
                }}
              >
                选择组织
              </a>
              <CustomModal
                title="选择组织"
                visible={show}
                onCancel={() => {
                  setShow(false);
                }}
              >
                <SearchTree data={fakeTree} style={{ height: '400px' }}></SearchTree>
              </CustomModal>
            </>
          }
          description="单位系统执照编号：88888888"
        />
      </List.Item>
    </div>
  );
};

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
            name: '333',
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
