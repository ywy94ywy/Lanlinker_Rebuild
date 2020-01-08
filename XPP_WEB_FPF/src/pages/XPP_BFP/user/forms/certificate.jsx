import { Input, DatePicker } from 'antd';

export default () => {
  return [
    {
      label: '用户证件类型名称',
      component: <Input></Input>,
    },
    {
      component: null,
    },
    {
      label: '用户证件起始日期',
      component: <DatePicker></DatePicker>,
    },
    {
      label: '用户证件终止日期',
      component: <DatePicker></DatePicker>,
    },
  ];
};
