import React, { Component } from 'react';
import ProductsList from "../components/Cards/ProductsList"
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

// reactstrap components
import { Container, Row, Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';

// core components
import WebStoreFooter from '../components/Footer/WebStoreFooter';
import AdminSlidebar from '../components/NavBar/AdminSlidebar';
import { AdminNavBar } from '../components/NavBar/AdminNavBar';

// utils codes
import routes from '../utils/routes';
import * as helper from '../utils/helper';

class ProductsLayout extends Component {
	render() {
		return (
			<>
				
		<Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main">
			<NavbarBrand className="pt-0" >
              <img
                className="navbar-brand-img"
                src={require("../assets/img/brand/awakecup-brand-react.png")}
              />
            </NavbarBrand>
      <hr />
      <h1>Catrgories</h1>
      <Nav vertical>
        <NavLink href="#">Link</NavLink> 
		<NavLink href="#">Link</NavLink> 
		<NavLink href="#">Another Link</NavLink> 
		<NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>        
      	</Navbar>

				
				<div className="main-content" ref="mainContent">
					<AdminNavBar
						viewTitle={getViewTitle(routes, this.props.location.pathname)}
						avatarImg={require("../assets/img/data/admin-avatar.png")}
						username="Administartor"
					/>

					
						<ProductsList/>
						
					
					<Container fluid>
						<WebStoreFooter />
					</Container>
				</div>
			</>
		);
	}
}



function getViewTitle(routes, path) {
	for (let i = 0; i < routes.length; i++) {
		if (path.indexOf(routes[i].layout + routes[i].path) !== -1)
			return routes[i].name;
	}
	return "ViewTitle";
};

export default ProductsLayout;