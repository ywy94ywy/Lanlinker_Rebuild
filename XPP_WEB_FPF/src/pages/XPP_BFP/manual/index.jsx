import React from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Icon, Avatar, Col } from 'antd';
import bg from './imgs/bg.png';
import styles from './style.less';

export default () => {
  return (
    <PageHeaderWrapper>
      <div className={styles.manual}>
        <img src={bg} alt="" />
        <div className={styles.subtitle}>
          跨子系统（域）帐号身份信息及权限管理系统。通行证后台可对用户帐号进行身份信息管理、密码管理、权限设置等操作。
        </div>
        <div className={styles.content}>
          <div className={styles.icon}>
            <Icon type="down"></Icon>
          </div>
          <VerticleLine height={50} />
          <div className={styles.btn}>权限管理</div>
          <Block
            title="用户综合管理"
            icon="user"
            description="使用用户组别信息、用户详细列表 以及用户系统执照的导入导出记录"
            img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577359526865&di=d84c700d35c60d1608e84b26321de181&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F14%2F05%2F35%2F79bOOOPIC53_1024.jpg%2521%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
          ></Block>
          <Block
            reverse
            title="模块综合管理"
            icon="appstore"
            description="模块组别管理、模块详细信息以及模块的精细化管理"
            img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577359526865&di=d84c700d35c60d1608e84b26321de181&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F14%2F05%2F35%2F79bOOOPIC53_1024.jpg%2521%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
          ></Block>
          <Block
            title="权限分配管理"
            icon="search"
            description="使用用户权限标签、模块权限标签可以对用户组别及模块组别赋权"
            img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577359526865&di=d84c700d35c60d1608e84b26321de181&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F14%2F05%2F35%2F79bOOOPIC53_1024.jpg%2521%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
          ></Block>
          <VerticleLine height={50} />
        </div>
      </div>
    </PageHeaderWrapper>
  );
};

const VerticleLine = ({ height }) => <div className={styles.verticleLine} style={{ height }}></div>;
const reverseProp = { transform: 'rotateY(180deg)' };

const Block = ({ title, icon, description, img, reverse }) => (
  <>
    <VerticleLine height={50} />
    <div className={styles.block} style={reverse && reverseProp}>
      <Col className={styles.textWrapper}>
        <Col className={styles.text}>
          <div className={styles.title} style={reverse && reverseProp}>
            <span>{title}</span>
          </div>
          <div
            className={styles.description}
            style={reverse && { ...reverseProp, textAlign: 'left' }}
          >
            {description}
          </div>
        </Col>
        {icon && (
          <Col className={styles.icon} style={reverse && reverseProp}>
            <Avatar icon={icon} size={24}></Avatar>
          </Col>
        )}
      </Col>
      <Col className={styles.imgWrapper}>
        <div style={reverse && reverseProp}>
          <img src={img}></img>
        </div>
      </Col>
    </div>
  </>
);
