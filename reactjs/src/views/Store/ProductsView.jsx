import React, { Component } from 'react';
import PropTypes from 'prop-types';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Nav,
  NavLink,
} from "reactstrap";
import ProductsList from '../../components/Cards/ProductsList';


class ProductsView extends Component {
  render() {
    return (
      <div className="mt--7 mx-4 position-relative" style={{ zIndex: 1 }}>
        <Col>
          <Card className="bg-white shadow">
          {
                      this.props.isViewMore &&
            <div className="container pt-5">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">{this.props.title}</h2> 
                  </Col>
                  <Col className="text-right" xs="4">
                    {
                      this.props.isViewMore &&
                      <Button color="primary" href="/store/products">
                        Xem toàn bộ sản phẩm
                      </Button>
                    }
                  </Col> 
                </Row>
              </CardHeader>
              <CardBody style={{ height: 500 }}>

              </CardBody>
            </div>
  }
{
  !this.props.isViewMore &&  
<Row>
  <Col xs="3" className="text-center">
  <h1>Catrgories</h1>
      <Nav vertical>
        <NavLink href="#">Link</NavLink> 
		<NavLink href="#">Link</NavLink> 
		<NavLink href="#">Another Link</NavLink> 
		<NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
      </Col>
      <Col>       
  <ProductsList/></Col> </Row>
  }
          </Card>
        </Col>
      </div>
    );
  }
}

ProductsView.propTypes = {
  title: PropTypes.string.isRequired,
  isViewMore: PropTypes.bool,
};

ProductsView.defaultProps = {
  isViewMore: false,
  title: "SẢN PHẨM",
};

export default ProductsView;