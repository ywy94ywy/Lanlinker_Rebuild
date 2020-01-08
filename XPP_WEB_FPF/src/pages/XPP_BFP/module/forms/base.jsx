import { Input } from 'antd';

export default () => {
  return [
    {
      label: '用户简介',
      name: 'ba',
      component: <Input></Input>,
    },
    {
      label: '用户描述',
      name: 'bb',
      component: <Input.TextArea></Input.TextArea>,
    },
    {
      label: '用户备注',
      name: 'bc',
      component: <Input.TextArea></Input.TextArea>,
    },
  ];
};
