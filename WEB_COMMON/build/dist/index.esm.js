import 'antd/lib/result/style';
import _Result from 'antd/lib/result';
import 'antd/lib/spin/style';
import _Spin from 'antd/lib/spin';
import React, { useMemo, useState, Fragment, useCallback, forwardRef, useRef, useEffect } from 'react';
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
import 'antd/lib/badge/style';
import _Badge from 'antd/lib/badge';
import 'antd/lib/card/style';
import _Card from 'antd/lib/card';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/tree/style';
import _Tree from 'antd/lib/tree';
import { ContextMenuTrigger, ContextMenu } from 'react-contextmenu';
import classNames from 'classnames';
import 'antd/lib/col/style';
import _Col from 'antd/lib/col';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import 'antd/lib/tabs/style';
import _Tabs from 'antd/lib/tabs';
import 'antd/lib/table/style';
import _Table from 'antd/lib/table';
import moment from 'moment';
import 'antd/lib/modal/style';
import _Modal from 'antd/lib/modal';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/row/style';
import _Row from 'antd/lib/row';
import axios from 'axios';

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

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.src-layouts-BasicLayout-_themeWrapper_14L2Y {\n  height: 100%;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y > .src-layouts-BasicLayout-_bgwrapper_1EYE2 {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y > .src-layouts-BasicLayout-_bgwrapper_1EYE2 > .src-layouts-BasicLayout-_bg_3V-YL {\n  height: inherit;\n  background: var(--background, #1c1f87) no-repeat;\n  background-size: cover;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y > .src-layouts-BasicLayout-_basicLayout_MWK9- {\n  height: inherit;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y > .src-layouts-BasicLayout-_basicLayout_MWK9- .src-layouts-BasicLayout-_headerContent_3MeNv {\n  color: rgba(255, 255, 255, 0.85);\n  display: -webkit-box;\n  display: flex;\n  font-size: var(--fontSize, 14px);\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y > .src-layouts-BasicLayout-_basicLayout_MWK9- .src-layouts-BasicLayout-_headerContent_3MeNv > .src-layouts-BasicLayout-_left_baV43 {\n  width: 300px;\n  margin-left: 4px;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y > .src-layouts-BasicLayout-_basicLayout_MWK9- .src-layouts-BasicLayout-_headerContent_3MeNv > .src-layouts-BasicLayout-_middle_2V02B {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y > .src-layouts-BasicLayout-_basicLayout_MWK9- .src-layouts-BasicLayout-_headerContent_3MeNv > .src-layouts-BasicLayout-_right_tFiBi {\n  width: 200px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-right: 14px;\n  margin-left: auto;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider {\n  background: transparent;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider {\n  background: transparent;\n  box-shadow: none;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu-logo {\n  background: transparent;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu {\n  padding: 0 !important;\n  background: transparent;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-inline {\n  background: transparent;\n  box-shadow: none;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-submenu-title,\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-item {\n  margin: 0;\n  font-size: var(--fontSize, 14px);\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-submenu-title i,\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-item i {\n  font-size: var(--fontSize, 14px);\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-submenu-open > .ant-menu-submenu-title {\n  background: rgba(255, 255, 255, 0.15);\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu > .ant-menu-submenu > .ant-menu-submenu-title {\n  height: 60px;\n  line-height: 60px;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-pro-sider-menu-sider > .ant-layout-sider-children > .ant-pro-sider-menu .ant-menu-item-selected {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-layout {\n  min-height: 100vh;\n  background: transparent;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-layout > .ant-layout-header {\n  background: transparent;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-layout > .ant-layout-content {\n  background: #f0f2f5;\n}\n.src-layouts-BasicLayout-_themeWrapper_14L2Y .ant-layout-has-sider > .ant-layout > .ant-layout-content > .ant-pro-basicLayout-children-content-wrap > .ant-pro-page-header-wrap {\n  padding-bottom: 24px;\n}\n";
var styles = {"themeWrapper":"src-layouts-BasicLayout-_themeWrapper_14L2Y","bgwrapper":"src-layouts-BasicLayout-_bgwrapper_1EYE2","bg":"src-layouts-BasicLayout-_bg_3V-YL","basicLayout":"src-layouts-BasicLayout-_basicLayout_MWK9-","headerContent":"src-layouts-BasicLayout-_headerContent_3MeNv","left":"src-layouts-BasicLayout-_left_baV43","middle":"src-layouts-BasicLayout-_middle_2V02B","right":"src-layouts-BasicLayout-_right_tFiBi"};
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
}; // 获取扁平化菜单path


var getAuthRoutes = function getAuthRoutes(menuData) {
  var authRoutes = [];
  menuData.forEach(function (item) {
    if (!item) {
      return;
    }

    if (item.children) {
      authRoutes = authRoutes.concat(getAuthRoutes(item.children));
    } else {
      authRoutes.push(item.path);
    }
  });
  return authRoutes;
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

  var authRoutes = useMemo(function () {
    return getAuthRoutes(menuData);
  }, [menuData]);
  useMemo(function () {
    return MenuBreadcrumb(menuData);
  }, [menuData]);
  return React.createElement("div", {
    className: styles.themeWrapper
  }, React.createElement("div", {
    className: styles.bgwrapper
  }, React.createElement("div", {
    className: styles.bg
  })), React.createElement(BasicLayout, _extends({
    className: styles.basicLayout,
    collapsed: false,
    onCollapse: false,
    headerRender: function headerRender() {
      return React.createElement("div", {
        className: styles.headerContent
      }, React.createElement("div", {
        className: styles.left
      }, leftContent), React.createElement("div", {
        className: styles.middle
      }, middleContent), React.createElement("div", {
        className: styles.right
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
    },
    menu: {
      defaultOpenAll: true
    },
    siderWidth: 230,
    disableMobile: true,
    disableContentMargin: true
  }, props), React.createElement(Auth, {
    pathname: location.pathname,
    authRoutes: authRoutes
  }, children)));
}); // 权限控制(只有返回菜单对应的路由有权限访问)

var Auth = function Auth(_ref2) {
  var children = _ref2.children,
      pathname = _ref2.pathname,
      authRoutes = _ref2.authRoutes;
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
      rest = _objectWithoutProperties(_ref, ["children", "style"]);

  return React.createElement(PageHeaderWrapper, _extends({
    style: _objectSpread2({
      margin: '0'
    }, style)
  }, rest), children);
});

var css$1 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.src-components-UserMenu-_userMenu_21mks {\n  padding: 0 10px;\n  color: rgba(255, 255, 255, 0.65);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.src-components-UserMenu-_userMenu_21mks:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.src-components-UserMenu-_userMenu_21mks:hover {\n  color: rgba(255, 255, 255, 0.85);\n}\n.src-components-UserMenu-_userMenu_21mks .src-components-UserMenu-_user_3_bwN {\n  margin-left: 10px;\n}\n";
var style = {"userMenu":"src-components-UserMenu-_userMenu_21mks","user":"src-components-UserMenu-_user_3_bwN"};
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
    className: style.userMenu
  }, React.createElement(_Avatar, {
    size: 25,
    src: user.avatar,
    icon: "user"
  }), React.createElement("span", {
    className: style.user
  }, user.name))) : null;
});

