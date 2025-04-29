import {useEffect} from 'react';
import {AppRoutes} from './AppRoutes';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {RootState} from './store';

const App = () => {
  const navigate = useNavigate();
  const {isLoggedIn, isActive} = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (isLoggedIn) {
      if (!isActive) {
        navigate('/auth/activate-account');
      } else {
        navigate('/dashboard');
      }
    } else {
      navigate('/auth/login');
    }
  }, [isLoggedIn, isActive, navigate]);

  return <AppRoutes />;
};

export default App;
