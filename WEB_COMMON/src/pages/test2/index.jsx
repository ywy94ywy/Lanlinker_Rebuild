import React, { useState } from 'react'
import {
  PageHeaderWrapper,
  CustomTable,
  CustomCardTabs,
  CustomModal,
  CustomCard,
} from '@/'
import { Card, Button, Tabs, Row } from 'antd'

export default () => {
  return (
    <PageHeaderWrapper>
      {/* <Card>
        <CustomTable
          columns={columns}
          dataSource={data}
          // scroll={{ x: 1300 }}
          // actions={{
          //   left: (
          //     <>
          //       <Button>新增</Button>
          //       <Button>新增</Button>
          //       <Button>新增</Button>
          //     </>
          //   ),
          //   right: (
          //     <>
          //       <Button>新增</Button>
          //       <Button>新增</Button>
          //       <Button>新增</Button>
          //     </>
          //   ),
          // }}
          // alert={<div>123</div>}
        />
        <ButtonModal
          buttonProps={{
            text: '新增',
            type: 'primary',
          }}
          modalProps={{}}
        >
          123
        </ButtonModal>
      </Card> */}
      <Row type='flex' justify='space-between'>
        <div style={{ flex: 1 }}>
          <CustomCard title='123' extra={<Button>Extra Action</Button>}>
            <div>123</div>
          </CustomCard>
        </div>
        <div style={{ flex: 1 }}>
          <Card
            title='123'
            extra={<Button>Extra Action</Button>}
          >
            <div>123</div>
          </Card>
        </div>
        <div style={{ flex: 1 }}>
          <CustomCardTabs gl tabBarExtraContent={<Button>Extra Action</Button>}>
            <CustomCardTabs.TabPane tab='鞍山市' key='1'>
              hello world
            </CustomCardTabs.TabPane>
            <CustomCardTabs.TabPane tab='放散阀' key='2'>
              hello world
            </CustomCardTabs.TabPane>
            <CustomCardTabs.TabPane tab='刚是啊' key='3'>
              hello world
            </CustomCardTabs.TabPane>
          </CustomCardTabs>
        </div>
      </Row>
    </PageHeaderWrapper>
  )
}

const ButtonModal = ({
  buttonProps: { text = '', ...buttonRest } = {},
  modalProps,
  children,
}) => {
  const [state, setState] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setState(true)
        }}
        {...buttonRest}
      >
        {text}
      </Button>
      <CustomModal
        visible={state}
        onCancel={() => {
          setState(false)
        }}
        {...modalProps}
      >
        {children}
      </CustomModal>
    </>
  )
}

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  }
  if (index === 3) {
    obj.props.colSpan = 0
  }
  return obj
}

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    render: (text, row, index) => {
      if (index < 3) {
        return <a>{text}</a>
      }
      return {
        children: <a>{text}</a>,
        props: {
          colSpan: 3,
        },
      }
    },
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    render: renderContent,
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    render: renderContent,
  },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
  {
    key: '3',
    name: 'Jim Green2',
    age: 40,
    address: 'London Park',
  },
  {
    key: 'b',
    name: 'Jim Green3',
    age: 40,
    address: 'London Park',
  },
]
