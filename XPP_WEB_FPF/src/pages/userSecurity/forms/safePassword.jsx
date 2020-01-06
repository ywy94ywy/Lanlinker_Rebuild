import { SafeNumberInput } from 'lanlinker';

export default () => {
  return [
    {
      label: '原安全密码',
      rules: [{ required: true }],
      component: <SafeNumberInput></SafeNumberInput>,
    },
    {
      label: '新安全密码',
      rules: [{ required: true }],
      component: <SafeNumberInput></SafeNumberInput>,
    },
    {
      label: '新安全密码确认',
      rules: [{ required: true }],
      component: <SafeNumberInput></SafeNumberInput>,
    },
  ];
};
