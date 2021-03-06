import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { createHistory } from 'history';
import routes from './routes';
let handleCreateElement = (Component, props) => {
if(Component.hasOwnProperty('requestInitialData')){
let initialData = document.getElementById('initial-data').textContent;
if(initialData.length>0){
initialData = JSON.parse(initialData);
}
return <Component initialData={initialData} {...props} />;
} else {
return <Component {...props} />;
}
}
render((
<Router history={hashHistory} createElement={handleCreateElement}>{routes}</Router>
), document.getElementById('root'))
