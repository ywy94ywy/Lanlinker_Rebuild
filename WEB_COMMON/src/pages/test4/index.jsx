import React from 'react'
import { PageHeaderWrapper, SearchTree, CustomCard } from '@/'
import { Menu } from 'antd'

const fakeTree = [
  {
    // id: '1',
    // name: '123',
    // icon: 'skin',
    children: [
      {
        id: '2',
        name: '22asfffffffffffffffffffffff2',
        children: [
          {
            id: '3',
            name: '333',
            icon: 'skin',
          },
          {
            id: '4',
            name: '333',
            icon: 'skin',
          },
          {
            id: '5',
            name: '333',
            icon: 'skin',
          },
          {
            id: '6',
            name: '333',
          },
        ],
      },
      {
        id: '22',
        name: '222',
      },
    ],
  },
  {
    id: '11',
    name: '1111',
    children: [
      {
        id: '222',
        name: 'dsafg',
        children: [
          {
            id: '222df',
            name: '按阿萨德刚收到施工方',
          },
          {
            id: '222df4',
            name: '按阿萨德刚收到施工方',
          },
          {
            id: '222df5',
            name: '按阿萨德刚收到施工方',
          },
        ],
      },
      {
        id: '222dfg5',
        name: '按阿萨德刚收到施工方',
      },
      {
        id: '222ssdfg5',
        name: '按阿萨德刚收到施工方',
      },
    ],
  },
  {
    id: '111',
    name: '1111',
    children: [
      {
        id: '2dfg2',
        name: 'dsafg',
        children: [
          {
            id: 'sdgashsdh',
            name: '按阿萨德刚收到施工方',
          },
        ],
      },
    ],
  },
  {
    id: '1111',
    name: '1111',
  },
  {
    id: '11112',
    name: '1111',
  },
]

const index = () => {
  return (
    <PageHeaderWrapper>
      <CustomCard title='1231' style={{ width: '250px' }}>
        <SearchTree
          data={fakeTree}
          titleName='name'
          style={{ height: 400 }}
          // rightClickMenu={e => {
          //   return (
          //     <Menu>
          //       <Menu.Item
          //         onClick={() => {
          //           console.log(e)
          //         }}
          //       >
          //         1
          //       </Menu.Item>
          //       <Menu.Item
          //         onClick={() => {
          //           console.log(e)
          //         }}
          //       >
          //         2
          //       </Menu.Item>
          //     </Menu>
          //   )
          // }}
          // rightClickMenuId='test'
        ></SearchTree>
      </CustomCard>
    </PageHeaderWrapper>
  )
}

export default index
