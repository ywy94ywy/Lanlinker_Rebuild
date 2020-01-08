/**
 * @module 用户认证管理
 * @author DesYang
 * @todo 重构
 * @todo 企业版本
 * @todo 营业执照可编辑？
 * @todo 业务逻辑
 */
import { Fragment, useState, useReducer, useCallback } from 'react';
import { PageHeaderWrapper, CustomCard } from 'lanlinker';
import { Row, Col, Table, Button, Select, Input } from 'antd';
import License from '@/components/License';
import style from './style.less';
import person from './imgs/person.png';

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

const formReducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return { ...state, ...action.payload };
  }
};

const formInit = {
  name: '张三',
  sex: '男',
  nation: '汉',
  year: 1999,
  month: 9,
  day: 9,
  address: '上海市人民中路888号',
  idNumber: 112319199909090111,
  visa: '上海市公安局',
  expiry: '2001.01.01 - 2021.12.31',
};

const formInit2 = {
  name: '张三',
  sex: '男',
  nation: '汉',
  year: 1999,
  month: 9,
  day: 9,
  address: '上海市人民中路888号',
  idNumber: 112319199909090111,
  visa: '上海市公安局',
  expiry: '2001.01.01 - 2021.12.31',
};

export default () => {
  const [idType, setIdType] = useState('1');
  const [edit1, setEdit1] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [form, formDispatch] = useReducer(formReducer, formInit);
  const [form2, formDispatch2] = useReducer(formReducer, formInit2);

  const handleInput = label => {
    if (idType === '1') {
      const onChange = e => {
        formDispatch({
          type: 'change',
          payload: {
            [label]: e.target.value,
          },
        });
      };
      return { value: form[label], onChange };
    }
    if (idType === '2') {
      const onChange = e => {
        formDispatch2({
          type: 'change',
          payload: {
            [label]: e.target.value,
          },
        });
      };
      return { value: form2[label], onChange };
    }
  };

  const InputLayout = useCallback(
    ({ title, width, change, component, maxLength, edit }) => {
      const comp = props => {
        switch (component) {
          case 'textarea':
            return <Input.TextArea {...props}></Input.TextArea>;
          default:
            return <Input {...props}></Input>;
        }
      };
      const Component = useCallback(comp, []);

      if (typeof title === 'string') {
        return (
          <p>
            <strong>{title}</strong>
            {edit ? (
              <Component
                style={{ width: `${width}px` }}
                maxLength={maxLength}
                {...change}
              ></Component>
            ) : (
              <span
                style={{ width: `${width}px` }}
                className={component === 'textarea' ? style.textarea : null}
              >
                {change.value}
              </span>
            )}
          </p>
        );
      }

      if (title instanceof Array) {
        return (
          <p>
            {title.map((v, i) => (
              <Fragment key={i}>
                <strong>{v}</strong>
                {width[i] ? (
                  edit ? (
                    <Component
                      style={{ width: `${width[i]}px` }}
                      {...change[i]}
                      maxLength={maxLength && maxLength[i]}
                    ></Component>
                  ) : (
                    <span style={{ width: `${width[i]}px` }}>{change[i].value}</span>
                  )
                ) : null}
              </Fragment>
            ))}
          </p>
        );
      }

      return null;
    },
    [status],
  );

  return (
    <PageHeaderWrapper className={style.userAuth}>
      <CustomCard title="个人实名信息管理" className={style.infoCard}>
        <div className={style.title}>
          <Row type="flex" justify="space-between">
            <Col>
              <span style={{ marginRight: '10px' }}>证件类型</span>
              <Select
                value={idType}
                onChange={e => {
                  setIdType(e);
                }}
              >
                <Select.Option value="1">居民身份证</Select.Option>
                <Select.Option value="2">临时身份证</Select.Option>
              </Select>
            </Col>
            <Col>
              {idType === '1' && (
                <>
                  <Button
                    type="primary"
                    style={{ marginRight: '10px' }}
                    onClick={() => {
                      setEdit1(!edit1);
                    }}
                  >
                    {edit1 ? '保存' : '编辑'}
                  </Button>
                  <Button type="primary">实名认证提交</Button>
                </>
              )}
              {idType === '2' && (
                <>
                  <Button
                    type="primary"
                    style={{ marginRight: '10px' }}
                    onClick={() => {
                      setEdit2(!edit2);
                    }}
                  >
                    {edit2 ? '保存' : '编辑'}
                  </Button>
                  <Button type="primary">实名认证提交</Button>
                </>
              )}
            </Col>
          </Row>
        </div>
        {idType === '1' && (
          <>
            <Row type="flex" justify="space-around" className={style.idCard}>
              <div className={style.front}>
                <InputLayout
                  title="姓名"
                  width={165}
                  maxLength={10}
                  change={handleInput('name')}
                  edit={edit1}
                ></InputLayout>
                <InputLayout
                  title={['性别', '民族']}
                  width={[70, 100]}
                  maxLength={[2, 5]}
                  change={[handleInput('sex'), handleInput('nation')]}
                  edit={edit1}
                ></InputLayout>
                <InputLayout
                  title={['出生', '年', '月', '日']}
                  width={[70, 50, 50, 0]}
                  maxLength={[4, 2, 2]}
                  change={[handleInput('year'), handleInput('month'), handleInput('day')]}
                  edit={edit1}
                ></InputLayout>
                <InputLayout
                  title="住址"
                  width={295}
                  change={handleInput('address')}
                  maxLength={35}
                  component="textarea"
                  edit={edit1}
                ></InputLayout>
                <InputLayout
                  title="公民身份证号码"
                  width={295}
                  maxLength={20}
                  change={handleInput('idNumber')}
                  edit={edit1}
                ></InputLayout>
                <img src={person} alt="" />
              </div>
              <div className={style.back}>
                <InputLayout
                  title="签发机关"
                  width={295}
                  maxLength={20}
                  change={handleInput('visa')}
                  edit={edit1}
                ></InputLayout>
                <InputLayout
                  title="有效日期"
                  width={295}
                  maxLength={30}
                  change={handleInput('expiry')}
                  edit={edit1}
                ></InputLayout>
              </div>
            </Row>
          </>
        )}
        {idType === '2' && (
          <>
            <Row type="flex" justify="space-around" className={style.idCard2}>
              <div className={style.front}>
                <InputLayout
                  title="姓名"
                  width={165}
                  maxLength={10}
                  change={handleInput('name')}
                  edit={edit2}
                ></InputLayout>
                <InputLayout
                  title={['性别', '民族']}
                  width={[70, 100]}
                  maxLength={[2, 5]}
                  change={[handleInput('sex'), handleInput('nation')]}
                  edit={edit2}
                ></InputLayout>
                <InputLayout
                  title={['出生', '年', '月', '日']}
                  width={[70, 50, 50, 0]}
                  maxLength={[4, 2, 2]}
                  change={[handleInput('year'), handleInput('month'), handleInput('day')]}
                  edit={edit2}
                ></InputLayout>
                <InputLayout
                  title="住址"
                  width={295}
                  change={handleInput('address')}
                  maxLength={35}
                  edit={edit2}
                ></InputLayout>
                <InputLayout
                  title="有效期限"
                  width={295}
                  maxLength={20}
                  change={handleInput('expiry')}
                  edit={edit2}
                ></InputLayout>
                <InputLayout
                  title="签发机关"
                  width={295}
                  maxLength={20}
                  change={handleInput('visa')}
                  edit={edit2}
                ></InputLayout>
                <InputLayout
                  title="公民身份证号码"
                  width={295}
                  maxLength={20}
                  change={handleInput('idNumber')}
                  edit={edit2}
                ></InputLayout>
                <img src={person} alt="" />
              </div>
              <div className={style.back}></div>
            </Row>
          </>
        )}
      </CustomCard>
      <CustomCard title="用户实名认证情况列表" marginTop>
        <Table columns={columns} dataSource={dataSource}></Table>
      </CustomCard>
      <CustomCard title="企业信息管理">
        <License style={{ width: 711 }} data={data}></License>
        <Row type="flex" justify="end" style={{ marginTop: 20 }}>
          <Button type="primary">保存</Button>
          <Button type="primary" style={{ marginLeft: 10 }}>
            实名认证提交
          </Button>
        </Row>
      </CustomCard>
      <CustomCard title="用户实名认证情况列表" marginTop>
        <Table columns={columns} dataSource={dataSource}></Table>
      </CustomCard>
    </PageHeaderWrapper>
  );
};

const data = {
  a: '913206811388888888',
  b: '320681000000000',
  c: '江苏南通二建集团有限公司',
  d: '有限责任公司',
  e: '上海市人民中路888号',
  f: '杨晓东',
  g: '人民币18500万元整',
  h: '2001-11-12',
  i: '2001-06-18 ~ 2033-12-02',
  j:
    '房屋建筑工程总承包（特级）；市政公用工程施工总承包（壹级）；建筑装修装饰工程专业承包（壹级）；机电设备安装工程专业承包（壹级）；钢结构工程专业承包（壹级）；机电安装工程施工总承包（贰级）；消防设施工程专业承包（贰级）；地基基础工程专业承包（贰级）；起重设备安装工程专业承包（贰级）（涉及专项审批的，在审批机关批准的经营期限内从事经营）；承包与其实力、规模、业绩相适应的国外工程项目；五金、建筑材料销售；建筑施工机械设备租赁，园林绿化工程施工，模块化建筑技术研发、组装。（依法须经批准的项目，经相关部门批准后方可开展经营活动）',
  k: '上海市市场监督管理局',
  l: '2001-06-18',
};

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
