import React, { useState } from 'react';
import styles from './style.less';
import { router } from 'umi';
import { Row, Button, Checkbox, Input, Icon } from 'antd';
import code from './code.png';
import logo from './logo.png';

const login = () => {
  const [state, setState] = useState('account');

  return (
    <div className={styles.login}>
      <header>
        <img src={logo} alt="logo"></img>
      </header>
      <section>
        <div className={styles.panel}>
          <div className={styles.wrapper}>
            {state === 'account' && (
              <>
                <Row type="flex" justify="space-between" className={styles.title}>
                  <div>账号登录</div>
                  <div
                    className={styles.switch}
                    onClick={() => {
                      setState('scan');
                    }}
                  >
                    扫码登录
                  </div>
                </Row>
                <div>
                  <Input prefix={<Icon type="user" />} placeholder="请输入昵称/手机/邮箱数字帐号" />
                </div>
                <div>
                  <Input.Password prefix={<Icon type="lock" />} placeholder="请输入密码" />
                </div>
                <div>
                  <Checkbox>记住密码</Checkbox>
                </div>
                <div>
                  <Button
                    type="primary"
                    block
                    onClick={() => {
                      router.push('/home');
                    }}
                  >
                    登录
                  </Button>
                </div>
                <Row type="flex" justify="space-between" className={styles.footer}>
                  <div>忘记密码</div>
                  <div>注册账户</div>
                </Row>
              </>
            )}
            {state === 'scan' && (
              <>
                <Row type="flex" justify="space-between" className={styles.title}>
                  <div>微信扫码登录</div>
                  <div
                    className={styles.switch}
                    onClick={() => {
                      setState('account');
                    }}
                  >
                    账户登录
                  </div>
                </Row>
                <div className={styles.qrCode}>
                  <img src={code} alt="" />
                  <div className={styles.scanText}>
                    <Icon type="scan"></Icon>
                    <section>
                      <div>打开&nbsp;微信APP</div>
                      <div>扫一扫登录</div>
                    </section>
                  </div>
                </div>
                <Row type="flex" justify="space-between" className={styles.footer}>
                  <div>忘记密码</div>
                  <div>注册账户</div>
                </Row>
              </>
            )}
          </div>
        </div>
      </section>
      <footer>
        <div>版权所有 © 蓝瓴信息科技(上海)有限公司 沪ICP备17029861号-1</div>
        <div>Copyright © Lanling information technology (Shanghai) Co., Ltd. hcpb17029861-1</div>
      </footer>
    </div>
  );
};

export default login;