var css$2 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.src-components-SwitchTheme-_switchTheme_2NlmH {\n  width: 40px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-SwitchTheme-_switchTheme_2NlmH:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.src-components-SwitchTheme-_switchTheme_2NlmH > i {\n  font-size: calc(var(--fontSize, 14px) + 2px);\n}\n.src-components-SwitchTheme-_themePanel_lS4sL {\n  width: 350px;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U {\n  padding: 8px 0;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_title_ih_Lm {\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 16px;\n  padding-left: 16px;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_fontList_3BbaH {\n  padding: 16px 40px;\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 1px solid #d9d9d9;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_fontList_3BbaH > label:nth-child(n + 2) {\n  margin-left: 30px;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_bgList_2NcxS {\n  padding: 16px 40px;\n  display: -webkit-box;\n  display: flex;\n  border-bottom: 1px solid #d9d9d9;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_bgList_2NcxS:last-child {\n  border-bottom: none;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_bgList_2NcxS .src-components-SwitchTheme-_icon_1YsIK {\n  color: #fff;\n  font-size: 13px;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_bgList_2NcxS .src-components-SwitchTheme-_circle__yMWJ {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-SwitchTheme-_themePanel_lS4sL .src-components-SwitchTheme-_wrapper_2a73U .src-components-SwitchTheme-_bgList_2NcxS .src-components-SwitchTheme-_rectangle_cSkzQ {\n  width: 60px;\n  height: 40px;\n  background-size: cover;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n";
var style$1 = {"switchTheme":"src-components-SwitchTheme-_switchTheme_2NlmH","themePanel":"src-components-SwitchTheme-_themePanel_lS4sL","wrapper":"src-components-SwitchTheme-_wrapper_2a73U","title":"src-components-SwitchTheme-_title_ih_Lm","fontList":"src-components-SwitchTheme-_fontList_3BbaH","bgList":"src-components-SwitchTheme-_bgList_2NcxS","icon":"src-components-SwitchTheme-_icon_1YsIK","circle":"src-components-SwitchTheme-_circle__yMWJ","rectangle":"src-components-SwitchTheme-_rectangle_cSkzQ"};
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
    overlayClassName: style$1.themePanel,
    overlay: React.createElement(Content, null),
    trigger: ['click']
  }, React.createElement("div", {
    className: style$1.switchTheme
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
    className: style$1.wrapper
  }, React.createElement("div", {
    className: style$1.title
  }, "\u5B57\u4F53\u5927\u5C0F"), React.createElement(_Radio.Group, {
    className: style$1.fontList,
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
      className: style$1.title
    }, item.title), React.createElement("div", {
      className: style$1.bgList
    }, item.value.map(function (v, i) {
      return React.createElement("div", {
        key: i,
        className: style$1.circle,
        style: {
          background: v
        },
        onClick: function onClick() {
          setTheme('--background', v);
          setBg(v);
        }
      }, bg === v && React.createElement(_Icon, {
        type: "check",
        className: style$1.icon
      }));
    })));
  }), background.slice(2).map(function (item, index) {
    return React.createElement(Fragment, {
      key: index
    }, React.createElement("div", {
      className: style$1.title
    }, item.title), React.createElement("div", {
      className: style$1.bgList
    }, item.value.map(function (v, i) {
      return React.createElement("div", {
        key: i,
        className: style$1.rectangle,
        style: {
          backgroundImage: v
        },
        onClick: function onClick() {
          setTheme('--background', v);
          setBg(v);
        }
      }, bg === v && React.createElement(_Icon, {
        type: "check",
        className: style$1.icon
      }));
    })));
  }));
};

var css$3 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.src-components-Notification-_notification_74A_h {\n  width: 40px;\n  text-align: center;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-Notification-_notification_74A_h:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.src-components-Notification-_notification_74A_h .ant-badge-count {\n  min-width: 16px;\n  height: 16px;\n  line-height: 16px;\n  padding: 0 5px;\n  box-shadow: none;\n  top: -2px;\n  right: -2px;\n}\n.src-components-Notification-_notification_74A_h i {\n  font-size: calc(var(--fontSize, 14px) + 2px);\n}\n";
var style$2 = {"notification":"src-components-Notification-_notification_74A_h"};
styleInject(css$3);

var index$4 = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      className = _ref.className,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? React.createElement(React.Fragment, null) : _ref$content,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 0 : _ref$count;

  return React.createElement(_Dropdown, {
    overlayClassName: className,
    overlay: content,
    trigger: ['click'],
    getPopupContainer: function getPopupContainer(trigger) {
      return trigger.parentNode;
    }
  }, React.createElement("div", {
    className: style$2.notification
  }, React.createElement(_Badge, {
    count: count
  }, React.createElement(_Icon, {
    type: "bell"
  }))));
});

var css$4 = ".src-components-SearchTree-_tree_DcH_W {\n  height: 100%;\n}\n.src-components-SearchTree-_tree_DcH_W .src-components-SearchTree-_search_1iJ0D {\n  margin-bottom: 8px;\n}\n.src-components-SearchTree-_tree_DcH_W .src-components-SearchTree-_searchTree_3JpDE {\n  overflow: auto;\n  height: calc(100% - 32px - 8px);\n}\n.src-components-SearchTree-_tree_DcH_W .react-contextmenu-wrapper {\n  display: inline;\n}\n";
var styles$1 = {"tree":"src-components-SearchTree-_tree_DcH_W","search":"src-components-SearchTree-_search_1iJ0D","searchTree":"src-components-SearchTree-_searchTree_3JpDE"};
styleInject(css$4);

