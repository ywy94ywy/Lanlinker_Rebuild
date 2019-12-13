import 'antd/lib/result/style';
import _Result from 'antd/lib/result';
import 'antd/lib/spin/style';
import _Spin from 'antd/lib/spin';
import React, { useState, useEffect, useMemo, Fragment } from 'react';
import { BasicLayout, PageHeaderWrapper } from '@ant-design/pro-layout';
import Link from 'umi/link';
import 'antd/lib/dropdown/style';
import _Dropdown from 'antd/lib/dropdown';
import 'antd/lib/avatar/style';
import _Avatar from 'antd/lib/avatar';
import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';
import 'antd/lib/radio/style';
import _Radio from 'antd/lib/radio';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/list/style';
import _List from 'antd/lib/list';
import 'antd/lib/badge/style';
import _Badge from 'antd/lib/badge';
import 'antd/lib/tabs/style';
import _Tabs from 'antd/lib/tabs';
import 'antd/lib/card/style';
import _Card from 'antd/lib/card';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".src-layouts-BasicLayout-_themeWrapper_rmGOJ {\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ > .src-layouts-BasicLayout-_bg_2V2Ya {\n  width: 100%;\n  height: 100%;\n  background: var(--background, #1c1f87);\n  background-size: cover;\n  position: absolute;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ > .src-layouts-BasicLayout-_basicLayout_3F4zu {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  position: absolute;\n  z-index: 1;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ > .src-layouts-BasicLayout-_basicLayout_3F4zu .src-layouts-BasicLayout-_headerContent_17Fm9 {\n  color: rgba(255, 255, 255, 0.85);\n  display: -webkit-box;\n  display: flex;\n  font-size: var(--fontSize, 14px);\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ > .src-layouts-BasicLayout-_basicLayout_3F4zu .src-layouts-BasicLayout-_headerContent_17Fm9 i {\n  font-size: calc(var(--fontSize, 14px) + 2px);\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ > .src-layouts-BasicLayout-_basicLayout_3F4zu .src-layouts-BasicLayout-_headerContent_17Fm9 > .src-layouts-BasicLayout-_left_2N7uz {\n  width: 300px;\n  margin-left: 4px;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ > .src-layouts-BasicLayout-_basicLayout_3F4zu .src-layouts-BasicLayout-_headerContent_17Fm9 > .src-layouts-BasicLayout-_middle_2bkvy {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ > .src-layouts-BasicLayout-_basicLayout_3F4zu .src-layouts-BasicLayout-_headerContent_17Fm9 > .src-layouts-BasicLayout-_right_MHag- {\n  width: 200px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-right: 14px;\n  margin-left: auto;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider {\n  background: transparent;\n  height: auto !important;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider {\n  background: transparent;\n  box-shadow: none;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu-logo {\n  background: transparent;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu {\n  padding: 0 !important;\n  background: transparent;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-inline {\n  background: transparent;\n  box-shadow: none;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-submenu-title,\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-item {\n  margin: 0;\n  font-size: var(--fontSize, 14px);\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-submenu-title i,\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-item i {\n  font-size: var(--fontSize, 14px);\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-submenu-open > .ant-menu-submenu-title {\n  background: rgba(255, 255, 255, 0.15);\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu > .ant-menu-submenu > .ant-menu-submenu-title {\n  height: 60px;\n  line-height: 60px;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-item-selected {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-layout {\n  min-height: 100vh;\n  background: transparent;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-layout > .ant-layout-header {\n  background: transparent;\n}\n.src-layouts-BasicLayout-_themeWrapper_rmGOJ .ant-layout-has-sider > .ant-layout > .ant-layout-content {\n  background: #f0f2f5;\n}\n";
var style = {"themeWrapper":"src-layouts-BasicLayout-_themeWrapper_rmGOJ","bg":"src-layouts-BasicLayout-_bg_2V2Ya","basicLayout":"src-layouts-BasicLayout-_basicLayout_3F4zu","headerContent":"src-layouts-BasicLayout-_headerContent_17Fm9","left":"src-layouts-BasicLayout-_left_2N7uz","middle":"src-layouts-BasicLayout-_middle_2bkvy","right":"src-layouts-BasicLayout-_right_MHag-"};
styleInject(css);

