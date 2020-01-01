/**
 * @module 自定义Card
 * @description 1、简化margin; 2、Tabs型Card
 * @todo 不知道为什么CustomCard和CustomCardTabs没有死循环
 */
import { Card, Tabs } from "antd";
import classNames from "classnames";
import styles from "./style.less";

const CustomCard = ({
  className,
  children,
  marginLeft,
  marginTop,
  ...rest
}) => {
  return (
    <Card
      className={classNames(
        styles.customCard,
        className,
        marginLeft && styles.customCardML,
        marginTop && styles.customCardMT
      )}
      {...rest}
    >
      {children}
    </Card>
  );
};

export const CustomCardTabs = ({
  children,
  marginLeft,
  marginTop,
  ...props
}) => {
  return (
    <CustomCard
      bodyStyle={{ padding: 0 }}
      marginTop={marginTop}
      marginLeft={marginLeft}
    >
      <Tabs size="large" {...props}>
        {children}
      </Tabs>
    </CustomCard>
  );
};

CustomCardTabs.TabPane = Tabs.TabPane;

export default CustomCard;
