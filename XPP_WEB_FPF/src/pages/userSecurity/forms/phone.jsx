import { Input } from 'antd';
import { SafeNumberInput } from 'lanlinker';
import CountDownInput from '@/components/CountDownInput';

export default () => {
  return [
    {
      label: '安全密码',
      name: 'a',
      rules: [{ required: true }],
      component: <SafeNumberInput></SafeNumberInput>,
    },
    {
      label: '新手机账号',
      name: 'b',
      rules: [{ required: true }],
      component: <Input placeholder="请输入新手机账号"></Input>,
    },
    {
      label: '新手机验证码',
      name: 'c',
      rules: [{ required: true }],
      component: <CountDownInput></CountDownInput>,
    },
  ];
};