var breadcrumb = {};

var MenuBreadcrumb = function MenuBreadcrumb(menu) {
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  menu.forEach(function (v) {
    var breadcrumbList = [].concat(_toConsumableArray(arr), [{
      breadcrumbName: v.name
    }]);

    if (v.children) {
      MenuBreadcrumb(v.children, breadcrumbList);
    } else {
      breadcrumb[v.path] = breadcrumbList;
    }
  });
  return breadcrumb;
};

var authRoutes = []; // 权限路由
// 获取antd-pro扁平化菜单keys和path

var getFlatMenuKeys = function getFlatMenuKeys(menuData) {
  var keys = [];
  menuData.forEach(function (item) {
    if (!item) {
      return;
    }

    keys.push(item.path);

    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    } else {
      authRoutes.push(item.path);
    }
  });
  return keys;
};

var index = (function (_ref) {
  var children = _ref.children,
      _ref$menuData = _ref.menuData,
      menuData = _ref$menuData === void 0 ? [] : _ref$menuData,
      _ref$leftContent = _ref.leftContent,
      leftContent = _ref$leftContent === void 0 ? null : _ref$leftContent,
      _ref$middleContent = _ref.middleContent,
      middleContent = _ref$middleContent === void 0 ? null : _ref$middleContent,
      _ref$rightContent = _ref.rightContent,
      rightContent = _ref$rightContent === void 0 ? null : _ref$rightContent,
      location = _ref.location,
      props = _objectWithoutProperties(_ref, ["children", "menuData", "leftContent", "middleContent", "rightContent", "location"]);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      openKeys = _useState2[0],
      setOpenKeys = _useState2[1];

  useEffect(function () {
    setOpenKeys(getFlatMenuKeys(menuData)); // 初始菜单全部展开
  }, [menuData]);
  useMemo(function () {
    return MenuBreadcrumb(menuData);
  }, [menuData]);
  return React.createElement("div", {
    className: style.themeWrapper
  }, React.createElement("div", {
    className: style.bg
  }), React.createElement(BasicLayout, _extends({
    className: style.basicLayout,
    collapsed: false,
    onCollapse: false,
    fixSiderbar: false,
    headerRender: function headerRender() {
      return React.createElement("div", {
        className: style.headerContent
      }, React.createElement("div", {
        className: style.left
      }, leftContent), React.createElement("div", {
        className: style.middle
      }, middleContent), React.createElement("div", {
        className: style.right
      }, rightContent));
    } // 菜单数据
    ,
    menuDataRender: function menuDataRender() {
      return menuData;
    } // 菜单渲染
    ,
    menuItemRender: function menuItemRender(menuItemProps, defaultDom) {
      if (menuItemProps.isUrl || menuItemProps.children) {
        return defaultDom;
      }

      return React.createElement(Link, {
        to: menuItemProps.path
      }, defaultDom);
    } // 菜单展开控制
    ,
    menuProps: {
      openKeys: openKeys,
      onOpenChange: function onOpenChange(e) {
        setOpenKeys(e);
      }
    } // 面包屑数据
    ,
    breadcrumbRender: function breadcrumbRender() {
      var routers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (routers[0]) {
        var path = breadcrumb[routers[0].path] || [];
        return _toConsumableArray(path);
      }
    } // 面包屑渲染
    ,
    itemRender: function itemRender(route) {
      return React.createElement("span", null, route.breadcrumbName);
    } // siderWidth={230}
    ,
    disableMobile: true,
    disableContentMargin: true
  }, props), React.createElement(Auth, {
    pathname: location.pathname
  }, children)));
}); // 权限控制(只有返回菜单对应的路由有权限访问)

