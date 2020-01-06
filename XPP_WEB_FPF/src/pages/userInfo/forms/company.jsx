import { Input } from 'antd';

export default ({} = {}) => {
  return [
    {
      name: 'a',
      label: '公司全名',
      component: <Input></Input>,
      rules: [{ required: true }],
    },
    {
      name: 'b',
      label: '公司简名',
      component: <Input></Input>,
    },
    {
      component: null,
    },
    {
      name: 'c',
      label: '公司地区',
      component: <Input></Input>,
    },
    {
      name: 'd',
      label: '公司规模（单位：人）',
      component: <Input></Input>,
    },
    {
      component: null,
    },
    {
      name: 'e',
      label: '通讯地址',
      component: <Input></Input>,
    },
    {
      name: 'f',
      label: '通讯邮编',
      component: <Input></Input>,
    },
    {
      component: null,
    },
    {
      name: 'g',
      label: '公司电话',
      component: <Input></Input>,
    },
    {
      name: 'h',
      label: '公司传真',
      component: <Input></Input>,
    },
    {
      component: null,
    },
    {
      name: 'i',
      label: '公司行业',
      component: <Input></Input>,
    },
    {
      name: 'j',
      label: '公司网址',
      component: <Input addonBefore="Http://"></Input>,
    },
    {
      component: null,
    },
    {
      label: '公司简介',
      component: <Input placeholder="可输入50字"></Input>,
      colSpan: 3,
    },
    {
      label: '公司描述',
      component: <Input.TextArea placeholder="可输入512字"></Input.TextArea>,
      colSpan: 3,
    },
    {
      label: '公司备注',
      component: <Input.TextArea placeholder="可输入512字"></Input.TextArea>,
      colSpan: 3,
    },
  ];
};
