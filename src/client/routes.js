import React from 'react';

import App from './app';
import HomePage from './pages/homePage';
import UsersListPage from './pages/usersListPage';
import NotFoundPage from './pages/notFoundPage';
import AdminsListPage from './pages/adminsListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AdminsListPage,
        path: '/admins',
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...NotFoundPage,
      },
    ],
  }
];
