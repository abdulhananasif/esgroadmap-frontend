import {FunctionComponent, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';

import Input from '../../ui/input';
import Button from '../../ui/button';
import {LoginFormData, loginSchema} from '../../../validations/schema/auth';
import {setIsLoggedIn, setIsActive} from '../../../slice';
import {isAuthenticated} from '../../../utils/auth';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const LoginForm: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const {email, password} = data;
    setIsLoading(true);

    if (!email || !password) {
      toast.error('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `https://esgroadmap-backend.vercel.app/api/v1/auth/signin`,
        {email, password},
        {
          withCredentials: true, // this is key!
        }
      );
      dispatch(setIsLoggedIn(true));
      dispatch(setIsActive(response.data.isActive));

      toast.success('Sign in successful!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (err) {
      toast.error('An error occurred during sign-in.');
      console.error('Sign-in error:', err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard');
    }
  }, []);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto my-5 px-4 sm:px-6"
    >
      <div className="flex flex-col space-y-4">
        <Input
          id="email"
          label="Username or Email Address"
          type="text"
          placeholder="Enter your email"
          {...register('email')}
          errorMessage={errors.email?.message}
          className="w-full"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register('password')}
          errorMessage={errors.password?.message}
          className="w-full"
        />
        <div className="flex gap-2 items-center">
          <Input
            label="Remember Me"
            id="terms"
            type="checkbox"
            className="w-auto"
          />
        </div>
      </div>

      <Button
        type="submit"
        label={isLoading ? 'Logging in...' : 'Login'}
        className="mt-5 w-full sm:w-auto buttonbg"
        disabled={isLoading}
      />

      <div>
        <p className="texterror border-t-2 bordergray mt-8 font-semibold text-start">
          Lost Password?
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
