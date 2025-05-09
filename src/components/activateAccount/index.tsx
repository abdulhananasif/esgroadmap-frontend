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
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Account is Now Active
        </h2>
      </div>
    </div>
  );
};

export default ActivateAccount;
