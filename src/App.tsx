import {useEffect} from 'react';
import {AppRoutes} from './AppRoutes';
import {isAuthenticated} from './utils/auth';
import {useNavigate} from 'react-router-dom';

const App = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     navigate('/dashboard');
  //   } else {
  //     navigate('/auth/login');
  //   }
  // }, []);
  return <AppRoutes />;
};

export default App;
