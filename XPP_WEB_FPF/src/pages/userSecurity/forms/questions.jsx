import { Input, Select } from 'antd';
import { SafeNumberInput } from 'lanlinker';
export const questionForm0 = () => {
  return [
    {
      label: '原安全密码',
      rules: [
        {
          required: true,
        },
      ],
      component: <SafeNumberInput></SafeNumberInput>,
    },
  ];
};

export const questionForm1 = () => {
  return [
    {
      label: '密保问题01',
      component: (
        <Select>
          <Select.Option value="1">您母亲的生日是？</Select.Option>
        </Select>
      ),
    },
    {
      label: '密保答案01',
      rules: [
        {
          required: true,
        },
      ],
      component: <Input placeholder="请输入密保答案"></Input>,
    },
    {
      label: '密保问题02',
      component: (
        <Select>
          <Select.Option value="1">您父亲的生日是？</Select.Option>
        </Select>
      ),
    },
    {
      label: '密保答案02',
      rules: [
        {
          required: true,
        },
      ],
      component: <Input placeholder="请输入密保答案"></Input>,
    },
    {
      label: '密保问题03',
      component: (
        <Select>
          <Select.Option value="1">您配偶的生日是？</Select.Option>
        </Select>
      ),
    },
    {
      label: '密保答案03',
      rules: [
        {
          required: true,
        },
      ],
      component: <Input placeholder="请输入密保答案"></Input>,
    },
  ];
};

export const questionForm2 = () => {
  return [
    {
      label: '密保问题01',
      component: <span>您母亲的生日是？</span>,
    },
    {
      label: '密保答案01',
      rules: [
        {
          required: true,
        },
      ],
      component: <Input placeholder="请输入密保答案"></Input>,
    },
    {
      label: '密保问题02',
      component: <span>您父亲的生日是？</span>,
    },
    {
      label: '密保答案02',
      rules: [
        {
          required: true,
        },
      ],
      component: <Input placeholder="请输入密保答案"></Input>,
    },
    {
      label: '密保问题03',
      component: <span>您配偶的生日是？</span>,
    },
    {
      label: '密保答案03',
      rules: [
        {
          required: true,
        },
      ],
      component: <Input placeholder="请输入密保答案"></Input>,
    },
  ];
};
