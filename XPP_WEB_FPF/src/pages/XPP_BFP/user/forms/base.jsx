import { Input, Select } from 'antd';

export default () => {
  return [
    {
      label: '用户常用电话',
      component: <Input></Input>,
    },
    {
      label: '用户常用地址',
      component: <Input></Input>,
    },
    {
      label: '用户邮箱账号',
      component: <Input></Input>,
    },
    {
      label: '用户生日',
      component: <Input></Input>,
    },
    {
      label: '用户全名拼音缩写',
      component: <Input></Input>,
    },
    {
      label: '用户网址',
      component: <Input addonBefore="Http://"></Input>,
    },
    {
      label: '用户简介',
      component: <Input></Input>,
      colSpan: 2,
    },
    {
      label: '用户描述',
      component: <Input.TextArea></Input.TextArea>,
      colSpan: 2,
    },
    {
      label: '用户备注',
      component: <Input.TextArea></Input.TextArea>,
      colSpan: 2,
    },
  ];
};
