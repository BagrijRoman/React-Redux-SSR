import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { createLogger } from 'redux-logger';

import reducers from '../client/reducers';


export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  });

  const middleware = [
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
    // applyMiddleware(createLogger()),
  ];

  return createStore(
    reducers,
    {},
    compose(...middleware));
};
