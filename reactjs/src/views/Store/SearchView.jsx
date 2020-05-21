import React, { Component } from 'react';
// reactstrap components
import { Col, Card, CardHeader, Row, Button, CardBody } from 'reactstrap';
// core components
import ProductsList from '../../components/Products/ProductsList';

// helper
import { getProducts } from '../../utils/helper';

class SearchView extends Component {
  state = { products: [], search: "" }
  async componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('Search');
    const products = await getProducts(search, "");
    this.setState({ products: products, search: search });
  }

  render() {
    return (
      <Card className="bg-white shadow mt--7 mx-5 position-relative" style={{ zIndex: 1 }}>
        <div className="container pt-5">
          <CardHeader className="bg-white border-0">
            <Row>
              <Col sm="12" md="9" lg="9" xl="9">
                <h2 className="mb-0">
                  TÌM KIẾM SẢN PHẨM: "{this.state.search}"
              </h2>
              </Col>
              <Col className="text-right">
                <Button color="primary" href="/store/products" style={{ width: "100%" }}>
                  Xem toàn bộ
              </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <ProductsList products={this.state.products} />
          </CardBody>
        </div>
      </Card>
    );
  }
}

export default SearchView;