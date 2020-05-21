import React, { Component } from 'react';
import PropTypes from 'prop-types';

// core components
import ProductsSection from './ProductsSection';


class HomepageView extends Component {
  render() {
    return (
      <ProductsSection />
    );
  }
}

HomepageView.propTypes = {

};

export default HomepageView;