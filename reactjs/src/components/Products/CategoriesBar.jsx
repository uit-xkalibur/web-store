import React, { Component } from 'react';
import { connect } from 'react-redux';

// reactstrap components
import { Nav, NavLink } from "reactstrap";

// redux
import store from '../../redux/store';
import { searchProduct } from '../../redux/actions/productActions';

// helper
import { getProducts } from '../../utils/helper';

class CategoriesBar extends Component {
  async changeCategory(category) {
    if ("Tất cả" === category) category = "";
    const products = await getProducts("", category);
    const productSearch = { search: "", category, products: products }
    store.dispatch(searchProduct(productSearch));
  }

  render() {
    return (
      <div className="py-5 pt-md-0">
        <h1>Categories</h1>
        <Nav vertical>
          {this.props.products.categories.map((category, key) => {
            return (
              <NavLink
                href="#" key={key}
                onClick={() => this.changeCategory(category)}
              >
                {this.props.products.category === category ?
                  <b className="text-danger">{category}</b> :
                  <>{category}</>
                }
              </NavLink>
            );
          })}
        </Nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, null)(CategoriesBar);