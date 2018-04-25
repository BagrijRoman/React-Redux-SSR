import React from 'react';

import App from './app';
import HomePage from './pages/homePage';
import UsersListPage from './pages/usersListPage';
import NotFoundPage from './pages/notFoundPage';

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
        ...UsersListPage,
        path: '/users',
      },
      {
        ...NotFoundPage,
      },
    ],
  }
];
