/**
 * @module 用户安全管理
 * @author DesYang
 * @todo 拆分
 * @todo 业务逻辑
 */
import { useState, useEffect } from 'react';
import { PageHeaderWrapper, SafeNumberInput, CustomModal } from 'lanlinker';
import { Menu, Alert, Form, Input, Steps, List, Modal, Button, Select, Result } from 'antd';
import classNames from 'classnames';
import styles from './style.less';

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱</span>,
};

const menuList = ['用户密码管理', '用户密保管理'];

export default () => {
  const [selectKey, setSelectKey] = useState('1');

  return (
    <PageHeaderWrapper>
      <div className={styles.userSecurity}>
        <div className={styles.leftMenu}>
          <Menu
            mode="inline"
            selectedKeys={[selectKey]}
            onClick={({ key }) => {
              setSelectKey(key);
            }}
          >
            {getMenu(menuList)}
          </Menu>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{menuList[selectKey]}</div>
          {renderChildren(selectKey)}
        </div>
      </div>
    </PageHeaderWrapper>
  );
};

// 左侧菜单
const getMenu = menuList =>
  menuList.map((item, index) => <Menu.Item key={index}>{item}</Menu.Item>);

// 右侧内容
const renderChildren = selectKey => {
  switch (selectKey) {
    case '0':
      return <UserPassword />;
    case '1':
      return <UserSecurity />;
    default:
      break;
  }
};

