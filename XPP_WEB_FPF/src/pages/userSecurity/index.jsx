/**
 * @module 用户安全管理
 * @author DesYang
 */
import { useState, useRef } from 'react';
import { PageHeaderWrapper, ConfigForm } from 'lanlinker';
import { Card, Row, Col, Menu, Modal, Alert, Form, Input, Steps, List } from 'antd';
import styles from './style.less';
import loginPasswordForm from './loginPasswordForm';
import safePasswordForm from './safePasswordForm';

const { Item } = Menu;

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱</span>,
};

const menuList = ['用户密码管理', '用户密保管理'];

export default () => {
  const [selectKey, setSelectKey] = useState('0');

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

const getMenu = menuList => menuList.map((item, index) => <Item key={index}>{item}</Item>);

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
  const data = [
    {
      title: '用户登录密码管理',
      description: <>当前密码强度：{passwordStrength.strong}</>,
      actions: [<a key="Modify">修改</a>],
    },
    {
      title: '用户安全密码管理',
      description: '安全密码限定6位字符',
      actions: [<a key="Reset">重置</a>],
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
  const data = [
    {
      title: '用户密保问题管理',
      description: '未设置密保问题，密保问题可有效保护帐户安全',
      actions: [<a key="Set">设置</a>],
    },
    {
      title: '用户密保手机管理',
      description: '已绑定手机：138****8293',
      actions: [<a key="Modify">修改</a>],
    },
    {
      title: '用户密保邮箱管理',
      description: '未绑定邮箱',
      actions: [<a key="Bind">绑定</a>],
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

// const Pages = ({ page = 0 }) => {
//   switch (page) {
//     case 0:
//       const a = 1;
//       const b = 2;
//       return (
//         <PageWrapper page={page}>
//           <ManageCard
//             title="用户登录密码管理"
//             subtitle="当前密码强度："
//             strength
//             option="修改"
//             modalTitle="用户登录密码修改"
//             modalContent={
//               <div>
//                 <ConfigForm width={450} inline data={loginPasswordForm()}></ConfigForm>
//               </div>
//             }
//             onOk={() => {
//               console.log(a);
//             }}
//           ></ManageCard>
//           <ManageCard
//             title="用户安全密码管理"
//             subtitle="安全密码限定6位字符"
//             option="修改"
//             modalTitle="用户登录密码修改"
//             modalContent={
//               <div>
//                 <ConfigForm width={450} inline data={safePasswordForm()}></ConfigForm>
//               </div>
//             }
//             onOk={() => {
//               console.log(b);
//             }}
//           ></ManageCard>
//         </PageWrapper>
//       );
//     case 1:
//       return (
//         <PageWrapper page={page}>
//           <ManageCard
//             title="用户密保问题管理"
//             subtitle="未设置密保问题，密保问题可有效保护帐户安全"
//             option="设置"
//             modalTitle="用户密保问题修改"
//             modalContent={
//               <div>
//                 <Steps current={1} size="small">
//                   <Steps.Step title="验证安全密码" />
//                   <Steps.Step title="填写新密保问题" />
//                   <Steps.Step title="确认新密保问题" />
//                   <Steps.Step title="完成" />
//                 </Steps>
//                 123
//               </div>
//             }
//             onOk={() => {
//               console.log(b);
//             }}
//           ></ManageCard>
//           <ManageCard
//             title="用户密保手机管理"
//             subtitle="已绑定手机：138****8293"
//             option="修改"
//           ></ManageCard>
//           <ManageCard title="用户密保邮箱管理" subtitle="未绑定邮箱" option="绑定"></ManageCard>
//         </PageWrapper>
//       );
//     default:
//       return null;
//   }
// };

// const PageWrapper = ({ children, page }) => {
//   return (
//     <div className={style.management}>
//       <h3>{menuList[page]}</h3>
//       {children}
//     </div>
//   );
// };

// const ManageCard = ({ title, subtitle, option, strength, modalTitle, modalContent, onOk }) => {
//   const [modal, setModal] = useState(false);
//   return (
//     <div className={style.manageCard}>
//       <h5>{title}</h5>
//       {subtitle && (
//         <Row type="flex" justify="space-between">
//           <Col>
//             <span className="tba2">
//               {subtitle} <span className={style.strong}>{strength && '强'}</span>
//             </span>
//           </Col>
//           <Col>
//             <a
//               href="#"
//               onClick={e => {
//                 e.preventDefault();
//                 setModal(true);
//               }}
//             >
//               {option}
//             </a>
//           </Col>
//         </Row>
//       )}
//       <MyModal
//         title={modalTitle}
//         visible={modal}
//         onOk={onOk}
//         width={730}
//         onCancel={() => {
//           setModal(false);
//         }}
//       >
//         {/* <Alert message="Error" type="error" showIcon closable></Alert> */}
//         {modalContent}
//       </MyModal>
//     </div>
//   );
// };

// 所有modal封装
// const MyModal = ({ children, ...rest }) => {
//   return (
//     <Modal {...rest} cancelText="取消" okText="确定">
//       {children}
//     </Modal>
//   );
// };
