import React, { useEffect, useState } from 'react';
import { BasicLayout, UserMenu, SwitchTheme, SwitchSystems, TimeWeather } from 'lanlinker';
import { connect } from 'dva';
import { router } from 'umi';
import Notification from '@/components/Notification';
import logo from '@/assets/logo.png';

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
const fakeCompanys = [
  {
    value: '123',
  },
  {
    value: '122223',
  },
  {
    value: '144423',
  },
];
const fakeApplications = [
  {
    icon: 'appstore',
    background: 'linear-gradient(180deg,rgba(113,187,255,1) 0%,rgba(24,144,255,1) 100%)',
    title: '项目综合管理系统',
  },
  {
    icon: 'appstore',
    background: 'linear-gradient(180deg,rgba(255,188,190,1) 0%,rgba(247,121,125,1) 100%)',
    title: '通行证管理系统',
  },
  {
    icon: 'appstore',
    background: 'linear-gradient(180deg,rgba(95,226,255,1) 0%,rgba(18,194,233,1) 100%)',
    title: '视频监控管理系统',
  },
  {
    icon: 'appstore',
    background: 'linear-gradient(180deg,rgba(181,181,255,1) 0%,rgba(127,127,213,1) 100%)',
    title: '质量安全监管系统',
  },
  {
    icon: 'appstore',
    background: 'linear-gradient(180deg,rgba(255,224,153,1) 0%,rgba(254,182,20,1) 100%)',
    title: '物料管理系统',
  },
  {
    icon: 'appstore',
    background: 'linear-gradient(180deg,rgba(148,148,148,1) 0%,rgba(51,51,51,1) 100%)',
    title: '设备管理系统',
  },
  {
    icon: 'appstore',
    background: 'linear-gradient(180deg,rgba(61,243,87,1) 0%,rgba(39,198,62,1) 100%)',
    title: '环境管理系统',
  },
  {
    icon: 'appstore',
    background: 'linear-gradient(180deg,rgba(180,255,250,1) 0%,rgba(111,216,209,1) 100%)',
    title: '项目进度管理系统',
  },
];

export default connect(({ user: { menu, userInfo } }) => ({
  menu,
  userInfo,
}))(({ menu, userInfo, children, dispatch, ...props }) => {
  const [tree, setTree] = useState([]); // todo delete
  const [currentProject, setCurrentProject] = useState(' '); // todo delete

  useEffect(() => {
    dispatch({ type: 'user/fetchUserInfo' });
  }, []);
  if (window.location.pathname === '/' && menu.length > 0) {
    router.push(menu[0].children[0].path);
  }
  // todo delete
  useEffect(() => {
    setTimeout(() => {
      setTree(fakeTree);
      setCurrentProject(fakeTree[0].name);
    }, 0);
  }, []);

  return (
    <BasicLayout
      menuHeaderRender={() => (
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
      )}
      menuData={menu}
      leftContent={
        <SwitchSystems
          applications={fakeApplications}
          companys={fakeCompanys}
          currentProject={currentProject}
          tree={tree}
          onSelect={(e, b) => {
            setCurrentProject(b.node.props.title);
          }}
        />
      }
      middleContent={<TimeWeather />}
      rightContent={
        <>
          <SwitchTheme />
          <Notification />
          <UserMenu user={userInfo} />
        </>
      }
      siderWidth={230}
      {...props}
    >
      {children}
    </BasicLayout>
  );
});
