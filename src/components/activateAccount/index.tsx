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
          Your Account is Not Active
        </h2>
        <p className="text-gray-600 mb-6">
          Please check your email inbox and click on the activation link we sent
          you. Once activated, you'll be able to access your dashboard.
        </p>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-blue-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12H8m0 0v8m0-8l8-8"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-500">
          Didn’t receive the email? Please check your spam folder or contact
          support.
        </p>
      </div>
    </div>
  );
};

export default ActivateAccount;
