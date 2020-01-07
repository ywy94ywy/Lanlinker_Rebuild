import React, { useEffect, useState } from 'react';
import { BasicLayout, UserMenu, SwitchTheme, SwitchSystems, TimeWeather } from 'lanlinker';
import { connect } from 'dva';
import { router } from 'umi';
import Notification from '@/components/Notification';
import logo from '@/assets/logo.png';

export default connect(({ user: { userInfo } }) => ({
  userInfo,
}))(({ userInfo, children, dispatch, ...props }) => {
  const [tree, setTree] = useState([]); // todo delete
  const [currentProject, setCurrentProject] = useState(' '); // todo delete

  useEffect(() => {
    dispatch({ type: 'user/fetchUserInfo' });
  }, []);
  if (window.location.pathname === '/' && fakeMenu.length > 0) {
    router.push(fakeMenu[0].children[0].path);
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
      menuData={fakeMenu}
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

const fakeMenu = [
  {
    path: '/主页管理',
    name: '主页管理',
    icon: 'skin',
    key: '主页管理',
    children: [
      {
        path: '/home',
        name: '首页',
        icon: 'skin',
        key: 'home',
      },
      {
        path: '/manual',
        name: '操作手册',
        icon: 'skin',
        key: 'manual',
      },
    ],
  },
  {
    path: '/业务管理',
    name: '业务管理',
    icon: 'skin',
    children: [
      {
        path: '/userInfo',
        name: '用户信息管理',
        icon: 'skin',
        key: 'TK5cnhKiiz',
      },
      {
        path: '/userSecurity',
        name: '用户安全管理',
        icon: 'skin',
        key: 'JAKGF9WAZV',
      },
      {
        path: '/userAuth',
        name: '用户认证管理',
        icon: 'skin',
        key: 'izFOpoNPtJ',
      },
      {
        path: '/userOrganization',
        name: '用户组织管理',
        icon: 'skin',
        key: 'jIxrgB6bQZ',
      },
      {
        path: '/userLicense',
        name: '用户执照管理',
        icon: 'skin',
        key: 'hAuXf7MaRQ',
      },
    ],
    key: 'Byfvytz0We',
  },
  {
    path: '/XPP主页管理',
    name: 'XPP主页管理',
    icon: 'skin',
    children: [
      {
        path: '/xpphome',
        name: '首页',
        icon: 'skin',
        key: 'oQJgWbAj9L',
      },
      {
        path: '/xppmanual',
        name: '操作手册',
        icon: 'skin',
        key: 'CHjkClFnMh',
      },
    ],
    key: 'CebW1NuPCf',
  },
  {
    path: '/XPP权限管理',
    name: 'XPP权限管理',
    icon: 'skin',
    children: [
      {
        path: '/xppuser',
        name: '用户综合管理',
        icon: 'skin',
        key: 'b3QaFjJgVU',
      },
      {
        path: '/xppmodule',
        name: '模块综合管理',
        icon: 'skin',
        key: '2oGLKaJVrb',
      },
      {
        path: '/xppauth',
        name: '权限分配管理',
        icon: 'skin',
        key: 'Tfor4nmAnS',
      },
      {
        path: '/xpplicense',
        name: '系统执照管理',
        icon: 'skin',
        key: 'Tfor4nmAnS2',
      },
    ],
    key: 'hlCIZGbe5b',
  },
  {
    path: '/劳务主页管理',
    name: '劳务主页管理',
    icon: 'skin',
    children: [
      {
        path: '/lrmHome',
        name: '首页',
        icon: 'skin',
        key: 'VMp3tF4kL6',
      },
      {
        path: '/lrmManual',
        name: '操作手册',
        icon: 'skin',
        key: 'LsKChorIw8',
      },
    ],
    key: 'XsLrEfsilV',
  },
  {
    path: '/劳务业务管理',
    name: '劳务业务管理',
    icon: 'skin',
    children: [
      {
        path: '/lrmProject',
        name: '项目信息',
        icon: 'skin',
        key: 'lrmproject',
      },
      {
        path: '/lrmregister',
        name: '登记管理',
        icon: 'skin',
        key: 'lrmregister',
      },
      {
        path: '/lrmcontract',
        name: '合同管理',
        icon: 'skin',
        key: 'lrmcontract',
      },
      {
        path: '/lrmcard',
        name: '卡片管理',
        icon: 'skin',
        key: 'lrmcard',
      },
      {
        path: '/lrmstaffinfo',
        name: '员工信息查询',
        icon: 'skin',
        key: 'lrmstaffinfo',
      },
      {
        path: '/lrmtrain',
        name: '培训管理',
        icon: 'skin',
        key: 'lrmtrain',
      },
      {
        path: '/lrmattendance',
        name: '考勤管理',
        icon: 'skin',
        key: 'lrmattendance',
      },
      {
        path: '/lrmsalary',
        name: '工资管理',
        icon: 'skin',
        key: 'lrmsalary',
      },
    ],
    key: 'wp5qbvUPSW',
  },
  {
    path: '/劳务统计分析',
    name: '劳务统计分析',
    icon: 'skin',
    key: '劳务统计分析',
    children: [
      {
        path: '/劳务基础统计',
        name: '劳务基础统计',
        icon: 'skin',
        key: '劳务基础统计',
        children: [
          {
            path: '/lrmpersonnel',
            name: '项目人员统计',
            icon: 'skin',
            key: 'lrmpersonnel',
          },
          {
            path: '/lrmswiping',
            name: '项目刷卡统计',
            icon: 'skin',
            key: 'lrmswiping',
          },
          {
            path: '/lrmcheck',
            name: '项目考勤统计',
            icon: 'skin',
            key: 'lrmcheck',
          },
          {
            path: '/lrmpost',
            name: '项目岗位统计',
            icon: 'skin',
            key: 'lrmpost',
          },
        ],
      },
      {
        path: '/劳务高级统计',
        name: '劳务高级统计',
        icon: 'skin',
        key: '劳务高级统计',
        children: [
          {
            path: '/lrmviolation',
            name: '通勤违规统计',
            icon: 'skin',
            key: 'lrmviolation',
          },
        ],
      },
    ],
  },
];

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
