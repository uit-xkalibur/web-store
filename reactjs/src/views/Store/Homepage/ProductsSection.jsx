import React, { Component } from 'react';
import { connect } from 'react-redux';
// reactstrap components
import { Col, Card, CardHeader, Row, Button, CardBody } from 'reactstrap';
// core components
import ProductsList from '../../../components/Products/ProductsList';
import { getRndInteger } from '../../../utils/helper';

class ProductsSection extends Component {
  render() {
    const products = getRandomProducts(this.props.products.products);
    return (
      <Card className="bg-white shadow mt--7 mx-5 position-relative" style={{ zIndex: 1 }}>
        <div className="container pt-5">
          <CardHeader className="bg-white border-0">
            <Row>
              <Col sm="12" md="9" lg="9" xl="9">
                <h2 className="mb-0">SẢN PHẨM NỔI BẬT</h2>
              </Col>
              <Col className="text-right">
                <Button color="primary" href="/store/products" style={{ width: "100%" }}>
                  Xem toàn bộ
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <ProductsList products={products} />
          </CardBody>
        </div>
      </Card>
    );
  }
}

function getRandomProducts(products) {
  if (0 === products.length) return [];
  const randIndexs = [];
  const randProducts = [];
  const numberOfIndexs = getRndInteger(3, 6);
  for (let index = 0; index < numberOfIndexs; index++) {
    let rndIndex = getRndInteger(0, products.length - 1);
    while (0 <= randIndexs.indexOf(rndIndex))
      rndIndex = getRndInteger(0, products.length - 1);
    randIndexs.push(rndIndex);
    randProducts.push(products[rndIndex]);
  }
  return randProducts;
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, null)(ProductsSection);