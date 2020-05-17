import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  render() {
    return (
      <div className="custom-control custom-control-alternative custom-checkbox">
        <input
          className="custom-control-input"
          id=" customCheckLogin"
          type="checkbox"
          onChange={this.props.onChange}
        />
        <label
          className="custom-control-label"
          htmlFor=" customCheckLogin"
        >
          <span className="text-muted">{this.props.label}</span>
        </label>
      </div>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default CheckBox;