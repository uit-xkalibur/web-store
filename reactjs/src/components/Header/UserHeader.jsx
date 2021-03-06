import React, { Component } from 'react';
import PropTypes from 'prop-types';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class UserHeader extends Component {
  render() {
    return (
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + this.props.coverImg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello {this.props.username}</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've
                made with your work and manage your projects or assigned tasks
              </p>
              <Button
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

UserHeader.propTypes = {
  coverImg: PropTypes.string,
  username: PropTypes.string,
};

export default UserHeader;