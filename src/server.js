/* eslint no-console: "off"*/

import path from 'path';
import {Server} from 'http';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import routes from './routes';
import {match, RouterContext} from 'react-router'
import  contacts  from './data/contacts';

const app = new Express();
const server = new Server(app);



// use ejs templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));
app.get('/getContacts', (req, res) => {
  var numberOfContacts = req.query.no_of_contacts || 10; // default 10 contacts
  res.setHeader('Content-Type', 'application/json');
  var contacts_parsed = [];
  // there are six contacts initially
  for (let i = 0; i < Math.floor(numberOfContacts / 6); i++) {
    contacts_parsed = contacts_parsed.concat(contacts);
  }

  // add more contacts based on remainder
  for (let i = 0; i < (numberOfContacts % 6); i++) {
    contacts_parsed.push(contacts[i]);
  }

return res.json(contacts_parsed);
});

app.get('/test', (req, res) => {
  return res.json({test: {first: 'this is the test string'}});

})
;

let getPropsFromRoute = ({routes}, componentProps) => {
  let props = {};
  let lastRoute = routes[routes.length - 1];
  routes.reduceRight((prevRoute, currRoute) => {
    componentProps.forEach(componentProp => {
    if (!props[componentProp] && currRoute.component[componentProp]) {
    props[componentProp] = currRoute.component[componentProp];
  }
  });
  },lastRoute);
  return props;
};
let renderRoute = (response, renderProps) =>
{
  let routeProps = getPropsFromRoute(renderProps, ['requestInitialData']);
  if (routeProps.requestInitialData) {
    routeProps.requestInitialData().then((data) => {
      let handleCreateElement = (Component, props) => (
      < Component initialData = {data} {...props} />
    );
      response.render('index', {
        reactInitialData: JSON.stringify(data),
        content: renderToString(< RouterContext createElement = {handleCreateElement} {...renderProps} />)
    });
    });
  } else {
    response.render('index', {
      reactInitialData: null,
      content: renderToString( < RouterContext {...renderProps} />)
  });
  }
};

app.get('*', (request, response) => {
  match({routes, location: request.url
},
(error, redirectLocation, renderProps) =>
{
  if (error) {
    response.status(500).send(error.message);
  } else if (redirectLocation) {
    response.redirect(302, redirectLocation.pathname + redirectLocation.search);
  } else if (renderProps) {
    renderRoute(response, renderProps);
  } else {
    response.status(404).send('Not found');
  }
});
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    `
      Server running on http://localhost:${port} [${env}]
      Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
    `);
})
;