var Auth = function Auth(_ref2) {
  var children = _ref2.children,
      pathname = _ref2.pathname;
  if (authRoutes.length === 0) return React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: '200px'
    }
  }, React.createElement(_Spin, {
    size: "large"
  }));
  if (authRoutes.includes(pathname)) return children;
  return React.createElement(_Result, {
    status: "404",
    title: "404",
    subTitle: "Sorry, not found this page."
  });
};

var index$1 = (function (_ref) {
  var children = _ref.children,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["children", "style"]);

  return React.createElement(PageHeaderWrapper, _extends({
    style: _objectSpread2({
      margin: '0'
    }, style)
  }, props), children);
});

var css$1 = ".src-components-UserMenu-_userMenu_21mks {\n  padding: 0 10px;\n  color: rgba(255, 255, 255, 0.65);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.src-components-UserMenu-_userMenu_21mks:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.src-components-UserMenu-_userMenu_21mks:hover {\n  color: #fff;\n}\n.src-components-UserMenu-_userMenu_21mks .src-components-UserMenu-_user_3_bwN {\n  margin-left: 10px;\n}\n";
var style$1 = {"userMenu":"src-components-UserMenu-_userMenu_21mks","user":"src-components-UserMenu-_user_3_bwN"};
styleInject(css$1);

var index$2 = (function (_ref) {
  var _ref$user = _ref.user,
      user = _ref$user === void 0 ? null : _ref$user,
      _ref$logout = _ref.logout,
      logout = _ref$logout === void 0 ? null : _ref$logout,
      _ref$systems = _ref.systems,
      systems = _ref$systems === void 0 ? [] : _ref$systems;
  return user ? React.createElement(_Dropdown, {
    overlay: React.createElement(_Menu, null, systems.map(function (v, i) {
      return React.createElement(_Menu.Item, {
        key: i,
        onClick: function onClick() {
          window.location.href = v.url || '/';
        }
      }, v.title);
    }), React.createElement(_Menu.Item, {
      onClick: function onClick() {
        logout && logout();
      }
    }, "\u9000\u51FA\u7CFB\u7EDF"))
  }, React.createElement("div", {
    className: style$1.userMenu
  }, React.createElement(_Avatar, {
    size: 25,
    src: user.avatar,
    icon: "user"
  }), React.createElement("span", {
    className: style$1.user
  }, user.name))) : null;
});

var css$2 = ".src-components-SwitchTheme-_switchTheme_2NlmH {\n  width: 40px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-SwitchTheme-_switchTheme_2NlmH:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.src-components-SwitchTheme-_themePanel_lS4sL {\n  width: 350px;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U {\n  padding: 8px 0;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_title_ih_Lm {\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 16px;\n  padding-left: 16px;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_fontList_3BbaH {\n  padding: 16px 40px;\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 1px solid #e8e8e8;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_fontList_3BbaH > label:nth-child(n + 2) {\n  margin-left: 30px;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_bgList_2NcxS {\n  padding: 16px 40px;\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 1px solid #e8e8e8;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_bgList_2NcxS:last-child {\n  border-bottom: none;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_bgList_2NcxS .src-components-SwitchTheme-_icon_1YsIK {\n  color: #fff;\n  font-size: 13px;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_bgList_2NcxS .src-components-SwitchTheme-_circle__yMWJ {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_bgList_2NcxS .src-components-SwitchTheme-_rectangle_cSkzQ {\n  width: 60px;\n  height: 40px;\n  background-size: cover;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n";
var style$2 = {"switchTheme":"src-components-SwitchTheme-_switchTheme_2NlmH","themePanel":"src-components-SwitchTheme-_themePanel_lS4sL","wrapper":"src-components-SwitchTheme-_wrapper_2a73U","title":"src-components-SwitchTheme-_title_ih_Lm","fontList":"src-components-SwitchTheme-_fontList_3BbaH","bgList":"src-components-SwitchTheme-_bgList_2NcxS","icon":"src-components-SwitchTheme-_icon_1YsIK","circle":"src-components-SwitchTheme-_circle__yMWJ","rectangle":"src-components-SwitchTheme-_rectangle_cSkzQ"};
styleInject(css$2);

