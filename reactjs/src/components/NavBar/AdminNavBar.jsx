import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

import { setCookiesValue } from '../../utils/helper';

class AdminNavBar extends Component {
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.viewTitle}
            </Link>
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UserDropdownMenu avatarImg={this.props.avatarImg} username={this.props.username} />
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

function UserDropdownMenu(props) {
  return (
    <UncontrolledDropdown nav>
      <DropdownToggle className="pr-0" nav>
        <Media className="align-items-center">
          <span className="avatar avatar-sm rounded-circle">
            <img alt="..." src={props.avatarImg} />
          </span>
          <Media className="ml-2 d-none d-lg-block">
            <span className="mb-0 text-sm font-weight-bold">
              {props.username}
            </span>
          </Media>
        </Media>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-arrow" right>
        <DropdownItem className="noti-title" header tag="div">
          <h6 className="text-overflow m-0">Welcome!</h6>
        </DropdownItem>
        <DropdownItem to="/admin/user-profile" tag={Link}>
          <i className="ni ni-single-02" />
          <span>My profile</span>
        </DropdownItem>
        <DropdownItem to="/admin/user-profile" tag={Link}>
          <i className="ni ni-settings-gear-65" />
          <span>Settings</span>
        </DropdownItem>
        <DropdownItem to="/admin/user-profile" tag={Link}>
          <i className="ni ni-calendar-grid-58" />
          <span>Activity</span>
        </DropdownItem>
        <DropdownItem to="/admin/user-profile" tag={Link}>
          <i className="ni ni-support-16" />
          <span>Support</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem href="#pablo" onClick={() => {
          setCookiesValue("userToken");
          window.location.replace("/auth/login");
        }}>
          <i className="ni ni-user-run" />
          <span>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown >
  );
}

export { AdminNavBar, UserDropdownMenu };

AdminNavBar.propTypes = {
  viewTitle: PropTypes.string,
  avatarImg: PropTypes.string,
  username: PropTypes.string,
};

UserDropdownMenu.propTypes = {
  avatarImg: PropTypes.string,
  username: PropTypes.string,
}