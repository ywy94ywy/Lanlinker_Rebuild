import React, { useMemo, useState, useEffect } from 'react'
import { BasicLayout } from '@ant-design/pro-layout'
import { Result, Spin } from 'antd'
import Link from 'umi/link'
import style from './index.less'

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

const authRoutes = [] // 权限路由
// 获取antd-pro扁平化菜单keys和path
const getFlatMenuKeys = menuData => {
  let keys = []
  menuData.forEach(item => {
    if (!item) {
      return
    }
    keys.push(item.path)
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children))
    } else {
      authRoutes.push(item.path)
    }
  })
  return keys
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
  const [openKeys, setOpenKeys] = useState([])

  useEffect(() => {
    setOpenKeys(getFlatMenuKeys(menuData)) // 初始菜单全部展开
  }, [menuData])

  useMemo(() => MenuBreadcrumb(menuData), [menuData])

  return (
    <div className={style.themeWrapper}>
      <div className={style.bgwrapper}>
        <div className={style.bg}></div>
      </div>
      <BasicLayout
        className={style.basicLayout}
        collapsed={false}
        onCollapse={false}
        fixSiderbar={false}
        headerRender={() => {
          return (
            <div className={style.headerContent}>
              <div className={style.left}>{leftContent}</div>
              <div className={style.middle}>{middleContent}</div>
              <div className={style.right}>{rightContent}</div>
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
        // 菜单展开控制
        menuProps={{
          openKeys,
          onOpenChange(e) {
            setOpenKeys(e)
          },
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
        // siderWidth={230}
        disableMobile
        disableContentMargin
        {...props}
      >
        <Auth pathname={location.pathname}>{children}</Auth>
      </BasicLayout>
    </div>
  )
}

// 权限控制(只有返回菜单对应的路由有权限访问)
const Auth = ({ children, pathname }) => {
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