var TreeNode = _Tree.TreeNode;
var Search = _Input.Search; // 默认展开第一项


var generateTreeNode = function generateTreeNode(tree, keyName, onlySelectLeaf) {
  return tree.map(function (v) {
    var title = v.name;

    if (v.children) {
      return React.createElement(TreeNode, {
        icon: React.createElement(_Icon, {
          type: "bank"
        }),
        title: React.createElement(ContextMenuTrigger, {
          id: "test"
        }, "123"),
        key: v[keyName],
        selectable: !onlySelectLeaf
      }, generateTreeNode(v.children, keyName, onlySelectLeaf));
    } else {
      return React.createElement(TreeNode, {
        icon: React.createElement(_Icon, {
          type: "apartment"
        }),
        title: title,
        key: v[keyName]
      });
    }
  });
}; // 生成key列表


var generateList = function generateList(tree, keyName) {
  var dataList = [];
  tree.forEach(function (v) {
    dataList.push(v);

    if (v.children) {
      dataList.push.apply(dataList, _toConsumableArray(generateList(v.children)));
    }
  });
  return dataList;
};
/**
 * @description: 带搜索框的Tree
 * @param data:Array
 */


var SearchTree = (function (_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$searchName = _ref.searchName,
      searchName = _ref$searchName === void 0 ? 'name' : _ref$searchName,
      _ref$keyName = _ref.keyName,
      keyName = _ref$keyName === void 0 ? 'id' : _ref$keyName,
      _ref$onlySelectLeaf = _ref.onlySelectLeaf,
      onlySelectLeaf = _ref$onlySelectLeaf === void 0 ? false : _ref$onlySelectLeaf,
      className = _ref.className,
      style = _ref.style,
      params = _objectWithoutProperties(_ref, ["data", "searchName", "keyName", "onlySelectLeaf", "className", "style"]);

  // const [expand, setExpand] = useState(defaultExpended(data, keyName))
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      autoExpandParent = _useState2[0],
      setAutoExpandParent = _useState2[1];

  var TreeChildren = useMemo(function () {
    return generateTreeNode(data, keyName, onlySelectLeaf);
  }, [data]);
  var nodeList = useMemo(function () {
    return generateList(data);
  }, [data]); // SearchChanged

  var onChange = function onChange(e) {
    var value = e.target.value;
    var expandList = nodeList.filter(function (v) {
      return v[searchName].indexOf(value) > -1;
    }).map(function (v) {
      return v[keyName];
    });
    setExpand(expandList);
    setAutoExpandParent(true);
  }; // TreeExpanded
  // const onExpand = expandedKeys => {
  //   setExpand(expandedKeys)
  //   setAutoExpandParent(false)
  // }


  return React.createElement("div", {
    className: classNames(styles$1.tree, className),
    style: style
  }, React.createElement(Search, {
    className: styles$1.search,
    placeholder: "\u8BF7\u8F93\u5165...",
    onChange: onChange
  }), React.createElement(_Tree, _extends({
    showLine: true,
    showIcon: true,
    switcherIcon: React.createElement(_Icon, {
      type: "down"
    }),
    className: classNames(styles$1.searchTree, 'hide-file-icon') // expandedKeys={expand}
    // onExpand={onExpand}
    ,
    defaultExpandAll: true,
    autoExpandParent: autoExpandParent
  }, params), TreeChildren), React.createElement(ContextMenu, {
    id: "test"
  }, "hello"));
});

