import { Input, DatePicker } from 'antd';

export default () => {
  return [
    {
      label: '模块URI',
      name: 'aa',
      component: <Input></Input>,
    },
    {
      label: '模块元素名称',
      name: 'ab',
      component: <Input></Input>,
    },
    {
      label: '模块元素值',
      name: 'ac',
      component: <Input></Input>,
    },
    {
      label: '模块创建时间',
      name: 'ad',
      component: <DatePicker disabled></DatePicker>,
    },
    {
      label: '模块修改时间',
      name: 'ae',
      component: <DatePicker disabled></DatePicker>,
    },
    {
      label: '模块启用时间',
      name: 'af',
      component: <DatePicker></DatePicker>,
      rules: [{ required: true }],
    },
    {
      label: '模块失效时间',
      name: 'ag',
      component: <DatePicker></DatePicker>,
    },
  ];
};
