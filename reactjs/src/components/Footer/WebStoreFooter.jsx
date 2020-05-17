import React, { Component } from 'react';

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

class WebStoreFooter extends Component {
	render() {
		return (
			<>
				<footer className="py-5">
					<Container>
						<Row className="align-items-center justify-content-xl-between">
							<Col xl="6">
								<div className="copyright text-center text-xl-left text-muted">
									© 2020{" "}
									<a className="font-weight-bold ml-1"
										href="/"
										onClick={e => e.preventDefault()}
									>
										UIT xKalibur
                </a>
								</div>
							</Col>
							<Col xl="6">
								<Nav className="nav-footer justify-content-center justify-content-xl-end">
									<NavItem>
										<NavLink href="/" onClick={e => e.preventDefault()}>
											UIT xKalibur
                  </NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/" onClick={e => e.preventDefault()}>
											About Us
                  </NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/" onClick={e => e.preventDefault()}>
											Delivery
                  </NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/" onClick={e => e.preventDefault()}>
											Support
                  </NavLink>
									</NavItem>
								</Nav>
							</Col>
						</Row>
					</Container>
				</footer>
			</>
		);
	}
}

export default WebStoreFooter;