import path from 'path'
export default {
  routes: [
    {
      path: '/',
      component: './',
      routes: [
        {
          path: '/test222',
          component: './test2',
          key: 'test222',
        },
        {
          path: '/test333',
          component: './test3',
          key: 'test333',
        },
        {
          path: '/test444',
          component: './test4',
          key: 'test444',
        },
        {
          component: './404',
        },
      ],
    },
  ],
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  treeShaking: true,
  targets: {
    ie: 11,
  },
}
