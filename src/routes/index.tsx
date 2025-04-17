import Login from '../pages/login';
import SignUp from '../pages/signup';
import Checkout from '../pages/checkout';
import {RouteObject} from 'react-router-dom';
import DashboardLayout from '../pages/dashboardlayout';
import Dashboard from '../pages/dashboard';

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/signup',
    element: <SignUp />,
  },
  {
    path: '/auth/membership-account/membership-checkout',
    element: <Checkout />,
  },
  {
    path: '/auth/dashboard',
    element: <Dashboard />,
  },
];
