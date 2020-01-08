import { Input, Select } from 'antd';

export default () => {
  return [
    {
      label: '模块编号',
      name: 'a',
      component: <Input></Input>,
    },
    {
      component: null,
    },
    { label: '模块中文名称', name: 'b', component: <Input></Input>, rules: [{ required: true }] },
    { label: '模块英文名称', name: 'c', component: <Input></Input>, rules: [{ required: true }] },
    { label: '平台系统执照编号', name: 'd', component: <Input></Input> },
    { label: '平台系统执照中文名称', name: 'e', component: <Select></Select> },
    { label: '模块权限标签编号', name: 'f', component: <Input></Input> },
    { label: '模块中文类型', name: 'g', component: <Select></Select> },
    { label: '模块菜单分类编号', name: 'h', component: <Input></Input> },
    {
      label: '模块菜单分类中文名称',
      name: 'i',
      component: <Select></Select>,
      rules: [{ required: true }],
    },
    { label: '模块权限标签编号', name: 'i', component: <Input></Input> },
    { label: '模块权限标签中文名称', name: 'j', component: <Select></Select> },
  ];
};
