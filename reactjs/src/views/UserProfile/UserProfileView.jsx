import React, { Component } from 'react';
import { Container} from 'reactstrap';

// core components
import UserHeader from "../../components/Header/UserHeader";

class UserProfileView extends Component {
  render() {
    return (
      <>
        <UserHeader
          coverImg={require("../../assets/img/data/admin-cover-banner.png")}
          username="Administartor"
        />
        {/* Page content */}
        <Container fluid>
        </Container>
      </>
    );
  }
}

export default UserProfileView;