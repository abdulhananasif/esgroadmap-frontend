import Login from '../pages/login';
import SignUp from '../pages/signup';
import Checkout from '../pages/checkout';
import {RouteObject} from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import CarbonReduction from '../pages/carbonReduction';
import SupportTicket from '../pages/supportTicket';

export const routesConfig: RouteObject[] = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/carbon-reduction',
    element: <CarbonReduction />,
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
    path: '/support-tickets',
    element: <SupportTicket />,
  },
];
