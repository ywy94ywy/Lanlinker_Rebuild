/**
 * @module 用户密保管理
 * @author DesYang
 * @todo 待优化
 */
import { useState, useRef } from 'react';
import ListWrapper from './ListWrapper';
import { CustomForm, CustomButton } from 'lanlinker';
import { Alert, Button, Steps, Result } from 'antd';
import classNames from 'classnames';
import { questionForm0, questionForm1, questionForm2 } from '../forms/questions';
import phoneForm from '../forms/phone';
import emailForm from '../forms/email';
import styles from '../style.less';

export default () => {
  const [questionsModal, setQuestionsModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const phoneFormRef = useRef();

  const CurrentStep = () => {
    switch (currentQuestion) {
      case 0:
        return (
          <CustomForm
            data={questionForm0()}
            labelCol={{ span: 7 }}
            layout="inline"
            className={classNames(styles.form, styles.form0)}
          />
        );
      case 1:
        return (
          <CustomForm
            data={questionForm1()}
            layout="inline"
            labelCol={{ span: 7 }}
            className={styles.form}
          />
        );
      case 2:
        return (
          <CustomForm
            data={questionForm2()}
            layout="inline"
            labelCol={{ span: 7 }}
            className={styles.form}
          />
        );
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
        <CustomButton.Modal
          type="a"
          text="设置"
          buttonProps={{
            onClick() {
              setQuestionsModal(true);
            },
          }}
          modalProps={{
            title: '用户密保问题修改',
            className: styles.questionsModal,
            visible: questionsModal,
            width: 700,
            footer: <CurrentFooter />,
            onCancel() {
              setQuestionsModal(false);
            },
            afterClose() {
              setCurrentQuestion(0);
            },
            onOk() {
              phoneFormRef.current.validateFields((err, value) => {
                console.log(err, value);
              });
            },
          }}
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
        </CustomButton.Modal>,
      ],
    },
    {
      title: '用户密保手机管理',
      description: '已绑定手机：138****8293',
      actions: [
        <CustomButton.Modal
          type="a"
          text="修改"
          modalProps={{
            title: '用户密保手机修改',
            width: 600,
            onOk() {
              phoneFormRef.current.validateFields((err, value) => {
                console.log(err, value);
              });
            },
          }}
        >
          <Alert type="error" message="error" showIcon closable></Alert>
          <CustomForm
            data={phoneForm()}
            ref={phoneFormRef}
            className={styles.formlayout}
            labelCol={{ span: 7 }}
            layout="inline"
          ></CustomForm>
        </CustomButton.Modal>,
      ],
    },
    {
      title: '用户密保邮箱管理',
      description: '未绑定邮箱',
      actions: [
        <CustomButton.Modal
          type="a"
          text="绑定"
          modalProps={{
            title: '用户密保邮箱修改',
            width: 600,
            onOk() {},
          }}
        >
          <Alert type="error" message="error" showIcon closable></Alert>
          <CustomForm
            data={emailForm()}
            className={styles.formlayout}
            labelCol={{ span: 7 }}
            layout="inline"
          ></CustomForm>
        </CustomButton.Modal>,
      ],
    },
  ];

  return <ListWrapper data={data} />;
};
