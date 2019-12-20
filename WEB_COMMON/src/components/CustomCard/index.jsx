import { Card } from 'antd'
import IconFont from '../IconFont'
import classnames from 'classnames'
import style from './style.less'

export default ({ icon, title, className, children, gap, ...props }) => {
  return (
    <Card
      className={classnames(
        style.customCard,
        className,
        gap && style.customCardMargin,
      )}
      title='123'
      title={
        typeof title === 'string' ? (
          <span className={style.title}>
            {icon && (
              <IconFont className={style.iconFix} type={icon}></IconFont>
            )}
            <span>{title}</span>
          </span>
        ) : (
          title
        )
      }
      {...props}
    >
      {children}
    </Card>
  )
}
