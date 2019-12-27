/**
 * @module 后台管理系统主要布局
 * @todo 权限控制，左侧菜单长度过长问题，默认展开待商榷
 */
import React, { useMemo } from 'react'
import { BasicLayout } from '@ant-design/pro-layout'
import { Result, Spin } from 'antd'
import Link from 'umi/link'
import styles from './style.less'

// 面包屑处理（由菜单生成）
const breadcrumb = {}
const MenuBreadcrumb = (menu, arr = []) => {
  menu.forEach(v => {
    const breadcrumbList = [...arr, { breadcrumbName: v.name }]
    if (v.children) {
      MenuBreadcrumb(v.children, breadcrumbList)
    } else {
      breadcrumb[v.path] = breadcrumbList
    }
  })
  return breadcrumb
}

// 获取扁平化菜单path
const getAuthRoutes = menuData => {
  let authRoutes = []
  menuData.forEach(item => {
    if (!item) {
      return
    }
    if (item.children) {
      authRoutes = authRoutes.concat(getAuthRoutes(item.children))
    } else {
      authRoutes.push(item.path)
    }
  })
  return authRoutes
}

export default ({
  children,
  menuData = [],
  leftContent = null,
  middleContent = null,
  rightContent = null,
  location,
  ...props
}) => {
  const authRoutes = useMemo(() => getAuthRoutes(menuData), [menuData])
  useMemo(() => MenuBreadcrumb(menuData), [menuData])

  return (
    <div className={styles.themeWrapper}>
      <div className={styles.bgwrapper}>
        <div className={styles.bg}></div>
      </div>
      <BasicLayout
        className={styles.basicLayout}
        collapsed={false}
        onCollapse={false}
        headerRender={() => {
          return (
            <div className={styles.headerContent}>
              <div className={styles.left}>{leftContent}</div>
              <div className={styles.middle}>{middleContent}</div>
              <div className={styles.right}>{rightContent}</div>
            </div>
          )
        }}
        // 菜单数据
        menuDataRender={() => menuData}
        // 菜单渲染
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || menuItemProps.children) {
            return defaultDom
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>
        }}
        // 面包屑数据
        breadcrumbRender={(routers = []) => {
          if (routers[0]) {
            const path = breadcrumb[routers[0].path] || []
            return [...path]
          }
        }}
        // 面包屑渲染
        itemRender={route => <span>{route.breadcrumbName}</span>}
        menu={{ defaultOpenAll: true }}
        siderWidth={230}
        disableMobile
        disableContentMargin
        {...props}
      >
        <Auth pathname={location.pathname} authRoutes={authRoutes}>
          {children}
        </Auth>
      </BasicLayout>
    </div>
  )
}

// 权限控制(只有返回菜单对应的路由有权限访问)
const Auth = ({ children, pathname, authRoutes }) => {
  if (authRoutes.length === 0)
    return (
      <div style={{ textAlign: 'center', paddingTop: '200px' }}>
        <Spin size='large'></Spin>
      </div>
    )
  if (authRoutes.includes(pathname)) return children
  return (
    <Result status='404' title='404' subTitle='Sorry, not found this page.' />
  )
}
