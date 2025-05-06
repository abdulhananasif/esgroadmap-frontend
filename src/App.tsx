import {useEffect} from 'react';
import {AppRoutes} from './AppRoutes';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {RootState} from './store';

const App = () => {
  const navigate = useNavigate();
  const {isLoggedIn} = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      const currentPath = window.location.pathname;
      const authPaths = [
        '/auth/login',
        '/auth/signup',
        '/auth/activate-account',
        '/auth/membership-account/membership-checkout',
      ];

      if (!authPaths.includes(currentPath)) {
        navigate('/auth/login');
      }
    }
  }, [isLoggedIn, navigate]);

  return <AppRoutes />;
};

export default App;
