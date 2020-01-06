import { Input } from 'antd';

export default () => {
  return [
    {
      label: '原登录密码',
      rules: [{ required: true }],
      component: <Input placeholder="请输入原登录密码"></Input>,
    },
    {
      label: '新登录密码',
      rules: [{ required: true }],
      component: <Input placeholder="请输入新登录密码"></Input>,
    },
    {
      label: '新登录密码确认',
      rules: [{ required: true }],
      component: <Input placeholder="请重新输入新登录密码"></Input>,
    },
  ];
};
