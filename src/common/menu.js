import React from 'react';
import Icon from '../components/Icon/Menu';

const menuData = [
  {
    name: 'Gitke',
    // icon: 'safety',
    icon: <Icon type="overview" />,
    path: 'dashboard',
    children: [
      {
        name: 'Your work',
        icon: <Icon type="overview" />,
        path: 'overview',
      },
      {
        name: 'Repositories',
        icon: <Icon type="repositories" />,
        path: 'repositories',
      },
      {
        name: 'Issues',
        icon: <Icon type="issues" />,
        path: 'issues',
      },
      {
        name: 'Pull Requests',
        icon: <Icon type="pullrequests" />,
        path: 'pullrequests',
      },
      {
        name: 'Snippets',
        icon: <Icon type="snippets" />,
        path: 'snippets',
      },
    ],
  },
  {
    name: 'Snippets',
    icon: <Icon type="snippets" />,
    path: 'snippets',
  },
  {
    name: 'User Settings',
    icon: <Icon type="settings" />,
    path: 'account',
    children: [
      {
        name: 'Edit Profile',
        path: 'profile',
      },
      {
        name: 'Edit Password',
        path: 'password',
      },
      {
        name: 'Emails',
        path: 'emails',
      },
      {
        name: 'SSH Keys',
        path: 'keys',
      },
    ],
  },
  {
    name: '用户管理',
    path: 'user',
  },
];


/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;
function isUrl(path) {
  return reg.test(path);
}
function formatter(data, parentPath = '/', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);