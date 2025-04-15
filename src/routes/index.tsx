import Login from '../pages/login';
import SignUp from '../pages/signup';
import {RouteObject} from 'react-router-dom';

export const routesConfig: RouteObject[] = [
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/signup',
    element: <SignUp />,
  },
];
