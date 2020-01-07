/**
 * @module 用户密码管理
 * @author DesYang
 */
import ListWrapper from './ListWrapper';
import { CustomForm, CustomButton } from 'lanlinker';
import { Alert } from 'antd';
import loginPasswordForm from '../forms/loginPassword';
import safePasswordForm from '../forms/safePassword';
import styles from '../style.less';

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱</span>,
};

export default () => {
  const data = [
    {
      title: '用户登录密码管理',
      description: <>当前密码强度：{passwordStrength.strong}</>,
      actions: [
        <CustomButton.Modal
          type="a"
          text="修改"
          modalProps={{
            title: '用户登录密码修改',
            width: 600,
          }}
        >
          <Alert message="原密码不正确" type="error" showIcon closable />
          <CustomForm
            data={loginPasswordForm()}
            layout="inline"
            labelCol={{ span: 7 }}
            className={styles.formlayout}
          ></CustomForm>
        </CustomButton.Modal>,
      ],
    },
    {
      title: '用户安全密码管理',
      description: '安全密码限定6位字符',
      actions: [
        <CustomButton.Modal
          type="a"
          text="重置"
          modalProps={{
            title: '用户安全密码修改',
            width: 600,
          }}
        >
          <Alert message="原密码不正确" type="error" showIcon closable />
          <CustomForm
            data={safePasswordForm()}
            layout="inline"
            labelCol={{ span: 7 }}
            className={styles.formlayout}
          ></CustomForm>
        </CustomButton.Modal>,
      ],
    },
  ];
  return <ListWrapper data={data} />;
};
