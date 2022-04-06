import {
  Home
} from "../pages";

// Login or Sign in Routes
export const Auth = [
  // { path: "/signup", exact: true, component: SignUpPage },
];

// Public Routes
export const Public = [
  { path: "/", exact: true, component: Home }
];
// Private Routes
export const Private = [
  // { path: "/welcome-board", exact: true, component: WelcomeBoard },
  // { path: "/order-details/:id", exact: true, component: OrderDetails },
];

