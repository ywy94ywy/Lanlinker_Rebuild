import { Input } from 'antd';
import { SafeNumberInput } from 'lanlinker';
import CountDownInput from '@/components/CountDownInput';

export default () => {
  return [
    {
      label: '安全密码',
      rules: [{ required: true }],
      component: <SafeNumberInput></SafeNumberInput>,
    },
    {
      label: '新邮箱账号',
      rules: [{ required: true }],
      component: <Input placeholder="请输入新邮箱账号"></Input>,
    },
    {
      label: '新邮箱验证码',
      rules: [{ required: true }],
      component: <CountDownInput></CountDownInput>,
    },
  ];
};
