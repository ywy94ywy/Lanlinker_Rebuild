import { Card } from 'antd'
import IconFont from '../IconFont'
import classNames from 'classnames'
import style from './style.less'

export default ({ icon, title, className, children, gap, ...rest }) => {
  return (
    <Card
      className={classNames(
        style.customCard,
        className,
        gap && style.customCardMargin,
      )}
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
      {...rest}
    >
      {children}
    </Card>
  )
}