var themeData = {
  fontSize: [{
    title: '小',
    value: '14px'
  }, {
    title: '大',
    value: '16px'
  }],
  background: [{
    title: '纯色主题',
    value: ['#1C1F87', '#DA5E3E', '#7F7F7F', '#1890FF']
  }, {
    title: '渐变主题',
    value: ['linear-gradient(180deg,rgba(127,127,213,1) 0%,rgba(134,168,231,1) 54%,rgba(145,234,228,1) 100%)', 'linear-gradient(180deg,rgba(247,121,125,1) 0%,rgba(251,215,134,1) 54%,rgba(198,255,221,1) 100%)', 'linear-gradient(180deg,rgba(18,194,233,1) 0%,rgba(196,113,237,1) 54%,rgba(247,121,125,1) 100%)', 'linear-gradient(180deg,rgba(247,121,125,1) 0%,rgba(33,150,243,1) 100%)']
  }, {
    title: '建筑系列',
    value: ['url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513608736&di=c8083949ac0dc971a8bf0556cb93984d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110124%2FImg302502020.jpg)', 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146169344&di=a6dd7cd6af61c20c62f234cb4f0e36c4&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F04%2F15%2F39%2F6658229cbcaea80.jpg)', 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146259908&di=9104579817d6f9f287f7e20d818e0c55&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F0p%2Fwi%2FQJ8558834288.jpg)', 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146271272&di=a1184ef63a7a2bcc2028ab33e1cbabf5&imgtype=0&src=http%3A%2F%2Fs1.1zoom.me%2Fbig3%2F888%2FAustralia_Brisbane_Houses_Rivers_Marinas_Night_547316_3000x1772.jpg)']
  }, {
    title: '星空系列',
    value: ['url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146131154&di=5d01edc7f22dbb80afb1d5bb0d3b9a62&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F04%2F46%2F96%2F305857bbd8c3124.jpg)', 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146152273&di=4b2065e28571261f1f6f05d747523ce2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F03871d8582407ada84a0d304f71746f.jpg)', 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146193013&di=4faf2e6597365a347509e64c33adfdb7&imgtype=jpg&src=http%3A%2F%2Fd-iv.com%2Fimages%2F6c310778e2b1776d9585aae2d56c4d5a.jpeg)', 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146224530&di=9baca66d034c9e1c8ae8074203c97f6b&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F48%2F89%2F16488968-f342f3afa79ebe2afa7bd268b2aad066.jpg)']
  }]
}; // 设置css变量

var setTheme = function setTheme(name, value) {
  document.documentElement.style.setProperty(name, value);
}; // 获取css变量


var getTheme = function getTheme(name) {
  return document.documentElement.style.getPropertyValue(name);
};

var defaultTheme = {
  fontSize: themeData.fontSize[0].value,
  background: themeData.background[0].value[0]
};
setTheme('--fontSize', defaultTheme.fontSize);
setTheme('--background', defaultTheme.background);
var index$3 = (function () {
  return React.createElement(_Dropdown, {
    overlayClassName: style$2.themePanel,
    overlay: React.createElement(Content, null),
    trigger: ['click'],
    getPopupContainer: function getPopupContainer(trigger) {
      return trigger.parentNode;
    }
  }, React.createElement("div", {
    className: style$2.switchTheme
  }, React.createElement(_Icon, {
    type: "skin"
  })));
});

