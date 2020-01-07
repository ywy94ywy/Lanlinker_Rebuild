/**
 * @module 管理模块布局
 * @author DesYang
 */
import { CustomCard } from 'lanlinker';
import { Layout } from 'antd';
import classNames from 'classnames';
import styles from './style.less';

const ManageLayout = ({ children, className, ...props }) => (
  <Layout className={classNames(styles.manageLayout, className)} {...props}>
    {children}
  </Layout>
);

ManageLayout.LeftCard = ({ children, style, ...props }) => (
  <Layout.Sider theme="light" width={365}>
    <CustomCard
      style={{ height: '100%', overflow: 'hidden', ...style }}
      bodyStyle={{ padding: 0 }}
      {...props}
    >
      {children}
    </CustomCard>
  </Layout.Sider>
);

ManageLayout.RightCard = ({ children, style, ...props }) => (
  <Layout.Content>
    <CustomCard style={{ height: '100%', overflow: 'hidden', ...style }} marginLeft {...props}>
      {children}
    </CustomCard>
  </Layout.Content>
);

export default ManageLayout;
