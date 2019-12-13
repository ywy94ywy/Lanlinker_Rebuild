/**
 * @module 用户菜单
 * @todo 权限，管理员进前后台
 */
import { Avatar, Menu, Dropdown } from 'antd'
import style from './index.less'

export default ({ user = null, logout = null, systems = [] }) => {
  return user ? (
    <Dropdown
      overlay={
        <Menu>
          {systems.map((v, i) => {
            return (
              <Menu.Item
                key={i}
                onClick={() => {
                  window.location.href = v.url || '/'
                }}
              >
                {v.title}
              </Menu.Item>
            )
          })}
          <Menu.Item
            onClick={() => {
              logout && logout()
            }}
          >
            退出系统
          </Menu.Item>
        </Menu>
      }
    >
      <div className={style.userMenu}>
        <Avatar size={25} src={user.avatar} icon='user'></Avatar>
        <span className={style.user}>{user.name}</span>
      </div>
    </Dropdown>
  ) : null
}
