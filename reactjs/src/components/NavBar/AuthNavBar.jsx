import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class AuthNavBar extends Component {
  componentDidMount() {
    if (this.props.scrollHeight)
      window.addEventListener("scroll", this.handleScrollHeight);
  }
  componentWillUnmount() {
    if (this.props.scrollHeight)
      window.removeEventListener("scroll", this.handleScrollHeight);
  }

  handleScrollHeight = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > this.props.scrollHeight)
      document.getElementById("auth-nav").classList.add("bg-dark");
    else
      document.getElementById("auth-nav").classList.remove("bg-dark");
  }

  render() {
    return (
      <>
        <Navbar
          id="auth-nav"
          fixed="top"
          className="navbar-top navbar-horizontal navbar-dark"
          expand="md"
        >
          <Container className="px-4">
            {/* Brand icon and home link */}
            <NavbarBrand to="/store" tag={Link}>
              <img alt="..." src={require("../../assets/img/brand/awakecup-brand-react-white.png")} />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar-collapse-main">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
              {/* Responsive naviagte bar */}
              <div className="navbar-collapse-header d-md-none">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/store">
                      <img alt="..." src={require("../../assets/img/brand/awakecup-brand-react.png")} />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar-collapse-main">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              {/* Navigate bar items */}
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="#"
                    onClick={e => e.preventDefault()}
                    tag={Link}
                  >
                    <i className="ni ni-key-25" />
                    <span className="nav-link-inner--text">Register</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="#"
                    onClick={e => e.preventDefault()}
                    tag={Link}
                  >
                    <i className="ni ni-lock-circle-open" />
                    <span className="nav-link-inner--text">Login</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="#"
                    onClick={e => e.preventDefault()}
                    tag={Link}
                  >
                    <i className="ni ni-single-02" />
                    <span className="nav-link-inner--text">Profile</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

AuthNavBar.propTypes = {
  scrollHeight: PropTypes.number.isRequired,
};

export default AuthNavBar;