import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './assets/css/web-store.css';
import './assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import StoreLayout from './layouts/StoreLayout';

ReactDOM.render(
	<BrowserRouter >
		<Switch >
			<Route path="/store" render={props => < StoreLayout {...props} />} />
			<Route path="/auth" render={props => < AuthLayout {...props} />} />
			<Route path="/admin" render={props => < AdminLayout {...props} />} />
			
			<Redirect from="/" to="/store" />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();