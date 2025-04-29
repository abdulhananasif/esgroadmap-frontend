import Login from '../pages/login';
import SignUp from '../pages/signup';
import Checkout from '../pages/checkout';
import {RouteObject} from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import CarbonReduction from '../pages/carbonReduction';
import ActivateAccount from '../components/activateAccount';

export const routesConfig: RouteObject[] = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/carbon-reduction',
    element: <CarbonReduction />,
  },
  // {
  //   path: '/waste-and-recycling',
  //   element: <WasteAndRecycling />,
  // },
  // {
  //   path: '/water-management',
  //   element: <WaterManagement />,
  // },
  // {
  //   path: '/gender-diversity',
  //   element: <GenderDiversity />,
  // },
  // {
  //   path: '/supply-chain',
  //   element: <SupplyChain />,
  // },
  // {
  //   path: '/renewables',
  //   element: <Renewables />,
  // },
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
    path: '/auth/activate-account',
    element: <ActivateAccount />,
  },
];
