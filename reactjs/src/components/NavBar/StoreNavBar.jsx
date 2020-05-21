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
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";



class StoreNavBar extends Component {
  async componentDidMount() {
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

  handleSearchKeyPress = async (event) => {
    if (13 === event.charCode)
      window.location.replace(`/store/search?Search=${event.target.value}`);
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
              <div className="navbar-search navbar-search-dark ml-lg-auto d-none d-md-inline">
                <div className="mb-0">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-search" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Search" type="text"
                      onKeyPress={e => this.handleSearchKeyPress(e)}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="mt-4 mb-3 d-md-none">
                <InputGroup className="input-group-rounded input-group-merge">
                  <Input
                    aria-label="Search"
                    className="form-control-rounded form-control-prepended"
                    placeholder="Search"
                    type="search"
                    onKeyPress={this.handleSearchKeyPress}
                  />
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>
              {/* Navigate bar items */}
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="/store/products"
                    tag={Link}
                  >
                    <i className="ni ni-collection" />
                    <span className="nav-link-inner--text d-none d-lg-inline d-max-md-inline">
                      Sản phẩm
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="#"
                    onClick={e => e.preventDefault()}
                    tag={Link}
                  >
                    <i className="ni ni-cart" />
                    <span className="nav-link-inner--text d-none d-lg-inline d-max-md-inline">
                      Giỏ hàng
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link-icon" to="/auth/login" tag={Link}>
                    <i className="ni ni-lock-circle-open" />
                    <span className="nav-link-inner--text d-none d-lg-inline d-max-md-inline">
                      Đăng nhập
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    to="#"
                    onClick={e => e.preventDefault()}
                    tag={Link}
                  >
                    <i className="ni ni-square-pin" />
                    <span className="nav-link-inner--text d-none d-lg-inline d-max-md-inline">
                      Cửa hàng
                    </span>
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

StoreNavBar.propTypes = {
  scrollHeight: PropTypes.number.isRequired,
};

export default StoreNavBar;