/**
 * @module 用户信息管理
 * @author DesYang
 * @todo UI：头像上传
 */
import { useRef, useEffect, useState } from 'react';
import { PageHeaderWrapper, ConfigForm } from 'lanlinker';
import { Button, Card, Avatar, Tabs } from 'antd';
import CustomModal from '@/components/CustomModal';
import styles from './index.less';
import personForm from './personForm';
import managerForm from './managerForm';

const { TabPane } = Tabs;

export default () => {
  const personFormRef = useRef();
  const managerFormRef = useRef();
  const [formData, setFormData] = useState({});
  const [uploadModal, setUploadModal] = useState(false);

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
      <PageHeaderWrapper>
        <div className={styles.userInfo}>
          <Tabs size="large" className={styles.userTabs}>
            <TabPane tab="个人基本信息" key="个人基本信息">
              <div className={styles.layout}>
                <ConfigForm
                  width={1020}
                  itemWidth={300}
                  data={personForm(formData)}
                  ref={personFormRef}
                ></ConfigForm>
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
              </div>
            </TabPane>
            <TabPane tab="工作信息" key="工作信息">
              <ConfigForm
                width={1020}
                itemWidth={300}
                data={managerForm()}
                ref={managerFormRef}
              ></ConfigForm>
            </TabPane>
          </Tabs>
        </div>
      </PageHeaderWrapper>
      <Card className={styles.userInfoFooter}>
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
      </Card>
    </>
  );
};
