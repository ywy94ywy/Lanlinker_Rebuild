import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import themePluginConfig from './themePluginConfig';
const { pwa } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

if (isAntDesignProPreview) {
  // 针对 preview.pro.ant.design 的 GA 统计代码
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push(['umi-plugin-antd-theme', themePluginConfig]);
}

export default {
  plugins,
  hash: true,
  targets: {
    ie: 11,
  },
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/login',
      component: './login',
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/home',
          component: './home',
        },
        {
          path: '/manual',
          component: './manual',
        },
        {
          path: '/userInfo',
          component: './userInfo',
        },
        {
          path: '/userSecurity',
          component: './userSecurity',
        },
        {
          path: '/userAuth',
          component: './userAuth',
        },
        {
          path: '/userOrganization',
          component: './userOrganization',
        },
        {
          path: '/userLicense',
          component: './userLicense',
        },
        {
          path: '/xpphome',
          component: './XPP_BFP/home',
        },
        {
          path: '/xppmanual',
          component: './XPP_BFP/manual',
        },
        {
          path: '/xppuser',
          component: './XPP_BFP/user',
        },
        {
          path: '/xppmodule',
          component: './XPP_BFP/module',
        },
        {
          path: '/xppauth',
          component: './XPP_BFP/auth',
        },
        {
          path: '/xpplicense',
          component: './XPP_BFP/license',
        },
        {
          path: '/lrmHome',
          component: './LRM/home',
        },
        {
          path: '/lrmManual',
          component: './LRM/manual',
        },
        {
          path: '/lrmProject',
          component: './LRM/project',
        },
        {
          path: '/lrmregister',
          component: './LRM/register',
        },
        {
          path: '/lrmcontract',
          component: './LRM/contract',
        },
        {
          path: '/lrmcard',
          component: './LRM/card',
        },
        {
          path: '/lrmstaffinfo',
          component: './LRM/staffInfo',
        },
        {
          path: '/lrmtrain',
          component: './LRM/train',
        },
        {
          path: '/lrmattendance',
          component: './LRM/attendance',
        },
        {
          path: '/lrmsalary',
          component: './LRM/salary',
        },
        {
          path: '/lrmpersonnel',
          component: './LRM/personnel',
        },
        {
          path: '/lrmswiping',
          component: './LRM/swiping',
        },
        {
          path: '/lrmcheck',
          component: './LRM/check',
        },
        {
          path: '/lrmpost',
          component: './LRM/post',
        },
        {
          path: '/lrmviolation',
          component: './LRM/violation',
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  }, // chainWebpack: webpackPlugin,
  // proxy: {
  //   '/server/api/': {
  //     target: 'https://preview.pro.ant.design/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/server': '' },
  //   },
  // },
};
