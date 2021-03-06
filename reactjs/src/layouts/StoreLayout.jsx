import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// core components
import StoreNavBar from '../components/NavBar/StoreNavBar';
import SlideShow from '../components/Utils/SlideShow';
import WebStoreFooter from '../components/Footer/WebStoreFooter';
import Notification from '../components/Utils/Notification';

import routes from '../utils/routes';

// redux
import store from '../redux/store';
import { categoriesProduct, searchProduct } from '../redux/actions/productActions';

// helper
import { getCategories, getProducts } from '../utils/helper';

class StoreLayout extends Component {
  async componentDidMount() {
    document.body.classList.add("bg-darker");
    const categories = ["Tất cả"].concat(await getCategories());
    const products = await getProducts("", "");
    store.dispatch(categoriesProduct(categories));
    const productSearch = { search: "", category: "Tất cả", products: products }
    store.dispatch(searchProduct(productSearch));
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-darker");
  }

  render() {
    return (
      <>
        <StoreNavBar scrollHeight={480} />
        <div className="main-content">
          <SlideShow />
          <div>
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to="/store/homepage" />
            </Switch>
          </div>
        </div>
        <WebStoreFooter />
      </>
    );
  }
}

function getRoutes(routes) {
  return routes.map((route, key) => {
    if ("/store" === route.layout)
      return (
        <Route key={key} path={route.layout + route.path} component={route.component} />
      );
    else
      return null;
  });
}

export default StoreLayout;