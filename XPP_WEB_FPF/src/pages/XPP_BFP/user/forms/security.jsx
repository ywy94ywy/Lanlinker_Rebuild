import { Input, Select } from 'antd';
import { SafeNumberInput } from 'lanlinker';

export default () => {
  return [
    {
      label: '用户登录密码',
      component: <Input></Input>,
      rules: [{ required: true }],
    },
    {
      label: '用户安全密码',
      component: <SafeNumberInput></SafeNumberInput>,
      rules: [{ required: true }],
    },
    {
      label: '用户密保问题01',
      component: <Select disabled></Select>,
    },
    {
      label: '用户密保答案01',
      component: <Input disabled></Input>,
    },
    {
      label: '用户密保问题02',
      component: <Select disabled></Select>,
    },
    {
      label: '用户密保答案02',
      component: <Input disabled></Input>,
    },
    {
      label: '用户密保问题03',
      component: <Select disabled></Select>,
    },
    {
      label: '用户密保答案03',
      component: <Input disabled></Input>,
    },
  ];
};
