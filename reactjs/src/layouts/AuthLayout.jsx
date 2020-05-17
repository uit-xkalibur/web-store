import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import WebStoreFooter from '../components/Footer/WebStoreFooter';
import AuthNavBar from '../components/NavBar/AuthNavBar';

import routes from '../utils/routes';

class AuthLayout extends Component {
	componentDidMount() {
		document.body.classList.add("bg-default");
	}
	componentWillUnmount() {
		document.body.classList.remove("bg-default");
	}

	render() {
		return (
			<>
				<AuthNavBar />
				<div className="main-content">
					<div className="header bg-gradient-info py-7 py-lg-8">
						<Container>
							<div className="header-body text-center mb-7">
								<Row className="justify-content-center">
									<Col lg="5" md="6">
										<h1 className="text-white">Welcome!</h1>
										<p className="text-lead text-light">
											Use these awesome forms to login or create new account in
											your project for free.
                    </p>
									</Col>
								</Row>
							</div>
						</Container>
						<SkewSeparator />
					</div>
					{/* Page content */}
					<Container className="mt--8 pb-5">
						<Row className="justify-content-center">
							<Switch>
								{getRoutes(routes)}
								<Redirect from="*" to="/auth/login" />
							</Switch>
						</Row>
					</Container>
				</div>
				<WebStoreFooter />
			</>
		);
	}
}

function getRoutes(routes) {
	return routes.map((route, key) => {
		if ("/auth" === route.layout)
			return (
				<Route key={key} path={route.layout + route.path} component={route.component} />
			);
		else
			return null;
	});
}

function SkewSeparator() {
	return (
		<div className="separator separator-bottom separator-skew zindex-100">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0"
			>
				<polygon
					className="fill-default"
					points="2560 0 2560 100 0 100"
				/>
			</svg>
		</div>
	);
}

export default AuthLayout;