var Content = function Content() {
  var fontSize = themeData.fontSize,
      background = themeData.background;

  var _useState = useState(getTheme('--background')),
      _useState2 = _slicedToArray(_useState, 2),
      bg = _useState2[0],
      setBg = _useState2[1];

  return React.createElement("div", {
    className: style$2.wrapper
  }, React.createElement("div", {
    className: style$2.title
  }, "\u5B57\u4F53\u5927\u5C0F"), React.createElement(_Radio.Group, {
    className: style$2.fontList,
    defaultValue: defaultTheme.fontSize
  }, fontSize.map(function (item, index) {
    return React.createElement(_Radio, {
      key: index,
      value: item.value,
      onChange: function onChange() {
        setTheme('--fontSize', item.value);
      }
    }, item.title);
  })), background.slice(0, 2).map(function (item, index) {
    return React.createElement(Fragment, {
      key: index
    }, React.createElement("div", {
      className: style$2.title
    }, item.title), React.createElement("div", {
      className: style$2.bgList
    }, item.value.map(function (v, i) {
      return React.createElement("div", {
        key: i,
        className: style$2.circle,
        style: {
          background: v
        },
        onClick: function onClick() {
          setTheme('--background', v);
          setBg(v);
        }
      }, bg === v && React.createElement(_Icon, {
        type: "check",
        className: style$2.icon
      }));
    })));
  }), background.slice(2).map(function (item, index) {
    return React.createElement(Fragment, {
      key: index
    }, React.createElement("div", {
      className: style$2.title
    }, item.title), React.createElement("div", {
      className: style$2.bgList
    }, item.value.map(function (v, i) {
      return React.createElement("div", {
        key: i,
        className: style$2.rectangle,
        style: {
          backgroundImage: v
        },
        onClick: function onClick() {
          setTheme('--background', v);
          setBg(v);
        }
      }, bg === v && React.createElement(_Icon, {
        type: "check",
        className: style$2.icon
      }));
    })));
  }));
};

var css$3 = ".src-components-Notification-_notification_74A_h {\n  width: 40px;\n  text-align: center;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-Notification-_notification_74A_h:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.src-components-Notification-_notification_74A_h .ant-badge-count {\n  min-width: 16px;\n  height: 16px;\n  line-height: 16px;\n  padding: 0 5px;\n  box-shadow: none;\n  top: -2px;\n  right: -2px;\n}\n.src-components-Notification-_notiPanel_H0MdY {\n  width: 340px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.src-components-Notification-_notiPanel_H0MdY .ant-tabs > .ant-tabs-bar {\n  margin: 0;\n}\n.src-components-Notification-_notiPanel_H0MdY .ant-tabs > .ant-tabs-bar .ant-tabs-nav-scroll {\n  text-align: center;\n}\n.src-components-Notification-_notiPanel_H0MdY .src-components-Notification-_list_1Ojo6 {\n  max-height: 360px;\n  overflow-x: hidden;\n}\n.src-components-Notification-_notiPanel_H0MdY .src-components-Notification-_list_1Ojo6 .src-components-Notification-_empty_3GOE1 {\n  padding: 30px 0;\n}\n.src-components-Notification-_notiPanel_H0MdY .src-components-Notification-_list_1Ojo6 .src-components-Notification-_empty_3GOE1 img {\n  margin-bottom: 20px;\n}\n.src-components-Notification-_notiPanel_H0MdY .src-components-Notification-_list_1Ojo6 .src-components-Notification-_listItem_2d1Ch {\n  padding: 12px 22px 12px 25px;\n}\n.src-components-Notification-_notiPanel_H0MdY .src-components-Notification-_list_1Ojo6 .src-components-Notification-_listItem_2d1Ch:hover {\n  background: #e6f7ff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.src-components-Notification-_notiPanel_H0MdY .src-components-Notification-_list_1Ojo6 .src-components-Notification-_description_27bZD > p {\n  margin: 0;\n}\n.src-components-Notification-_notiPanel_H0MdY .src-components-Notification-_clear_32z2J {\n  height: 60px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-top: 1px solid #e8e8e8;\n  cursor: pointer;\n}\n";
var style$3 = {"notification":"src-components-Notification-_notification_74A_h","notiPanel":"src-components-Notification-_notiPanel_H0MdY","list":"src-components-Notification-_list_1Ojo6","empty":"src-components-Notification-_empty_3GOE1","listItem":"src-components-Notification-_listItem_2d1Ch","description":"src-components-Notification-_description_27bZD","clear":"src-components-Notification-_clear_32z2J"};
styleInject(css$3);

