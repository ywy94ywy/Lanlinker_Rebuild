/**
 * @module 自定义Card
 * @description 1、简化margin; 2、Tabs型Card
 * @todo 不知道为什么CustomCard和CustomCardTabs没有死循环
 */
import { Card, Tabs } from 'antd'
import classNames from 'classnames'
import style from './style.less'

const CustomCard = ({ className, children, gl, gt, ...rest }) => {
  return (
    <Card
      className={classNames(
        style.customCard,
        className,
        gl && style.customCardML,
        gt && style.customCardMT,
      )}
      {...rest}
    >
      {children}
    </Card>
  )
}

export const CustomCardTabs = ({ children, gt, gl, ...props }) => {
  return (
    <CustomCard bodyStyle={{ padding: 0 }} gt={gt} gl={gl}>
      <Tabs size='large' {...props}>
        {children}
      </Tabs>
    </CustomCard>
  )
}

CustomCardTabs.TabPane = Tabs.TabPane

export default CustomCard
