import {Navigate} from 'react-router-dom';
import {ReactNode} from 'react';
import {isAuthenticated} from '../utils/auth';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to="/auth/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