var TabPane = _Tabs.TabPane;
var prompts = [{
  description: '张然  的合同已经到期，请及时处理',
  time: '10分钟前'
}, {
  description: '张然  的合同已经到期，请及时处理',
  time: '10分钟前'
}, {
  description: '张然  的合同已经到期，请及时处理',
  time: '10分钟前'
}, {
  description: '张然  的合同已经到期，请及时处理',
  time: '10分钟前'
}, {
  description: '张然  的合同已经到期，请及时处理',
  time: '10分钟前'
}, {
  description: '张然  的合同已经到期，请及时处理',
  time: '10分钟前'
}, {
  description: '张然  的合同已经到期，请及时处理',
  time: '10分钟前'
}];
var notifications = [{
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  title: '您提交的评价已通过审核',
  name: '赵某人',
  event: '多次违反工地规定，并拒不悔改…',
  time: '5 分钟前'
}, {
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  title: '您提交的评价已通过审核',
  name: '赵某人',
  event: '多次违反工地规定，并拒不悔改…',
  time: '5 分钟前'
}, {
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  title: '您提交的评价已通过审核',
  name: '赵某人',
  event: '多次违反工地规定，并拒不悔改…',
  time: '5 分钟前'
}, {
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  title: '您提交的评价已通过审核',
  name: '赵某人',
  event: '多次违反工地规定，并拒不悔改…',
  time: '5 分钟前'
}];
var index$4 = (function () {
  var _useState = useState(notifications),
      _useState2 = _slicedToArray(_useState, 2),
      noti = _useState2[0],
      setNoti = _useState2[1];

  var _useState3 = useState(prompts),
      _useState4 = _slicedToArray(_useState3, 2),
      pro = _useState4[0],
      setPro = _useState4[1];

  return React.createElement(_Dropdown, {
    overlayClassName: style$3.notiPanel,
    overlay: React.createElement(Content$1, {
      prompts: pro,
      notifications: noti,
      setNotifications: setNoti,
      setPrompts: setPro
    }),
    trigger: ['click'],
    getPopupContainer: function getPopupContainer(trigger) {
      return trigger.parentNode;
    }
  }, React.createElement("div", {
    className: style$3.notification
  }, React.createElement(_Badge, {
    count: noti.length + pro.length
  }, React.createElement(_Icon, {
    type: "bell"
  }))));
});

