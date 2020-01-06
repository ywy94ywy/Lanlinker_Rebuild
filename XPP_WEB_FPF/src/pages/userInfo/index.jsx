/**
 * @module 用户信息管理
 * @author DesYang
 * @todo UI：头像上传,表单
 * @todo 业务处理
 */
import { useRef, useEffect, useState } from 'react';
import { PageHeaderWrapper, CustomForm, CustomModal, CustomCard, CustomCardTabs } from 'lanlinker';
import { Button, Avatar } from 'antd';
import personForm from './forms/person';
import personForm2 from './forms/person2';
import companyForm from './forms/company';
import companyForm2 from './forms/company2';
import styles from './style.less';

const { TabPane } = CustomCardTabs;

export default () => {
  const personFormRef = useRef();
  const managerFormRef = useRef();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const a = setTimeout(() => {
      setFormData({ userName: '娃哈哈', userSex: '1' });
    }, 1000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  const submit = () => {
    const { validateFields } = personFormRef.current;
    validateFields((err, value) => {
      console.log(err, value);
    });
  };

  return (
    <>
      <PageHeaderWrapper className={styles.userInfo}>
        <CustomCardTabs>
          <TabPane tab="个人基本信息" key="个人基本信息">
            <div className={styles.layout}>
              <CustomForm data={personForm(formData)} ref={personFormRef} columns={3} />
              <User />
            </div>
          </TabPane>
          <TabPane tab="工作信息" key="工作信息">
            <div className={styles.layout}>
              <CustomForm data={personForm2()} ref={managerFormRef} columns={3} />
            </div>
          </TabPane>
        </CustomCardTabs>
        <CustomCardTabs>
          <TabPane tab="企业基本信息" key="企业基本信息">
            <div className={styles.layout}>
              <CustomForm data={companyForm()} ref={personFormRef} columns={3} />
              <User />
            </div>
          </TabPane>
          <TabPane tab="负责人信息" key="负责人信息">
            <div className={styles.layout}>
              <CustomForm data={companyForm2()} ref={managerFormRef} columns={3} />
            </div>
          </TabPane>
        </CustomCardTabs>
      </PageHeaderWrapper>
      <CustomCard className={styles.userInfoFooter}>
        <Button className={styles.btn} onClick={() => {}}>
          取消
        </Button>
        <Button
          type="primary"
          className={styles.btn}
          onClick={() => {
            submit();
          }}
        >
          保存
        </Button>
      </CustomCard>
    </>
  );
};

const User = () => {
  const [uploadModal, setUploadModal] = useState(false);
  return (
    <div className={styles.user}>
      <Avatar
        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
        size={180}
      ></Avatar>
      <Button
        icon="upload"
        className={styles.upload}
        onClick={() => {
          setUploadModal(true);
        }}
      >
        更换头像
      </Button>
      <CustomModal
        title="上传头像"
        visible={uploadModal}
        onCancel={() => {
          setUploadModal(false);
        }}
      >
        暂无页面
      </CustomModal>
      <div className={styles.info}>
        <p>
          <span>数字帐号：</span>
          <span>1234566</span>
        </p>
        <p>
          <span>手机帐号：</span>
          <span>13812345678</span>
        </p>
        <p>
          <span>昵称帐号：</span>
          <span>江苏南通二建集团有限公司</span>
        </p>
        <p>
          <span>邮箱帐号：</span>
          <span>123@nt2j.cn</span>
        </p>
      </div>
    </div>
  );
};