// 用户密码管理
const UserPassword = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [securityModal, setSecurityModal] = useState(false);

  const data = [
    {
      title: '用户登录密码管理',
      description: <>当前密码强度：{passwordStrength.strong}</>,
      actions: [
        <>
          <a
            key="Modify"
            onClick={() => {
              setLoginModal(true);
            }}
          >
            修改
          </a>
          <CustomModal
            title="用户登录密码修改"
            width={600}
            visible={loginModal}
            className={styles.loginPasswordModal}
            onCancel={() => {
              setLoginModal(false);
            }}
          >
            <div>
              <Alert message="原密码不正确" type="error" showIcon closable />
              <LoginForm className={styles.form}></LoginForm>
            </div>
          </CustomModal>
        </>,
      ],
    },
    {
      title: '用户安全密码管理',
      description: '安全密码限定6位字符',
      actions: [
        <>
          <a
            key="Reset"
            onClick={() => {
              setSecurityModal(true);
            }}
          >
            重置
          </a>
          <CustomModal
            title="用户安全密码修改"
            width={600}
            visible={securityModal}
            className={styles.securityPasswordModal}
            onCancel={() => {
              setSecurityModal(false);
            }}
          >
            <div>
              <Alert message="原密码不正确" type="error" showIcon closable />
              <div className={styles.tabs}>暂无页面</div>
            </div>
          </CustomModal>
        </>,
      ],
    },
  ];

  return (
    <List
      dataSource={data}
      renderItem={item => (
        <List.Item actions={item.actions}>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  );
};

// 用户密保管理
const UserSecurity = () => {
  const [questionsModal, setQuestionsModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [phoneModal, setPhoneModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);

  const CurrentStep = () => {
    switch (currentQuestion) {
      case 0:
        return <QuestionForm_0 className={classNames(styles.form, styles.form0)} />;
      case 1:
        return <QuestionForm_1 className={styles.form} />;
      case 2:
        return <QuestionForm_2 className={styles.form} />;
      case 3:
        return (
          <div className={styles.success}>
            <Result status="success" title="操作成功" />
          </div>
        );
      default:
        break;
    }
  };

  const CurrentFooter = () => {
    switch (currentQuestion) {
      case 0:
        return (
          <div>
            <Button
              type="primary"
              onClick={() => {
                setCurrentQuestion(s => s + 1);
              }}
            >
              下一步
            </Button>
          </div>
        );
      case 1:
        return (
          <div>
            <Button
              onClick={() => {
                setCurrentQuestion(s => s - 1);
              }}
            >
              上一步
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setCurrentQuestion(s => s + 1);
              }}
            >
              下一步
            </Button>
          </div>
        );
      case 2:
        return (
          <div>
            <Button
              onClick={() => {
                setCurrentQuestion(s => s - 1);
              }}
            >
              上一步
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setCurrentQuestion(s => s + 1);
              }}
            >
              下一步
            </Button>
          </div>
        );
      case 3:
        return (
          <div>
            <Button
              type="primary"
              onClick={() => {
                setQuestionsModal(false);
              }}
            >
              关闭
            </Button>
          </div>
        );
      default:
        break;
    }
  };

  const data = [
    {
      title: '用户密保问题管理',
      description: '未设置密保问题，密保问题可有效保护帐户安全',
      actions: [
        <>
          <a
            key="Set"
            onClick={() => {
              setQuestionsModal(true);
            }}
          >
            设置
          </a>
          <Modal
            title="用户密保问题修改"
            width={700}
            visible={questionsModal}
            className={styles.questionsModal}
            onCancel={() => {
              setQuestionsModal(false);
            }}
            afterClose={() => {
              setCurrentQuestion(0);
            }}
            footer={<CurrentFooter></CurrentFooter>}
          >
            <div className={styles.content}>
              <Steps current={currentQuestion} size="small">
                <Steps.Step title="验证安全密码" />
                <Steps.Step title="填写新密保问题" />
                <Steps.Step title="确认新密保问题" />
                <Steps.Step title="完成" />
              </Steps>
              <CurrentStep></CurrentStep>
            </div>
          </Modal>
        </>,
      ],
    },
    {
      title: '用户密保手机管理',
      description: '已绑定手机：138****8293',
      actions: [
        <>
          <a
            key="Modify"
            onClick={() => {
              setPhoneModal(true);
            }}
          >
            修改
          </a>
          <CustomModal
            title="用户密保手机修改"
            width={600}
            className={styles.phoneModal}
            visible={phoneModal}
            onCancel={() => {
              setPhoneModal(false);
            }}
          >
            <div>
              <Alert type="error" message="error" showIcon closable></Alert>
              <PhoneForm className={styles.form}></PhoneForm>
            </div>
          </CustomModal>
        </>,
      ],
    },
    {
      title: '用户密保邮箱管理',
      description: '未绑定邮箱',
      actions: [
        <>
          <a
            key="Bind"
            onClick={() => {
              setEmailModal(true);
            }}
          >
            绑定
          </a>
          <CustomModal
            title="用户密保邮箱修改"
            width={600}
            className={styles.emailModal}
            visible={emailModal}
            onCancel={() => {
              setEmailModal(false);
            }}
          >
            <div>
              <Alert type="error" message="error" showIcon closable></Alert>
              <EmailForm className={styles.form}></EmailForm>
            </div>
          </CustomModal>
        </>,
      ],
    },
  ];
  return (
    <List
      dataSource={data}
      renderItem={item => (
        <List.Item actions={item.actions}>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  );
};

// 表单-用户密码管理-登录密码
const LoginForm = Form.create()(({ form, ...props }) => {
  const { getFieldDecorator } = form;

  return (
    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 17 }} {...props}>
      <Form.Item label="原登录密码">
        {getFieldDecorator('原登录密码', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入原登录密码"></Input>)}
      </Form.Item>
      <Form.Item label="新登录密码">
        {getFieldDecorator('新登录密码', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入新登录密码"></Input>)}
      </Form.Item>
      <Form.Item label="新登录密码确认">
        {getFieldDecorator('新登录密码确认', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入新登录密码"></Input>)}
      </Form.Item>
    </Form>
  );
});

// 表单-用户密码管理-安全密码
// todo

// 表单-用户密保管理-密保问题-Setp-0
const QuestionForm_0 = Form.create()(({ form, ...props }) => {
  const { getFieldDecorator } = form;

  return (
    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 17 }} {...props}>
      <Form.Item label="原安全密码">
        {getFieldDecorator('原安全密码', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入原安全密码"></Input>)}
      </Form.Item>
    </Form>
  );
});

// 表单-用户密保管理-密保问题-Setp-1
const QuestionForm_1 = Form.create()(({ form, ...props }) => {
  const { getFieldDecorator } = form;

  return (
    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 17 }} {...props}>
      <Form.Item label="密保问题01">
        {getFieldDecorator('密保问题01', {
          initialValue: '1',
        })(
          <Select>
            <Select.Option value="1">您母亲的生日是？</Select.Option>
          </Select>,
        )}
      </Form.Item>
      <Form.Item label="密保答案01">
        {getFieldDecorator('密保答案01', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入密保答案"></Input>)}
      </Form.Item>
      <Form.Item label="密保问题02">
        {getFieldDecorator('密保问题02', {
          initialValue: '1',
        })(
          <Select>
            <Select.Option value="1">您父亲的生日是？</Select.Option>
          </Select>,
        )}
      </Form.Item>
      <Form.Item label="密保答案02">
        {getFieldDecorator('密保答案02', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入密保答案"></Input>)}
      </Form.Item>
      <Form.Item label="密保问题03">
        {getFieldDecorator('密保问题03', {
          initialValue: '1',
        })(
          <Select>
            <Select.Option value="1">您配偶的生日是？</Select.Option>
          </Select>,
        )}
      </Form.Item>
      <Form.Item label="密保答案03">
        {getFieldDecorator('密保答案03', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入密保答案"></Input>)}
      </Form.Item>
    </Form>
  );
});
// 表单-用户密保管理-密保问题-Setp-2
const QuestionForm_2 = Form.create()(({ form, ...props }) => {
  const { getFieldDecorator } = form;

  return (
    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 17 }} {...props}>
      <Form.Item label="密保问题01">
        <span>您母亲的生日是？</span>
      </Form.Item>
      <Form.Item label="密保答案01">
        {getFieldDecorator('密保答案01', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入密保答案"></Input>)}
      </Form.Item>
      <Form.Item label="密保问题02">
        <span>您父亲的生日是？</span>
      </Form.Item>
      <Form.Item label="密保答案02">
        {getFieldDecorator('密保答案02', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入密保答案"></Input>)}
      </Form.Item>
      <Form.Item label="密保问题03">
        <span>您配偶的生日是？</span>
      </Form.Item>
      <Form.Item label="密保答案03">
        {getFieldDecorator('密保答案03', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入密保答案"></Input>)}
      </Form.Item>
    </Form>
  );
});

// 表单-用户密保管理-密保手机
const PhoneForm = Form.create()(({ form, ...props }) => {
  const { getFieldDecorator } = form;

  return (
    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 17 }} {...props}>
      <Form.Item label="安全密码">
        {getFieldDecorator('安全密码', {
          rules: [
            {
              required: true,
            },
          ],
        })(<SafeNumberInput></SafeNumberInput>)}
      </Form.Item>
      <Form.Item label="新手机帐号">
        {getFieldDecorator('新手机帐号', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入新手机账号"></Input>)}
      </Form.Item>
      <Form.Item label="新手机验证码">
        {getFieldDecorator('新手机验证码', {
          rules: [
            {
              required: true,
            },
          ],
        })(
          <div className={styles.verify}>
            <Input className={styles.input} placeholder="请输入验证码"></Input>
            <CountDownButton type="primary" className={styles.btn}>
              获取验证码
            </CountDownButton>
          </div>,
        )}
      </Form.Item>
    </Form>
  );
});

// 表单-用户密保管理-密保邮箱
const EmailForm = Form.create()(({ form, ...props }) => {
  const { getFieldDecorator } = form;

  return (
    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 17 }} {...props}>
      <Form.Item label="安全密码">
        {getFieldDecorator('安全密码', {
          rules: [
            {
              required: true,
            },
          ],
        })(<SafeNumberInput></SafeNumberInput>)}
      </Form.Item>
      <Form.Item label="新邮箱帐号">
        {getFieldDecorator('新邮箱帐号', {
          rules: [
            {
              required: true,
            },
          ],
        })(<Input placeholder="请输入新邮箱账号"></Input>)}
      </Form.Item>
      <Form.Item label="新邮箱验证码">
        {getFieldDecorator('新邮箱验证码', {
          rules: [
            {
              required: true,
            },
          ],
        })(
          <div className={styles.verify}>
            <Input className={styles.input} placeholder="请输入验证码"></Input>
            <CountDownButton type="primary" className={styles.btn}>
              获取验证码
            </CountDownButton>
          </div>,
        )}
      </Form.Item>
    </Form>
  );
});

// 倒计时按钮
const CountDownButton = ({ className, children, onClick, ...props }) => {
  const [counting, setCounting] = useState(false);
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (counting) {
      const countdown = setTimeout(() => {
        if (time > 0) {
          setTime(s => s - 1);
        } else {
          setCounting(false);
        }
      }, 1000);
      return () => clearTimeout(countdown);
    }
  }, [time, counting]);

  return counting ? (
    <Button className={className} disabled>
      {time}s
    </Button>
  ) : (
    <Button
      onClick={() => {
        if (onClick) onClick();
        setCounting(true);
      }}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};
