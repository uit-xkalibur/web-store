import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

import { DOMAIN } from '../../utils/apisCalling';
import { connect } from 'react-redux';
import { addBasket } from '../../redux/actions/addAction';
import store from '../../redux/store';

class ProductCard extends Component {
  render() {
    return (
      <Card>
        <CardImg src={`${DOMAIN}/${this.props.product.image}`} />
        <CardBody>
          <CardTitle style={{ height: 48 }}><b>{this.props.product.name}</b></CardTitle>
          <CardText>{this.props.product.price} Đ</CardText>
          <Button color="danger" onClick={()=>this.props.addBasket(this.props.product.name)}>
            Buy now
          </Button>
        </CardBody>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    code: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    }),
  addBasket: PropTypes.func,
};


export default connect(null, { addBasket }) (ProductCard);