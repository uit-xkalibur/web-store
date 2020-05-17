import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

// reactstrap components
import { Container } from 'reactstrap';

// core components
import WebStoreFooter from '../components/Footer/WebStoreFooter';
import AdminSlidebar from '../components/NavBar/AdminSlidebar';
import { AdminNavBar } from '../components/NavBar/AdminNavBar';

import routes from '../utils/routes';

class AdminLayout extends Component {
	render() {
		return (
			<>
				<AdminSlidebar
					routes={routes}
					logo={{
						innerLink: "/admin/index",
						imgSrc: require("../assets/img/brand/awakecup-brand-react.png"),
						imgAlt: "..."
					}}
					avatarImg={require("../assets/img/data/admin-avatar.png")}
					username="Administartor"
				/>
				<div className="main-content" ref="mainContent">
					<AdminNavBar
						viewTitle={getViewTitle(routes, this.props.location.pathname)}
						avatarImg={require("../assets/img/data/admin-avatar.png")}
						username="Administartor"
					/>
					<Switch>
						{getRoutes(routes)}
						<Redirect from="*" to="/admin/user-profile" />
					</Switch>
					<Container fluid>
						<WebStoreFooter />
					</Container>
				</div>
			</>
		);
	}
}

function getRoutes(routes) {
	return routes.map((route, key) => {
		if ("/admin" === route.layout)
			return (
				<Route key={key} path={route.layout + route.path} component={route.component} />
			);
		else
			return null;
	});
}

function getViewTitle(routes, path) {
	for (let i = 0; i < routes.length; i++) {
		if (path.indexOf(routes[i].layout + routes[i].path) !== -1)
			return routes[i].name;
	}
	return "ViewTitle";
};


AdminLayout.propTypes = {

};

export default AdminLayout;