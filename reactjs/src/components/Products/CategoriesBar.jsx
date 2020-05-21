import React, { Component } from 'react';
import PropTypes from 'prop-types';

// reactstrap components
import { Nav, NavLink } from "reactstrap";

class CategoriesBar extends Component {
  render() {
    return (
      <div className="py-5 pt-md-0">
        <h1>Catrgories</h1>
        <Nav vertical>
          {this.props.categories.map((category, key) => {
            return (
              <NavLink
                href="#" key={key}
                onClick={() => {
                  if (this.props.onCategoryClick)
                    this.props.onCategoryClick(category);
                }}
              >
                {category}
              </NavLink>
            );
          })}
        </Nav>
      </div>
    );
  }
}

CategoriesBar.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategoryClick: PropTypes.func,
};

export default CategoriesBar;