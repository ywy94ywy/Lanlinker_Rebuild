/**
 * @module 用户组织管理
 * @author DesYang
 */
import { PageHeaderWrapper,CustomCard } from 'lanlinker';
import { Input, Button, Table, List, Avatar ,Typography} from 'antd';
import styles from './style.less';
import applied from './imgs/applied.png';

const { Text } = Typography;

const systems = [
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    icon: applied,
  },
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    icon: applied,
  },
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    icon: applied,
  },
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    icon: applied,
  },
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
      <div className={styles.userOrganization}>
        <CustomCard title="搜索组织名称">
          <div>
            <span>公司全名:</span>
            <Input placeholder="请输入公司名称查询" style={{ margin: '0 15px', width: '200px' }} />
            <Button icon="search" type="primary">
              搜索
            </Button>
          </div>
          <List
            itemLayout="vertical"
            dataSource={systems}
            className={styles.list}
            renderItem={item => (
              <List.Item className={styles.listItem}>
                <div className={styles.top}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.icon} size={68} />}
                    title={item.title}
                    description={
                      <>
                        <div>当前公司 447人</div>
                        <div>当前进行中的项目 47项</div>
                      </>
                    }
                  />
                </div>
                <div className={styles.bottom}>
                  <a>申请加入</a>
                </div>
              </List.Item>
            )}
          />
        </CustomCard>
        <CustomCard title="已关联组织" gap>
          <Table columns={columns} dataSource={dataSource} bordered></Table>
        </CustomCard>
      </div>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '组织全名',
    dataIndex: 'a',
  },
  {
    title: '组织类型',
    dataIndex: 'b',
  },
  {
    title: '当前人数',
    dataIndex: 'c',
  },
  {
    title: '所属部门',
    dataIndex: 'd',
  },
  {
    title: '操作',
    render: () => (
      <Text type="danger" style={{ cursor: 'pointer' }}>
        解除关联
      </Text>
    ),
  },
];

const dataSource = [
  {
    a: '南通二建集团有限公司',
    b: '建设单位',
    c: '1921',
    d: '未分配',
  },
  {
    a: '南通二建集团有限公司',
    b: '建设单位',
    c: '1921',
    d: '未分配',
  },
  {
    a: '南通二建集团有限公司',
    b: '建设单位',
    c: '1921',
    d: '未分配',
  },
];
