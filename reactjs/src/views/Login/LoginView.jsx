import React, { Component } from 'react';
import PropTypes from 'prop-types';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

// Own componets
import CheckBox from '../../components/Utils/CheckBox';
import Notification from '../../components/Utils/Notification';

// Service APIs
import { UsersServiceApis } from '../../utils/apisCalling';
import { setCookiesValue } from '../../utils/helper';

// assets/img/icons/common
const FacebookSVG = require("../../assets/img/icons/common/facebook.svg")
const GoogleSVG = require("../../assets/img/icons/common/google.svg")


class LoginView extends Component {
  state = { username: "", password: "" }

  onSignInClick = async () => {
    const username = document.getElementById("login-username-input").value;
    const password = document.getElementById("login-password-input").value;
    if (!username) {
      Notification.alert(
        "Information",
        "Username is required, please try with a valid value !",
        "danger");
      return;
    }
    if (!password) {
      Notification.alert(
        "Information",
        "Password is required, please try with a valid value !",
        "danger");
      return;
    }
    try {
      const response = await UsersServiceApis.login(username, password);
      const json = await response.json();
      switch (response.status) {
        case 200:
          Notification.alert("Success! ", "Login successful", "success");
          setCookiesValue("userToken", json.result.token);
          window.location.replace("/admin/user-profile");
          break;

        default:
          Notification.alert(`Error ${response.status}`, json.error.detail, "danger")
          break;
      }

    } catch (error) {
      Notification.alert(`Error ${error.status}`, error.title, "danger");
    }
  }

  render() {
    return (
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <SocialButton label="Facebook" svg={FacebookSVG} onClick={e => e.preventDefault()} />
              <SocialButton label="Google" svg={GoogleSVG} onClick={e => e.preventDefault()} />
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-circle-08" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input id="login-username-input" placeholder="Username" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input id="login-password-input"
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <CheckBox
                label="Remember"
                onChange={e => console.log(e.target.checked)}
              />
              <div className="text-center">
                <Button className="my-4" color="primary" type="button"
                  onClick={this.onSignInClick}
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    );
  }
}

class SocialButton extends React.Component {
  render() {
    return (
      <Button
        className="btn-neutral btn-icon"
        color="default"
        href="#pablo"
        onClick={this.props.onClick}
      >
        <span className="btn-inner--icon">
          <img
            alt="..."
            src={this.props.svg}
          />
        </span>
        <span className="btn-inner--text">{this.props.label}</span>
      </Button>
    );
  }
}

SocialButton.propTypes = {
  label: PropTypes.string,
  svg: PropTypes.string,
  onClick: PropTypes.func,
}

export default LoginView;