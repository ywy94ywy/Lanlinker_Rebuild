import React from 'react'
import { PageHeaderWrapper, SearchTree } from '@/'
import { Tree, Icon } from 'antd'

const { TreeNode } = Tree
const fakeTree = [
  {
    id: '1',
    name: '123',
    children: [
      {
        id: '2',
        name: '222',
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
      <SearchTree data={fakeTree}></SearchTree>
      <Tree
        showLine
        defaultExpandedKeys={['0-0-0']}
        switcherIcon={<Icon type='down' />}
        // onSelect={this.onSelect}
        className='hide-file-icon'
      >
        <TreeNode title='parent 1' key='0-0'>
          <TreeNode title='parent 1-0' key='0-0-0'>
            <TreeNode title='leaf' key='0-0-0-0' />
            <TreeNode title='leaf' key='0-0-0-1' />
            <TreeNode title='leaf' key='0-0-0-2' />
          </TreeNode>
          <TreeNode title='parent 1-1' key='0-0-1'>
            <TreeNode title='leaf' key='0-0-1-0' />
          </TreeNode>
          <TreeNode title='parent 1-2' key='0-0-2'>
            <TreeNode title='leaf' key='0-0-2-0' />
            <TreeNode title='leaf' key='0-0-2-1' />
          </TreeNode>
        </TreeNode>
      </Tree>
    </PageHeaderWrapper>
  )
}

export default index
