import LoginView from '../views/Login/LoginView';
import UserProfileView from '../views/UserProfile/UserProfileView';

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
]

export default routes;