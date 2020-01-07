/**
 * @module 用户安全管理
 * @author DesYang
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Menu } from 'antd';
import UserPassword from './components/UserPassword';
import UserSecurity from './components/UserSecurity';
import styles from './style.less';

const menuList = ['用户密码管理', '用户密保管理'];

export default () => {
  const [selectKey, setSelectKey] = useState('0');

  return (
    <PageHeaderWrapper>
      <div className={styles.userSecurity}>
        <div className={styles.leftMenu}>
          <Menu
            mode="inline"
            selectedKeys={[selectKey]}
            onClick={({ key }) => {
              setSelectKey(key);
            }}
          >
            {getMenu(menuList)}
          </Menu>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{menuList[selectKey]}</div>
          {renderChildren(selectKey)}
        </div>
      </div>
    </PageHeaderWrapper>
  );
};

// 左侧菜单
const getMenu = menuList =>
  menuList.map((item, index) => <Menu.Item key={index}>{item}</Menu.Item>);

// 右侧内容
const renderChildren = selectKey => {
  switch (selectKey) {
    case '0':
      return <UserPassword />;
    case '1':
      return <UserSecurity />;
    default:
      break;
  }
};
