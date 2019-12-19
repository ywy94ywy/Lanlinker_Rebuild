/**
 * @description 公共组件测试页面
 */
import React, { useEffect, useState } from 'react'
import {
  BasicLayout,
  UserMenu,
  Notification,
  SwitchTheme,
  SwitchSystems,
  SystemsNav,
  TimeWeather,
} from '@/'

const fakeMenu = [
  {
    path: '/test1',
    name: 'test1',
    icon: 'skin',
    children: [
      {
        path: '/test3333',
        name: 'test33',
        icon: 'skin',
        children: [
          {
            path: '/test333',
            name: 'test3',
            icon: 'skin',
          },
          {
            path: '/test444',
            name: 'test4',
            icon: 'skin',
          },
        ],
      },
    ],
  },
  {
    path: '/test2222',
    name: 'test22',
    icon: 'skin',
    children: [
      {
        path: '/test222',
        name: 'test2',
        icon: 'skin',
      },
    ],
  },
]

const companys = [
  {
    value: '123',
  },
  {
    value: '122223',
  },
  {
    value: '144423',
  },
]

const fakeUser = {
  name: '贾亚军',
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  userid: '00000001',
  post: '劳务管理员',
}

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
]

const applications = [
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(113,187,255,1) 0%,rgba(24,144,255,1) 100%)',
    title: '项目综合管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(255,188,190,1) 0%,rgba(247,121,125,1) 100%)',
    title: '通行证管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(95,226,255,1) 0%,rgba(18,194,233,1) 100%)',
    title: '视频监控管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(181,181,255,1) 0%,rgba(127,127,213,1) 100%)',
    title: '质量安全监管系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(255,224,153,1) 0%,rgba(254,182,20,1) 100%)',
    title: '物料管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(148,148,148,1) 0%,rgba(51,51,51,1) 100%)',
    title: '设备管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(61,243,87,1) 0%,rgba(39,198,62,1) 100%)',
    title: '环境管理系统',
  },
  {
    icon: 'appstore',
    background:
      'linear-gradient(180deg,rgba(180,255,250,1) 0%,rgba(111,216,209,1) 100%)',
    title: '项目进度管理系统',
  },
]

const systemsNav = [
  {
    icon: 'appstore',
    title: '物料',
  },
  {
    icon: 'appstore',
    title: '设备',
  },
  {
    icon: 'appstore',
    title: '质量',
  },
  {
    icon: 'appstore',
    title: '视频',
  },
  {
    icon: 'appstore',
    title: '综合',
  },
  {
    icon: 'appstore',
    title: '环境',
  },
]

export default ({ children, ...props }) => {
  const [menuData, setMenuData] = useState([])
  const [user, setUser] = useState([])
  const [tree, setTree] = useState([])
  const [currentProject, setCurrentProject] = useState(' ')

  useEffect(() => {
    setTimeout(() => {
      setMenuData(fakeMenu)
      setUser(fakeUser)
      setTree(fakeTree)
      setCurrentProject(fakeTree[0].name)
    }, 0)
  }, [])

  return (
    <BasicLayout
      menuData={menuData}
      leftContent={
        <SwitchSystems
          applications={applications}
          companys={companys}
          currentProject={currentProject}
          tree={tree}
          onSelect={(e, b) => {
            setCurrentProject(b.node.props.title)
          }}
        />
      }
      middleContent={
        <TimeWeather/>
        // <SystemsNav systemsNav={systemsNav} />
      }
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
  )
}
