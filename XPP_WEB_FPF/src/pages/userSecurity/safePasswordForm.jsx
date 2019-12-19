import { SafeNumberInput } from 'lanlinker';

export default () => {
  return [
    {
      label: '原登录密码',
      component: <SafeNumberInput></SafeNumberInput>,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      label: '新登录密码',
      component: <SafeNumberInput></SafeNumberInput>,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      label: '新登录密码确认',
      component: <SafeNumberInput></SafeNumberInput>,
      rules: [
        {
          required: true,
        },
      ],
    },
  ];
};
