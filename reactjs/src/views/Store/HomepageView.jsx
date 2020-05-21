import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsView from './ProductsView';

class HomepageView extends Component {
  render() {
    return (
      <div>
        <ProductsView title="SẢN PHẨM NỔI BẬT" isViewMore={true} />
      </div>
    );
  }
}

HomepageView.propTypes = {

};

export default HomepageView;