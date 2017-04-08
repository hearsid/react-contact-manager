/* eslint no-console: "off"*/

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from './routes';

import { match, RoutingContext } from 'react-router'
import AsyncProps, { loadPropsOnServer } from 'async-props'
import  contacts  from './data/contacts';

const app = new Express();
const server = new Server(app);

import { routesConfig } from './routesConfig';
import { Layout } from './components/Layout';
import { ReactRouter, Router, BrowerHistory, hashHistory } from 'react-router';


// use ejs templating engine
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));
console.log(contacts);
app.get('/getContacts', (req, res) => {
  var numberOfContacts = req.query.no_of_contacts || 10; // default 10 contacts
  res.setHeader('Content-Type', 'application/json');
  var contacts_parsed = [];
  // there are six contacts initially
  for(let i =0 ; i< Math.floor(numberOfContacts/6) ; i++) {
    contacts_parsed = contacts_parsed.concat(contacts);
  }

  // add more contacts based on remainder
  for(let i=0; i< (numberOfContacts%6) ; i++ ) {
     contacts_parsed.push(contacts[i]);
  }

  return res.json(contacts_parsed);

});

app.get('/player', (req, res) => {
  return res.json({ test: {first:'this is the test string'} });

});
// universal routing and rendering
// app.get('*', (req, res) => {
//   let markup = '';
//   let status = 200;
//
//   if (process.env.UNIVERSAL) {
//     const context = {};
//     markup = renderToString(
//       <Router location={req.url} context={context}>
//         <App />
//       </Router>,
//     );
//
//     // context.url will contain the URL to redirect to if a <Redirect> was used
//     if (context.url) {
//       return res.redirect(302, context.url);
//     }
//
//     if (context.is404) {
//       status = 404;
//     }
//   }
//
//   return res.status(status).render('index', { markup });
// });
app.get('*', (req, res) => {
  match({ routes: routesConfig, location: req.url }, (err, redirect, renderProps) => {

      console.log(req.url);
      // 1. load the props
      loadPropsOnServer(renderProps, null, (err, asyncProps, scriptTag) => {

        // 2. use `AsyncProps` instead of `RoutingContext` and pass it
        //    `renderProps` and `asyncProps`
        const appHTML = renderToString(
          <Layout>
            <AsyncProps {...renderProps} {...asyncProps} />
         </Layout>

        )

        // 3. render the script tag into the server markup
        // res.send(appHTML)
          return res.render('index.html', { markup: appHTML });

      })
    })

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
});
