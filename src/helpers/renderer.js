import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config';
import serealize from 'serialize-javascript';

import routes from '../client/routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
      </head>  
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serealize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>    
    </html>
  `;
};

