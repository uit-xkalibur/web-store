import React, { Component } from 'react';
import { connect } from 'react-redux';

// reactstrap components
import { Card, Row, Col } from "reactstrap";

// core components
import CategoriesBar from '../../components/Products/CategoriesBar';
import ProductsList from '../../components/Products/ProductsList';

class ProductsView extends Component {
  render() {
    return (
      <Card className="bg-white shadow mt--7 mx-4 position-relative" style={{ zIndex: 1 }}>
        <Row className="pt-0 pt-md-7 mx-3 mx-md-7">
          <Col xl="3" lg="4" md="5" sm="12">
            <CategoriesBar />
          </Col>
          <Col xl="9" lg="8" md="7" sm="12" >
            <ProductsList extended={true} products={this.props.products.products} />
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, null)(ProductsView);
