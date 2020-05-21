import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
// reactstrap components
import { Row, Col } from "reactstrap";

// core components
import ProductCards from './ProductCard';

class ProductsList extends Component {
  render() {
    const productsList = this.props.extended ?
      <ProductsListExtend products={this.props.products} /> :
      <ProductsListNormal products={this.props.products} />

    return (
      <Row>{productsList}</Row>
    );
  }
}

function ProductsListNormal(props) {
  return props.products.map(product => {
    return (
      <Col key={product.id} xl="4" lg="4" md="6" sm="12" className="mb-5">
        <ProductCards product={product} />
      </Col>
    );
  });
}

function ProductsListExtend(props) {
  return props.products.map(product => {
    return (
      <Col key={product.id} xl="4" lg="6" md="12" sm="12" className="mb-5">
        <ProductCards product={product} />
      </Col>
    );
  });
}

ProductsList.propTypes = {
  products: PropTypes.array,
  extended: PropTypes.bool,
};

ProductsList.defaultProps = {
  products: [],
  extended: false,
};

export default ProductsList;