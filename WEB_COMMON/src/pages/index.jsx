/**
 * @description 公共组件测试页面
 */
import React, { useEffect, useState, useMemo } from 'react'
import {
  BasicLayout,
  UserMenu,
  Notification,
  SwitchTheme,
  SwitchSystems,
  SystemsNav,
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

const fakeUser = {
  name: '贾亚军',
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  userid: '00000001',
  post: '劳务管理员',
}

let p = [
  {
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: true,
  },
  {
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: true,
  },
]

let n = [
  {
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: false,
  },
  {
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: false,
  },
  {
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: true,
  },
  {
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: true,
  },
]

export default ({ children, ...props }) => {
  const [menuData, setMenuData] = useState([])
  const [user, setUser] = useState([])
  const [notifications, setNotifications] = useState([])
  const [prompts, setPrompts] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setMenuData(fakeMenu)
      setUser(fakeUser)
      setNotifications(n)
      setPrompts(p)
    }, 0)
  }, [])

  const notificationsLength = useMemo(
    () => notifications.filter(v => !v.readed).length,
    [notifications],
  )
  const promptsLength = useMemo(() => prompts.filter(v => !v.readed).length, [
    prompts,
  ])

  return (
    <BasicLayout
      menuData={menuData}
      leftContent={<SwitchSystems currentSystem='吾悦广场1～7号楼住宅楼项目' />}
      middleContent={<SystemsNav />}
      rightContent={
        <>
          <SwitchTheme />
          <Notification
            prompts={prompts}
            notifications={notifications}
            setNotifications={setNotifications}
            setPrompts={setPrompts}
            notificationsLength={notificationsLength}
            promptsLength={promptsLength}
          />
          <UserMenu user={user} />
        </>
      }
      {...props}
    >
      {children}
    </BasicLayout>
  )
}
