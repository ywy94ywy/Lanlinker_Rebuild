import React from 'react'
import { PageHeaderWrapper, SearchTree, CustomCard } from '@/'
import { Tree, Icon, Tabs } from 'antd'

const { TreeNode } = Tree
const fakeTree = [
  {
    id: '1',
    name: '123',
    children: [
      {
        id: '2',
        name: '22asfffffffffffffffffffffff2',
        children: [
          {
            id: '3',
            name: '333',
          },
          {
            id: '4',
            name: '333',
          },
          {
            id: '5',
            name: '333',
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
  },
  {
    id: '111',
    name: '1111',
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
        <Tabs>
          <Tabs.TabPane tab='1' key='1'>
            <SearchTree
              data={fakeTree}
              style={{ height: '300px' }}
            ></SearchTree>
          </Tabs.TabPane>
          <Tabs.TabPane tab='2' key='2'></Tabs.TabPane>
        </Tabs>
      </CustomCard>
    </PageHeaderWrapper>
  )
}

export default index