var Content$1 = function Content(_ref) {
  var notifications = _ref.notifications,
      prompts = _ref.prompts,
      setNotifications = _ref.setNotifications,
      setPrompts = _ref.setPrompts;
  var nl = notifications.length;
  var pl = prompts.length;
  return React.createElement(_Tabs, null, React.createElement(TabPane, {
    tab: "\u901A\u77E5".concat(nl > 0 ? ' (' + nl + ')' : ''),
    key: "1"
  }, React.createElement(_List, {
    className: style$3.list,
    dataSource: notifications,
    locale: {
      emptyText: React.createElement("div", {
        className: style$3.empty
      }, React.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg",
        alt: ""
      }), React.createElement("div", null, "\u60A8\u5DF2\u8BFB\u5B8C\u6240\u6709\u6D88\u606F"))
    },
    renderItem: function renderItem(item) {
      return React.createElement(_List.Item, {
        className: style$3.listItem
      }, React.createElement(_List.Item.Meta, {
        avatar: React.createElement(_Avatar, {
          src: item.avatar
        }),
        title: item.title,
        description: React.createElement("div", {
          className: style$3.description
        }, React.createElement("p", null, "\u59D3\u540D\uFF1A", item.name), React.createElement("p", null, "\u4E8B\u4EF6\uFF1A", item.event), React.createElement("p", null, item.time))
      }));
    }
  }), React.createElement("div", {
    className: style$3.clear,
    onClick: function onClick() {
      setNotifications([]);
    }
  }, "\u6E05\u7A7A\u6D88\u606F")), React.createElement(TabPane, {
    tab: "\u63D0\u9192".concat(pl > 0 ? ' (' + pl + ')' : ''),
    key: "2"
  }, React.createElement(_List, {
    className: style$3.list,
    dataSource: prompts,
    locale: {
      emptyText: React.createElement("div", {
        className: style$3.empty
      }, React.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg",
        alt: ""
      }), React.createElement("div", null, "\u60A8\u5DF2\u8BFB\u5B8C\u6240\u6709\u6D88\u606F"))
    },
    renderItem: function renderItem(item) {
      return React.createElement(_List.Item, {
        className: style$3.listItem
      }, React.createElement(_List.Item.Meta, {
        title: item.description,
        description: item.time
      }));
    }
  }), React.createElement("div", {
    className: style$3.clear,
    onClick: function onClick() {
      setPrompts([]);
    }
  }, "\u6E05\u7A7A\u6D88\u606F")));
};

var css$4 = ".src-components-SwitchSystems-_switchSystems_3kM06 {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_switcher_16HpC {\n  width: 40px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_switcher_16HpC:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_systems__3wzQ {\n  padding: 0 10px;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_sysPanel_2aZvB {\n  width: 480px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_sysPanel_2aZvB .src-components-SwitchSystems-_system_3PhNy {\n  width: 160px;\n  height: 160px;\n  float: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_sysPanel_2aZvB .src-components-SwitchSystems-_system_3PhNy:hover {\n  background: #e6f7ff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_sysPanel_2aZvB .src-components-SwitchSystems-_system_3PhNy .src-components-SwitchSystems-_icon_34cax {\n  width: 64px;\n  height: 64px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#71bbff), to(#1890ff));\n  background: linear-gradient(180deg, #71bbff 0%, #1890ff 100%);\n  border-radius: 4px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_sysPanel_2aZvB .src-components-SwitchSystems-_system_3PhNy .src-components-SwitchSystems-_icon_34cax > .src-components-SwitchSystems-_i_14TSf {\n  color: #fff;\n  font-size: 35px;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_sysPanel_2aZvB .src-components-SwitchSystems-_system_3PhNy .src-components-SwitchSystems-_title_2MJZ0 {\n  margin-top: 18px;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_sysPanel_2aZvB .ant-card-body {\n  padding: 0;\n}\n";
var style$4 = {"switchSystems":"src-components-SwitchSystems-_switchSystems_3kM06","switcher":"src-components-SwitchSystems-_switcher_16HpC","systems":"src-components-SwitchSystems-_systems__3wzQ","sysPanel":"src-components-SwitchSystems-_sysPanel_2aZvB","system":"src-components-SwitchSystems-_system_3PhNy","icon":"src-components-SwitchSystems-_icon_34cax","i":"src-components-SwitchSystems-_i_14TSf","title":"src-components-SwitchSystems-_title_2MJZ0"};
styleInject(css$4);

