import React, { Component } from 'react';
import { Container} from 'reactstrap';
import { connect } from 'react-redux';


// core components
import UserHeader from "../../components/Header/UserHeader";
import Tables from "../../components/Management/Tables"

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
        <Tables products={this.props.products.products}/>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, null)(UserProfileView);