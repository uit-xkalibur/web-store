import React, { Component } from 'react';
import PropTypes from 'prop-types';
// reactstrap components
import { Row, Col } from "reactstrap";

// core components
import ProductCards from './ProductCard';

export class ProductsList extends Component {
  render() {
    if (this.props.hasCategories) {
      return (
        <Row>
          {this.props.products.map(product => {
            return (
              <Col key={product.id} xl="4" lg="6" md="12" sm="12" className="mb-5">
                <ProductCards product={product} />
              </Col>
            );
          })}
        </Row>
      );
    }
    else
      return (
        <Row>
          {this.props.products.map(product => {
            return (
              <Col key={product.id} xl="4" lg="4" md="6" sm="12" className="mb-5">
                <ProductCards product={product} />
              </Col>
            );
          })}
        </Row>
      );
  }
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsList;