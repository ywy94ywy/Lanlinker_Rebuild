import { Input } from 'antd';

export default () => {
  return [
    {
      label: '原登录密码',
      component: <Input></Input>,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      label: '新登录密码',
      component: <Input></Input>,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      label: '新登录密码确认',
      component: <Input></Input>,
      rules: [
        {
          required: true,
        },
      ],
    },
  ];
};
