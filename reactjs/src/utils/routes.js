import LoginView from '../views/Login/LoginView';
import UserProfileView from '../views/UserProfile/UserProfileView';
import ProductsView from '../views/Store/ProductsView';
import HomepageView from '../views/Store/HomepageView';

const routes = [
  {
    path: "/login",
    name: "Login View",
    component: LoginView,
    layout: "/auth",
  },
  {
    path: "/user-profile",
    name: "User Profile View",
    icon: "ni ni-single-02 text-yellow",
    component: UserProfileView,
    layout: "/admin",
  },
  {
    path: "/homepage",
    name: "Store Homepage View",
    component: HomepageView,
    layout: "/store",
  },
  {
    path: "/products",
    name: "Store Products View",
    component: ProductsView,
    layout: "/store",
  },
]

export default routes;