import React, { useEffect, useState } from 'react';
import {
  BasicLayout,
  UserMenu,
  Notification,
  SwitchTheme,
  SwitchSystems,
  SystemsNav,
} from 'lanlinker';

const fakeMenu = [
  {
    path: '/主页管理',
    name: '主页管理',
    icon: 'skin',
    children: [
      {
        path: '/home',
        name: '首页',
        icon: 'skin',
      },
      {
        path: '/manual',
        name: '操作手册',
        icon: 'skin',
      },
    ],
  },
];

const fakeUser = {
  name: '贾亚军',
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  userid: '00000001',
  post: '劳务管理员',
};

export default ({ children, ...props }) => {
  const [menuData, setMenuData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMenuData(fakeMenu);
      setUser(fakeUser);
    }, 0);
  }, []);

  return (
    <BasicLayout
      menuData={menuData}
      leftContent={<SwitchSystems currentSystem="吾悦广场1～7号楼住宅楼项目" />}
      middleContent={<SystemsNav />}
      rightContent={
        <>
          <SwitchTheme />
          <Notification />
          <UserMenu user={user} />
        </>
      }
      {...props}
    >
      {children}
    </BasicLayout>
  );
};
