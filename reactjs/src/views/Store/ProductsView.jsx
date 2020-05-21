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
} from "reactstrap";

// core components
import CategoriesBar from '../../components/Products/CategoriesBar';
import ProductsList from '../../components/Products/ProductsList';
import { SanPhamServiceApis } from '../../utils/helper';


class ProductsView extends Component {
  state = {
    categories: [],
    products: [],
  }
  async componentDidMount() {
    await this.getCategories();
    await this.getProducts("", "");
  }

  getCategories = async () => {
    try {
      const response = await SanPhamServiceApis.categories();
      const json = await response.json();
      switch (response.status) {
        case 200:
          this.setState({ categories: json.result });
          break;

        default:
          Notification.alert(`Error ${response.status}`, json.error.detail, "danger")
          break;
      }

    } catch (error) {
      Notification.alert(`Error ${error.status}`, error.title, "danger");
    }
  }

  getProducts = async (search, category) => {
    try {
      const response = await SanPhamServiceApis.search(search, category);
      const json = await response.json();
      switch (response.status) {
        case 200:
          this.setState({ products: json.result });
          break;

        default:
          Notification.alert(`Error ${response.status}`, json.error.detail, "danger")
          break;
      }

    } catch (error) {
      Notification.alert(`Error ${error.status}`, error.title, "danger");
    }
  }

  render() {
    return (
      <div className="mt--7 mx-4 position-relative" style={{ zIndex: 1 }}>
        <Col>
          <Card className="bg-white shadow">
            {
              this.props.isViewMore &&
              <div className="container pt-5">
                <CardHeader className="bg-white border-0">
                  <Row>
                    <Col><h2 className="mb-0">{this.props.title}</h2></Col>
                    <Col className="text-right">
                      {
                        this.props.isViewMore &&
                        <Button color="primary" href="/store/products">
                          Xem toàn bộ sản phẩm
                        </Button>
                      }
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <ProductsList
                        hasCategories={false}
                        products={this.state.products.slice(1, 4)}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </div>
            }
            {
              !this.props.isViewMore &&
              <Row className="pt-0 pt-md-7 mx-3 mx-md-7">
                <Col xl="3" lg="4" md="5" sm="12">
                  <CategoriesBar
                    categories={this.state.categories}
                    onCategoryClick={category => this.getProducts("", category)}
                  />
                </Col>
                <Col xl="9" lg="8" md="7" sm="12" >
                  <ProductsList
                    hasCategories={true}
                    products={this.state.products}
                  />
                </Col>
              </Row>
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