var css$5 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.src-components-SwitchSystems-_switchSystems_3kM06 {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_switcher_16HpC {\n  width: 40px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_switcher_16HpC:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_switcher_16HpC > i {\n  font-size: calc(var(--fontSize, 14px) + 2px);\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_appPanel_3BTMI {\n  width: 480px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_appPanel_3BTMI .src-components-SwitchSystems-_system_3PhNy {\n  width: 160px;\n  height: 160px;\n  float: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_appPanel_3BTMI .src-components-SwitchSystems-_system_3PhNy:hover {\n  background: #e6f7ff;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_appPanel_3BTMI .src-components-SwitchSystems-_system_3PhNy .src-components-SwitchSystems-_icon_34cax {\n  width: 64px;\n  height: 64px;\n  border-radius: 4px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_appPanel_3BTMI .src-components-SwitchSystems-_system_3PhNy .src-components-SwitchSystems-_icon_34cax > .src-components-SwitchSystems-_i_14TSf {\n  color: #fff;\n  font-size: 35px;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_appPanel_3BTMI .src-components-SwitchSystems-_system_3PhNy .src-components-SwitchSystems-_title_2MJZ0 {\n  margin-top: 18px;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_appPanel_3BTMI .ant-card-body {\n  padding: 0;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_project_3gjlo {\n  width: 250px;\n  padding: 0 20px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_project_3gjlo:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.src-components-SwitchSystems-_switchSystems_3kM06 .src-components-SwitchSystems-_projPanel_ldtpW {\n  width: 350px;\n  padding: 10px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n";
var style$3 = {"switchSystems":"src-components-SwitchSystems-_switchSystems_3kM06","switcher":"src-components-SwitchSystems-_switcher_16HpC","appPanel":"src-components-SwitchSystems-_appPanel_3BTMI","system":"src-components-SwitchSystems-_system_3PhNy","icon":"src-components-SwitchSystems-_icon_34cax","i":"src-components-SwitchSystems-_i_14TSf","title":"src-components-SwitchSystems-_title_2MJZ0","project":"src-components-SwitchSystems-_project_3gjlo","projPanel":"src-components-SwitchSystems-_projPanel_ldtpW"};
styleInject(css$5);

var index$5 = (function (_ref) {
  var _ref$currentProject = _ref.currentProject,
      currentProject = _ref$currentProject === void 0 ? React.createElement(React.Fragment, null) : _ref$currentProject,
      _ref$applications = _ref.applications,
      applications = _ref$applications === void 0 ? [] : _ref$applications,
      _ref$companys = _ref.companys,
      companys = _ref$companys === void 0 ? [] : _ref$companys,
      _ref$tree = _ref.tree,
      tree = _ref$tree === void 0 ? [] : _ref$tree,
      props = _objectWithoutProperties(_ref, ["currentProject", "applications", "companys", "tree"]);

  return React.createElement("div", {
    className: style$3.switchSystems
  }, React.createElement(_Dropdown, {
    overlayClassName: style$3.appPanel,
    overlay: React.createElement(App, {
      applications: applications,
      companys: companys
    }),
    trigger: ['click'],
    getPopupContainer: function getPopupContainer(trigger) {
      return trigger.parentNode;
    }
  }, React.createElement("div", {
    className: style$3.switcher
  }, React.createElement(_Icon, {
    type: "appstore"
  }))), React.createElement(_Dropdown, {
    overlayClassName: style$3.projPanel,
    overlay: React.createElement(Project, _extends({
      tree: tree
    }, props)),
    trigger: ['click'],
    getPopupContainer: function getPopupContainer(trigger) {
      return trigger.parentNode;
    }
  }, currentProject && React.createElement("div", {
    className: style$3.project
  }, currentProject)));
}); // 应用中心

var App = function App(_ref2) {
  var applications = _ref2.applications,
      companys = _ref2.companys;
  return React.createElement(_Card, {
    title: "\u5E94\u7528\u4E2D\u5FC3",
    bordered: false,
    extra: React.createElement(_Select, {
      defaultValue: companys[0].value,
      style: {
        width: '200px'
      }
    }, companys.map(function (v, i) {
      return React.createElement(_Select.Option, {
        value: v.value,
        key: i
      }, v.value);
    }))
  }, applications.map(function (v, i) {
    return React.createElement("div", {
      className: style$3.system,
      key: i
    }, React.createElement("div", {
      className: style$3.icon,
      style: {
        background: v.background
      }
    }, React.createElement(_Icon, {
      type: v.icon,
      className: style$3.i
    })), React.createElement("div", {
      className: style$3.title
    }, v.title));
  }));
}; // 项目


var Project = function Project(_ref3) {
  var tree = _ref3.tree,
      onSelect = _ref3.onSelect;
  return React.createElement(SearchTree, {
    data: tree,
    style: {
      height: '505px'
    },
    onlySelectLeaf: true,
    onSelect: onSelect
  });
};

var css$6 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.src-components-SystemsNav-_systemsNav_1wVbj {\n  font-size: calc(var(--fontSize, 14px) + 2px);\n  display: -webkit-box;\n  display: flex;\n}\n.src-components-SystemsNav-_systemsNav_1wVbj > span {\n  padding: 0 17px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.src-components-SystemsNav-_systemsNav_1wVbj > span:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.src-components-SystemsNav-_systemsNav_1wVbj > span > i {\n  margin-right: 8px;\n}\n";
var style$4 = {"systemsNav":"src-components-SystemsNav-_systemsNav_1wVbj"};
styleInject(css$6);

var index$6 = (function (_ref) {
  var _ref$systemsNav = _ref.systemsNav,
      systemsNav = _ref$systemsNav === void 0 ? [] : _ref$systemsNav;
  return React.createElement("div", {
    className: style$4.systemsNav
  }, systemsNav.map(function (v, i) {
    return React.createElement("span", {
      key: i
    }, React.createElement(_Icon, {
      type: v.icon
    }), v.title);
  }));
});

var css$7 = ".src-components-ConfigForm-_configForm_3tPHv {\n  overflow: hidden;\n}\n.src-components-ConfigForm-_configForm_3tPHv .src-components-ConfigForm-_inline_1P-O0 .ant-form-item {\n  display: -webkit-box;\n  display: flex;\n}\n.src-components-ConfigForm-_configForm_3tPHv .ant-calendar-picker {\n  width: 100%;\n}\n.src-components-ConfigForm-_configForm_3tPHv .ant-form-item-control-wrapper {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n";
var style$5 = {"configForm":"src-components-ConfigForm-_configForm_3tPHv","inline":"src-components-ConfigForm-_inline_1P-O0"};
styleInject(css$7);

var index$7 = _Form.create()(function (_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      width = _ref.width,
      column = _ref.column,
      form = _ref.form,
      _ref$style = _ref.style,
      formStyle = _ref$style === void 0 ? {} : _ref$style,
      formClassName = _ref.className,
      inline = _ref.inline,
      itemWidth = _ref.itemWidth,
      rest = _objectWithoutProperties(_ref, ["data", "width", "column", "form", "style", "className", "inline", "itemWidth"]);

  var getFieldDecorator = form.getFieldDecorator;

  if (typeof itemWidth !== "number") {
    itemWidth = width;
  }

  var colSpan = 0;
  var cols = Math.floor(width / itemWidth); // 列数

  var gutter = (width - itemWidth * cols) / (cols - 1 || 1); // 间距

  return React.createElement(_Form, _extends({
    style: Object.assign({
      width: width
    }, formStyle),
    className: classNames(formClassName, style$5.configForm)
  }, rest), data.map(function (_ref2, i) {
    var name = _ref2.name,
        label = _ref2.label,
        component = _ref2.component,
        rules = _ref2.rules,
        initialValue = _ref2.initialValue,
        span = _ref2.span,
        itemStyle = _ref2.style,
        itemClassName = _ref2.className;
    var currentSpan = span || 1;
    colSpan += currentSpan;
    var hasGutter = colSpan !== cols;

    if (!hasGutter) {
      colSpan = 0;
    }

    return React.createElement(_Col, {
      key: i,
      style: {
        float: "left",
        width: "".concat(itemWidth * currentSpan + (currentSpan - 1) * gutter, "px"),
        marginRight: "".concat(hasGutter && gutter, "px")
      }
    }, React.createElement(_Form.Item, {
      label: label,
      style: Object.assign(inline ? {
        display: "flex"
      } : {}, _objectSpread2({}, itemStyle)),
      className: itemClassName
    }, component && getFieldDecorator(name || label, {
      initialValue: initialValue,
      rules: rules,
      validateTrigger: false
    })(component)));
  }));
});

var css$8 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.src-components-CustomCard-_customCard_1U1Q1 .ant-card-extra {\n  padding: 0;\n}\n.src-components-CustomCard-_customCard_1U1Q1 .src-components-CustomCard-_tabs_2sVqg .ant-tabs-bar {\n  margin-bottom: 0;\n}\n.src-components-CustomCard-_customCard_1U1Q1 .src-components-CustomCard-_tabs_2sVqg .ant-tabs-bar > .ant-tabs-extra-content {\n  padding-right: 24px;\n}\n.src-components-CustomCard-_customCard_1U1Q1 .src-components-CustomCard-_tabs_2sVqg .ant-tabs-bar > .ant-tabs-nav-container {\n  padding-left: 16px;\n}\n.src-components-CustomCard-_customCard_1U1Q1 .src-components-CustomCard-_tabs_2sVqg .ant-tabs-bar > .ant-tabs-nav-container .ant-tabs-tab {\n  padding: 17px 16px;\n}\n.src-components-CustomCard-_customCard_1U1Q1 .src-components-CustomCard-_tabs_2sVqg .ant-tabs-content > .ant-tabs-tabpane {\n  padding: 24px;\n}\n.src-components-CustomCard-_customCardMT_1qLZi.src-components-CustomCard-_customCardMT_1qLZi {\n  margin-top: 24px;\n}\n.src-components-CustomCard-_customCardML_2YjE3.src-components-CustomCard-_customCardML_2YjE3 {\n  margin-left: 24px;\n}\n";
var styles$2 = {"customCard":"src-components-CustomCard-_customCard_1U1Q1","tabs":"src-components-CustomCard-_tabs_2sVqg","customCardMT":"src-components-CustomCard-_customCardMT_1qLZi","customCardML":"src-components-CustomCard-_customCardML_2YjE3"};
styleInject(css$8);

var CustomCard = function CustomCard(_ref) {
  var className = _ref.className,
      children = _ref.children,
      marginLeft = _ref.marginLeft,
      marginTop = _ref.marginTop,
      rest = _objectWithoutProperties(_ref, ["className", "children", "marginLeft", "marginTop"]);

  return React.createElement(_Card, _extends({
    className: classNames(styles$2.customCard, className, marginLeft && styles$2.customCardML, marginTop && styles$2.customCardMT)
  }, rest), children);
};

var CustomCardTabs = function CustomCardTabs(_ref2) {
  var children = _ref2.children,
      marginLeft = _ref2.marginLeft,
      marginTop = _ref2.marginTop,
      props = _objectWithoutProperties(_ref2, ["children", "marginLeft", "marginTop"]);

  return React.createElement(CustomCard, {
    bodyStyle: {
      padding: 0
    },
    marginTop: marginTop,
    marginLeft: marginLeft
  }, React.createElement(_Tabs, _extends({
    size: "large"
  }, props, {
    className: styles$2.tabs
  }), children));
};
CustomCardTabs.TabPane = _Tabs.TabPane;

var css$9 = ".react-contextmenu-wrapper {\n  display: inline-block;\n  padding: 0 3px;\n  margin-left: -3px;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li span.ant-tree-switcher-noop {\n  background: transparent;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li:before {\n  content: ' ';\n  width: 1px;\n  border-left: 1px solid #d9d9d9;\n  height: 100%;\n  position: absolute;\n  left: 12px;\n  top: 0;\n  margin: 0;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li:first-child:before {\n  top: 6px;\n  height: calc(100% - 6px);\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li:last-child:before {\n  height: 16px;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li:first-child:last-child:before {\n  height: 10px;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li .ant-tree-switcher-noop > i {\n  visibility: hidden;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li .ant-tree-switcher-noop:after {\n  content: ' ';\n  height: 1px;\n  border-bottom: 1px solid #d9d9d9;\n  width: 10px;\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  margin: 0;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li span.ant-tree-switcher-noop {\n  background: transparent;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li:before {\n  content: ' ';\n  width: 1px;\n  border-left: 1px solid #d9d9d9;\n  height: 100%;\n  position: absolute;\n  left: 12px;\n  top: 0;\n  margin: 0;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li:first-child:before {\n  top: 10px;\n  height: calc(100% - 6px);\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li:last-child:before {\n  height: 16px;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li:first-child:last-child:before {\n  height: 10px;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li .ant-tree-switcher-noop > i {\n  visibility: hidden;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li .ant-tree-switcher-noop:after {\n  content: ' ';\n  height: 1px;\n  border-bottom: 1px solid #d9d9d9;\n  width: 10px;\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  margin: 0;\n}\n.ant-tree.ant-tree-show-line.hide-file-icon li:before {\n  margin: 0 !important;\n}\n.ant-tree.ant-tree-show-line li:not(:last-child)::before {\n  height: 100% !important;\n}\n";
styleInject(css$9);

var TreeNode$1 = _Tree.TreeNode;

var CustomTree = function CustomTree(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      className = _ref.className,
      _ref$titleName = _ref.titleName,
      titleName = _ref$titleName === void 0 ? 'title' : _ref$titleName,
      _ref$keyName = _ref.keyName,
      keyName = _ref$keyName === void 0 ? 'id' : _ref$keyName,
      _ref$iconName = _ref.iconName,
      iconName = _ref$iconName === void 0 ? 'icon' : _ref$iconName,
      _ref$rightClickMenu = _ref.rightClickMenu,
      rightClickMenu = _ref$rightClickMenu === void 0 ? '' : _ref$rightClickMenu,
      _ref$rightClickMenuId = _ref.rightClickMenuId,
      rightClickMenuId = _ref$rightClickMenuId === void 0 ? '' : _ref$rightClickMenuId,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["data", "className", "titleName", "keyName", "iconName", "rightClickMenu", "rightClickMenuId", "children"]);

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      rightMenuData = _useState2[0],
      setRightMenuData = _useState2[1]; // 右键菜单传递的数据
  // 右键菜单触发器


  var WithRightMenu = function WithRightMenu(_ref2) {
    var children = _ref2.children,
        data = _ref2.data;
    return rightClickMenuId ? React.createElement(ContextMenuTrigger, {
      id: rightClickMenuId,
      collect: function collect() {
        setRightMenuData(data);
      }
    }, children) : children;
  };

  var generateTreeNode = useCallback(function (data) {
    return data.map(function (_ref3) {
      var _ref3$children = _ref3.children,
          children = _ref3$children === void 0 ? [] : _ref3$children,
          props = _objectWithoutProperties(_ref3, ["children"]);

      var title = props[titleName] || '';
      var key = props[keyName];
      var icon = props[iconName] || ' ';
      var rMenuData = {
        key: key,
        title: title
      };

      if (children && children.length > 0) {
        return React.createElement(TreeNode$1, {
          icon: React.createElement(WithRightMenu, {
            data: rMenuData
          }, React.createElement(_Icon, {
            type: icon
          })),
          title: React.createElement(WithRightMenu, {
            data: rMenuData
          }, title),
          key: key
        }, generateTreeNode(children));
      } else {
        return React.createElement(TreeNode$1, {
          icon: React.createElement(WithRightMenu, {
            data: rMenuData
          }, React.createElement(_Icon, {
            type: icon
          })),
          title: React.createElement(WithRightMenu, {
            data: rMenuData
          }, title),
          key: key
        });
      }
    });
  }, [data, titleName, keyName, iconName]);
  return React.createElement(React.Fragment, null, React.createElement(_Tree, _extends({}, props, {
    className: classNames('hide-file-icon', className)
  }), children || generateTreeNode(data)), rightClickMenuId && React.createElement(ContextMenu, {
    id: rightClickMenuId
  }, rightClickMenu && rightClickMenu(rightMenuData)));
};

var css$a = ".src-components-bussiness-SearchTree-_searchTree_3S-in > .src-components-bussiness-SearchTree-_search_agHsO {\n  margin-bottom: 8px;\n}\n.src-components-bussiness-SearchTree-_searchTree_3S-in > .src-components-bussiness-SearchTree-_tree_38aaU {\n  overflow: auto;\n  height: calc(100% - 32px - 8px);\n}\n";
var styles$3 = {"searchTree":"src-components-bussiness-SearchTree-_searchTree_3S-in","search":"src-components-bussiness-SearchTree-_search_agHsO","tree":"src-components-bussiness-SearchTree-_tree_38aaU"};
styleInject(css$a);

var index$8 = (function (_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$titleName = _ref.titleName,
      titleName = _ref$titleName === void 0 ? 'title' : _ref$titleName,
      _ref$keyName = _ref.keyName,
      keyName = _ref$keyName === void 0 ? 'id' : _ref$keyName,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["data", "titleName", "keyName", "className", "style", "children"]);

  var nodeList = useMemo(function () {
    return getNodeList(data, titleName, keyName);
  }, [data, titleName, keyName]); // 平铺树节点

  var _useState = useState(nodeList.map(function (v) {
    return v.key;
  })),
      _useState2 = _slicedToArray(_useState, 2),
      expandedKeys = _useState2[0],
      setExpendedKeys = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      autoExpandParent = _useState4[0],
      setAutoExpandParent = _useState4[1]; // 搜索


  var onSearch = function onSearch(value) {
    var expandList = nodeList.filter(function (v) {
      return v.title.indexOf(value) > -1;
    }).map(function (v) {
      return v.key;
    });
    setExpendedKeys(expandList);
    setAutoExpandParent(true);
  };

  return React.createElement("div", {
    className: classNames(styles$3.searchTree, className),
    style: style
  }, React.createElement(_Input.Search, {
    placeholder: "\u8BF7\u8F93\u5165...",
    className: styles$3.search,
    onSearch: onSearch
  }), React.createElement(CustomTree, _extends({
    data: data,
    titleName: titleName,
    keyName: keyName,
    switcherIcon: React.createElement(_Icon, {
      type: "down"
    }),
    className: styles$3.tree,
    showIcon: true,
    showLine: true,
    expandedKeys: expandedKeys,
    autoExpandParent: autoExpandParent,
    onExpand: function onExpand(expandedKeys) {
      setExpendedKeys(expandedKeys);
      setAutoExpandParent(false);
    }
  }, props), children));
}); // 平铺树节点

var getNodeList = function getNodeList(tree, titleName, keyName) {
  var dataList = [];
  tree.forEach(function (v) {
    dataList.push({
      title: v[titleName],
      key: v[keyName]
    });

    if (v.children) {
      dataList.push.apply(dataList, _toConsumableArray(getNodeList(v.children, titleName, keyName)));
    }
  });
  return dataList;
};

var css$b = ".src-components-CustomTable-_tableActions_1ymOf {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 16px;\n}\n.src-components-CustomTable-_tableActions_1ymOf > .src-components-CustomTable-_left_2wfVo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-CustomTable-_tableActions_1ymOf > .src-components-CustomTable-_left_2wfVo > *:nth-child(n + 2) {\n  margin-left: 5px;\n}\n.src-components-CustomTable-_tableActions_1ymOf > .src-components-CustomTable-_right_3_y4A {\n  margin-left: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-CustomTable-_tableActions_1ymOf > .src-components-CustomTable-_right_3_y4A > *:nth-last-child(n + 2) {\n  margin-right: 5px;\n}\n.src-components-CustomTable-_tableExtra_2WB8o {\n  margin-bottom: 16px;\n}\n";
var styles$4 = {"tableActions":"src-components-CustomTable-_tableActions_1ymOf","left":"src-components-CustomTable-_left_2wfVo","right":"src-components-CustomTable-_right_3_y4A","tableExtra":"src-components-CustomTable-_tableExtra_2WB8o"};
styleInject(css$b);

var index$9 = (function (_ref) {
  var _ref$bordered = _ref.bordered,
      bordered = _ref$bordered === void 0 ? true : _ref$bordered,
      pagination = _ref.pagination,
      _ref$actions = _ref.actions,
      actions = _ref$actions === void 0 ? {
    left: null,
    right: null
  } : _ref$actions,
      _ref$extra = _ref.extra,
      extra = _ref$extra === void 0 ? null : _ref$extra,
      props = _objectWithoutProperties(_ref, ["bordered", "pagination", "actions", "extra"]);

  var withActions = !!(actions.left || actions.right);
  var T = React.createElement(_Table, _extends({
    bordered: bordered,
    pagination: TablePagination(pagination)
  }, props));
  return withActions ? TableWithHeader(T, actions, extra) : T;
});

var TableWithHeader = function TableWithHeader(T, actions, extra) {
  var left = actions.left,
      right = actions.right;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: styles$4.tableActions
  }, left && React.createElement("div", {
    className: styles$4.left
  }, left), right && React.createElement("div", {
    className: styles$4.right
  }, right)), extra && React.createElement("div", {
    className: styles$4.tableExtra
  }, extra), T);
};

var TablePagination = function TablePagination(pagination) {
  if (!pagination) {
    return false;
  }

  return _objectSpread2({
    showQuickJumper: true
  }, pagination);
};

var saveInputStyle = {
  width: "32px",
  marginRight: "10px"
};
var number = 6;
var index$a = forwardRef(function (_ref, ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? new Array(number).fill("") : _ref$value,
      onChange = _ref.onChange;
  var inputRef = useRef([]);

  var handleChange = function handleChange(e, index) {
    value[index] = e ? e.target.value : "";
    onChange(value);
  };

  var focusInputNext = function focusInputNext(i) {
    if (i < number - 1) {
      inputRef.current[i + 1].focus();
    }
  };

  var focusInputPrev = function focusInputPrev(i) {
    if (i > 0) {
      inputRef.current[i - 1].focus();
    }
  };

  var inputArray = value.map(function (_, i) {
    return React.createElement(_Input, {
      style: saveInputStyle,
      onChange: function onChange(e) {
        handleChange(e, i);
        focusInputNext(i);
      },
      value: value[i],
      onFocus: function onFocus() {
        handleChange("", i);
      },
      onKeyUp: function onKeyUp(e) {
        if (e.keyCode === 8) {
          handleChange("", i);
          focusInputPrev(i);
        }
      },
      maxLength: 1,
      ref: function ref(e) {
        inputRef.current[i] = e;
      }
    });
  });
  return React.createElement(_Input.Group, null, inputArray.map(function (v, i) {
    return React.createElement(Fragment, {
      key: i
    }, v);
  }));
});

var css$c = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.src-components-TimeWeather-_timeWeather_2LmXD {\n  position: relative;\n  height: 100%;\n}\n.src-components-TimeWeather-_timeWeather_2LmXD .src-components-TimeWeather-_wrapper_3nZoV {\n  position: absolute;\n  width: calc(460px + (var(--fontSize, 14px) - 14px) * 10);\n  height: 32px;\n  border-radius: 16px;\n  line-height: 30px;\n  text-align: center;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  border: 1px solid #d9d9d9;\n  padding: 0 30px;\n  font-size: var(--fontSize, 14px);\n  color: #d9d9d9;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.src-components-TimeWeather-_timeWeather_2LmXD .src-components-TimeWeather-_wrapper_3nZoV span:not(:last-child) {\n  margin-right: 8px;\n}\n.src-components-TimeWeather-_timeWeather_2LmXD .src-components-TimeWeather-_wrapper_3nZoV .src-components-TimeWeather-_iconWrapper_71V2e {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.src-components-TimeWeather-_timeWeather_2LmXD .src-components-TimeWeather-_wrapper_3nZoV .src-components-TimeWeather-_iconWrapper_71V2e > i {\n  margin-right: 8px;\n}\n.src-components-TimeWeather-_timeWeather_2LmXD .src-components-TimeWeather-_wrapper_3nZoV .src-components-TimeWeather-_weather_1gHYK .sw-container {\n  color: #d9d9d9;\n}\n.src-components-TimeWeather-_timeWeather_2LmXD .src-components-TimeWeather-_wrapper_3nZoV .src-components-TimeWeather-_weather_1gHYK .sw-container .sw-typography {\n  font-size: var(--fontSize, 14px);\n}\n";
var style$6 = {"timeWeather":"src-components-TimeWeather-_timeWeather_2LmXD","wrapper":"src-components-TimeWeather-_wrapper_3nZoV","iconWrapper":"src-components-TimeWeather-_iconWrapper_71V2e","weather":"src-components-TimeWeather-_weather_1gHYK"};
styleInject(css$c);

var index$b = (function () {
  var _useState = useState(new Date()),
      _useState2 = _slicedToArray(_useState, 2),
      calendar = _useState2[0],
      setCalendar = _useState2[1];

  useEffect(function () {

    (function (a, h, g, f, e, d, c, b) {
      b = function b() {
        d = h.createElement(g);
        c = h.getElementsByTagName(g)[0];
        d.src = e;
        d.charset = 'utf-8';
        d.async = 1;
        c.parentNode.insertBefore(d, c);
      };

      a['SeniverseWeatherWidgetObject'] = f;
      a[f] || (a[f] = function () {
        (a[f].q = a[f].q || []).push(arguments);
      });
      a[f].l = +new Date();

      if (a.attachEvent) {
        a.attachEvent('onload', b);
      } else {
        a.addEventListener('load', b, false);
      }
    })(window, document, 'script', 'SeniverseWeatherWidget', '//cdn.sencdn.com/widget2/static/js/bundle.js?t=' + parseInt((new Date().getTime() / 100000000).toString(), 10));
  }, []);
  useEffect(function () {
    // 心知天气服务
    window.SeniverseWeatherWidget('show', {
      flavor: 'slim',
      location: 'WTW3SJ5ZBJUY',
      geolocation: true,
      language: 'zh-Hans',
      unit: 'c',
      theme: 'dark',
      token: 'd541121a-748b-4b47-82cf-e73f928f9766',
      hover: 'enabled',
      container: 'tp-weather-widget'
    }); // 日期

    var timeout = setTimeout(function () {
      setCalendar(new Date());
    }, 500);
    return function () {
      clearTimeout(timeout);
    };
  });
  var date = moment(calendar);
  var week = date.format('ddd');
  var day = date.format('YYYY年MM月DD日');
  var time = date.format('hh:mm:ss');
  return React.createElement("div", {
    className: style$6.timeWeather
  }, React.createElement("div", {
    className: style$6.wrapper
  }, React.createElement("div", {
    className: style$6.iconWrapper
  }, React.createElement(_Icon, {
    type: "schedule"
  }), React.createElement("span", null, week), React.createElement("span", null, day)), React.createElement("div", {
    className: style$6.iconWrapper
  }, React.createElement(_Icon, {
    type: "clock-circle"
  }), React.createElement("span", null, time)), React.createElement("div", {
    className: style$6.iconWrapper
  }, React.createElement(_Icon, {
    type: "environment"
  }), React.createElement("div", {
    id: "tp-weather-widget",
    className: style$6.weather
  }))));
});

var config = {
  baseURL: 'https://nei.netease.com/api/apimock/20677609c2af996c88be2cd3244301ba/api',
  iconfont: '//at.alicdn.com/t/font_1430257_mtq8pi4rree.js'
};

var IconFont = _Icon.createFromIconfontCN({
  scriptUrl: config.iconfont
});

var CustomModal = (function (_ref) {
  var onOk = _ref.onOk,
      onCancel = _ref.onCancel,
      props = _objectWithoutProperties(_ref, ["onOk", "onCancel"]);

  return React.createElement(_Modal, _extends({
    footer: React.createElement("div", null, React.createElement(_Button, {
      type: "primary",
      onClick: function onClick() {
        onOk && onOk();
      }
    }, "\u786E\u5B9A"), React.createElement(_Button, {
      onClick: function onClick() {
        onCancel && onCancel();
      }
    }, "\u53D6\u6D88")),
    onCancel: onCancel
  }, props));
});

var CustomButton = _Button;

CustomButton.Modal = function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$buttonProps = _ref.buttonProps;
  _ref$buttonProps = _ref$buttonProps === void 0 ? {} : _ref$buttonProps;

  var _onClick = _ref$buttonProps.onClick,
      buttonRest = _objectWithoutProperties(_ref$buttonProps, ["onClick"]),
      _ref$modalProps = _ref.modalProps;

  _ref$modalProps = _ref$modalProps === void 0 ? {} : _ref$modalProps;

  var _ref$modalProps$visib = _ref$modalProps.visible,
      visible = _ref$modalProps$visib === void 0 ? null : _ref$modalProps$visib,
      _onCancel = _ref$modalProps.onCancel,
      modalRest = _objectWithoutProperties(_ref$modalProps, ["visible", "onCancel"]),
      children = _ref.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var noVisible = visible === null;
  return React.createElement(React.Fragment, null, type === 'button' && React.createElement(_Button, _extends({
    onClick: function onClick() {
      if (noVisible) {
        setState(true);
      }

      if (_onClick) {
        _onClick();
      }
    }
  }, buttonRest), text), type === 'a' && React.createElement("a", _extends({
    onClick: function onClick() {
      if (noVisible) {
        setState(true);
      }

      if (_onClick) {
        _onClick();
      }
    }
  }, buttonRest), text), React.createElement(CustomModal, _extends({
    visible: noVisible ? state : visible,
    onCancel: function onCancel() {
      if (noVisible) {
        setState(false);
      }

      if (_onCancel) {
        _onCancel();
      }
    }
  }, modalRest), children));
};

var css$d = ".src-components-CustomForm-_customForm_LRxdd .ant-calendar-picker {\n  width: 100%;\n}\n.src-components-CustomForm-_customForm_LRxdd .src-components-CustomForm-_inline_3I9TF {\n  display: -webkit-box;\n  display: flex;\n}\n.src-components-CustomForm-_customForm_LRxdd .src-components-CustomForm-_inline_3I9TF .ant-form-item-control-wrapper {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n";
var styles$5 = {"customForm":"src-components-CustomForm-_customForm_LRxdd","inline":"src-components-CustomForm-_inline_3I9TF"};
styleInject(css$d);

var index$c = _Form.create()(function (_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      className = _ref.className,
      form = _ref.form,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 1 : _ref$columns,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === void 0 ? 24 : _ref$gutter,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? 'horizontal' : _ref$layout,
      restFormProps = _objectWithoutProperties(_ref, ["data", "className", "form", "columns", "gutter", "layout"]);

  var getFieldDecorator = form.getFieldDecorator;
  var cols = 24 / columns;
  var five = columns === 5;
  return React.createElement(_Form, _extends({
    className: classNames(styles$5.customForm, className)
  }, restFormProps), React.createElement(_Row, {
    gutter: gutter
  }, data.map(function (_ref2, index) {
    var label = _ref2.label,
        name = _ref2.name,
        component = _ref2.component,
        style = _ref2.style,
        className = _ref2.className,
        _ref2$colSpan = _ref2.colSpan,
        colSpan = _ref2$colSpan === void 0 ? 1 : _ref2$colSpan,
        rules = _ref2.rules,
        initialValue = _ref2.initialValue,
        restItemProps = _objectWithoutProperties(_ref2, ["label", "name", "component", "style", "className", "colSpan", "rules", "initialValue"]);

    return component ? React.createElement(_Col, {
      span: five ? 555 : cols * colSpan,
      key: index,
      style: five ? _objectSpread2({
        display: 'block',
        flex: '0 0 auto',
        float: 'left',
        width: "".concat(20 * colSpan, "%")
      }, style) : _objectSpread2({}, style),
      className: className
    }, React.createElement(_Form.Item, _extends({
      label: label,
      className: layout === 'inline' ? styles$5.inline : null
    }, restItemProps), getFieldDecorator(name || label, {
      rules: rules,
      initialValue: initialValue
    })(component))) : React.createElement(_Col, {
      span: five ? 555 : cols * colSpan,
      key: index,
      style: five && {
        display: 'block',
        flex: '0 0 auto',
        float: 'left',
        width: "".concat(20 * colSpan, "%")
      }
    }, React.createElement(_Form.Item, {
      label: " ",
      style: _objectSpread2({
        visibility: 'hidden'
      }, {
        display: layout === 'inline' && 'flex'
      })
    }, React.createElement(_Input, null)));
  })));
});

var usePagination = function usePagination() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$defaultPageSize = _ref.defaultPageSize,
      defaultPageSize = _ref$defaultPageSize === void 0 ? 10 : _ref$defaultPageSize,
      _ref$defaultCurrent = _ref.defaultCurrent,
      defaultCurrent = _ref$defaultCurrent === void 0 ? 1 : _ref$defaultCurrent;

  var _useState = useState(defaultPageSize),
      _useState2 = _slicedToArray(_useState, 2),
      pageSize = _useState2[0],
      setPageSize = _useState2[1];

  var _useState3 = useState(defaultCurrent),
      _useState4 = _slicedToArray(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1];

  return [pageSize, current, setCurrent];
};

var Axios = axios.create({
  baseURL: config.baseURL,
  timeout: 1000
}); // 请求拦截

Axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
}); // 响应拦截

Axios.interceptors.response.use(function (res) {
  var status = res.status;
  if (status === 200 && res.data) return res.data;else {
    return res;
  }
}, function (error) {
  return Promise.reject(error);
});

export { index as BasicLayout, index$7 as ConfigForm, CustomButton, CustomCard, CustomCardTabs, index$c as CustomForm, CustomModal, index$9 as CustomTable, CustomTree, IconFont, index$4 as Notification, index$1 as PageHeaderWrapper, index$a as SafeNumberInput, index$8 as SearchTree, index$5 as SwitchSystems, index$3 as SwitchTheme, index$6 as SystemsNav, index$b as TimeWeather, index$2 as UserMenu, Axios as request, usePagination };
