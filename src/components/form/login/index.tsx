import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Input from '../../ui/input';
import Button from '../../ui/button';
import {LoginFormData, loginSchema} from '../../../validations/schema/auth';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-5">
      <div className="flex flex-col space-y-2">
        <Input
          id="email"
          label="Username or Email Address"
          type="text"
          placeholder="Enter your email"
          {...register('email')}
          errorMessage={errors.email?.message}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register('password')}
          errorMessage={errors.password?.message}
        />
        <div className="flex gap-2 items-center">
          <Input label="Remember Me" id="terms" type="checkbox" />
        </div>
      </div>
      <Button type="submit" label="Login" className="bg-[#193839] mt-5" />
      <div>
        <h1 className="text-red-800 border-t-2 border-gray-200 mt-10">
          Lost Password ?
        </h1>
      </div>
    </form>
  );
};

export default LoginForm;