var systems = [{
  icon: 'appstore',
  background: 'linear-gradient(180deg,rgba(113,187,255,1) 0%,rgba(24,144,255,1) 100%)',
  title: '项目综合管理系统'
}, {
  icon: 'appstore',
  background: 'linear-gradient(180deg,rgba(255,188,190,1) 0%,rgba(247,121,125,1) 100%)',
  title: '通行证管理系统'
}, {
  icon: 'appstore',
  background: 'linear-gradient(180deg,rgba(95,226,255,1) 0%,rgba(18,194,233,1) 100%)',
  title: '视频监控管理系统'
}, {
  icon: 'appstore',
  background: 'linear-gradient(180deg,rgba(181,181,255,1) 0%,rgba(127,127,213,1) 100%)',
  title: '质量安全监管系统'
}, {
  icon: 'appstore',
  background: 'linear-gradient(180deg,rgba(255,224,153,1) 0%,rgba(254,182,20,1) 100%)',
  title: '物料管理系统'
}, {
  icon: 'appstore',
  background: 'linear-gradient(180deg,rgba(148,148,148,1) 0%,rgba(51,51,51,1) 100%)',
  title: '设备管理系统'
}, {
  icon: 'appstore',
  background: 'linear-gradient(180deg,rgba(61,243,87,1) 0%,rgba(39,198,62,1) 100%)',
  title: '环境管理系统'
}, {
  icon: 'appstore',
  background: 'linear-gradient(180deg,rgba(180,255,250,1) 0%,rgba(111,216,209,1) 100%)',
  title: '项目进度管理系统'
}];
var index$5 = (function (_ref) {
  var currentSystem = _ref.currentSystem;
  return React.createElement("div", {
    className: style$4.switchSystems
  }, React.createElement(_Dropdown, {
    overlayClassName: style$4.sysPanel,
    overlay: React.createElement(Content$2, null),
    trigger: ['click'],
    getPopupContainer: function getPopupContainer(trigger) {
      return trigger.parentNode;
    }
  }, React.createElement("div", {
    className: style$4.switcher
  }, React.createElement(_Icon, {
    type: "appstore"
  }))), currentSystem && React.createElement("div", {
    className: style$4.systems
  }, currentSystem));
});

var Content$2 = function Content() {
  return React.createElement(_Card, {
    title: "\u5357\u901A\u4E8C\u5EFA\u96C6\u56E2\u6709\u9650\u516C\u53F8",
    bordered: false
  }, systems.map(function (v, i) {
    return React.createElement("div", {
      className: style$4.system,
      key: i
    }, React.createElement("div", {
      className: style$4.icon,
      style: {
        background: v.background
      }
    }, React.createElement(_Icon, {
      type: v.icon,
      className: style$4.i
    })), React.createElement("div", {
      className: style$4.title
    }, v.title));
  }));
};

var css$5 = ".src-components-SystemsNav-_systemsNav_1wVbj {\n  font-size: calc(var(--font-size, 14px) + 2px);\n  display: -webkit-box;\n  display: flex;\n}\n.src-components-SystemsNav-_systemsNav_1wVbj > span {\n  padding: 0 17px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.src-components-SystemsNav-_systemsNav_1wVbj > span:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.src-components-SystemsNav-_systemsNav_1wVbj > span > i {\n  margin-right: 8px;\n}\n";
var style$5 = {"systemsNav":"src-components-SystemsNav-_systemsNav_1wVbj"};
styleInject(css$5);

var systems$1 = [{
  icon: 'appstore',
  title: '物料'
}, {
  icon: 'appstore',
  title: '设备'
}, {
  icon: 'appstore',
  title: '质量'
}, {
  icon: 'appstore',
  title: '视频'
}, {
  icon: 'appstore',
  title: '综合'
}, {
  icon: 'appstore',
  title: '环境'
}];
var index$6 = (function () {
  return React.createElement("div", {
    className: style$5.systemsNav
  }, systems$1.map(function (v, i) {
    return React.createElement("span", {
      key: i
    }, React.createElement(_Icon, {
      type: v.icon
    }), v.title);
  }));
});

export { index as BasicLayout, index$4 as Notification, index$1 as PageHeaderWrapper, index$5 as SwitchSystems, index$3 as SwitchTheme, index$6 as SystemsNav, index$2 as UserMenu };
