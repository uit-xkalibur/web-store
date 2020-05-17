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

// assets/img/icons/common
const FacebookSVG = require("../../assets/img/icons/common/facebook.svg")
const GoogleSVG = require("../../assets/img/icons/common/google.svg")


class LoginView extends Component {
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
                  <Input
                    placeholder="Username"
                    onChange={e => console.log(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={e => console.log(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <CheckBox
                label="Remember"
                onChange={e => console.log(e.target.checked)}
              />
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
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