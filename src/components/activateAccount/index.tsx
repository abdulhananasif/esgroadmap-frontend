import axios from 'axios';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/type';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setIsActive} from '../../slice';

const ActivateAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector((state: RootState) => state.app);
  const activate = async () => {
    await axios.put(
      'https://esgroadmap-backend.vercel.app/api/v1/user/activate',
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(setIsActive(true));
    navigate('/dashboard');
  };
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/dashboard');
    } else {
      activate();
    }
  }, [isLoggedIn]);
  return <div>ActivateAccount</div>;
};

export default ActivateAccount;
