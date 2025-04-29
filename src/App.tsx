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
      navigate('/auth/login');
    }
  }, []);

  return <AppRoutes />;
};

export default App;
