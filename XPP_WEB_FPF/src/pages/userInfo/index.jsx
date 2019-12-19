/**
 * @module 用户信息管理
 * @author DesYang
 */
import { useRef, useEffect, useState } from 'react';
import { PageHeaderWrapper, CustomCard, ConfigForm } from 'lanlinker';
import { Button, Row, Col, Card, Avatar } from 'antd';
import style from './index.less';
import personForm from './personForm';
import managerForm from './managerForm';

export default () => {
  const personFormRef = useRef();
  const managerFormRef = useRef();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const a = setTimeout(() => {
      setFormData({ userName: '娃哈哈', userSex: '1' });
    }, 1000);
    return () => clearTimeout(a);
  }, []);

  const submit = () => {
    const { validateFields } = personFormRef.current;
    validateFields((err, value) => {
      console.log(err, value);
    });
  };

  return (
    <>
      <PageHeaderWrapper content={<UserInfoHeader />}>
        <div className={style.userInfo}>
          <CustomCard icon="iconyonghuxinxiguanli" title="个人基本信息">
            <ConfigForm
              width={1020}
              itemWidth={320}
              data={personForm(formData)}
              ref={personFormRef}
            ></ConfigForm>
          </CustomCard>
          <CustomCard icon="iconyonghuzhanghaoguanli" title="负责人信息" gap>
            <ConfigForm
              width={1020}
              itemWidth={320}
              data={managerForm()}
              ref={managerFormRef}
            ></ConfigForm>
          </CustomCard>
        </div>
      </PageHeaderWrapper>
      <Card className={style.userInfoFooter}>
        <Button
          type="primary"
          className={style.btn}
          onClick={() => {
            submit();
          }}
        >
          保存
        </Button>
      </Card>
    </>
  );
};

const UserInfoHeader = () => {
  return (
    <Row type="flex" className={style.userInfoHeader}>
      <Col className={style.headLeft}>
        <p>数字帐号：1234566</p>
        <p>手机帐号：13812345678</p>
        <p>昵称帐号：江苏南通二建集团有限公司</p>
        <p>邮箱帐号：123@nt2j.cn</p>
      </Col>
      <Col className={style.headRight}>
        <Avatar
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          size={90}
        ></Avatar>
        <Button icon="upload">更换头像</Button>
      </Col>
    </Row>
  );
};
