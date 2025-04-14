import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Input from '../../ui/input';
import Button from '../../ui/button';
import {
  LoginFormData,
  loginSchema,
} from '../../../validations/auth/login/loginShema';

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto mt-10 space-y-4"
    >
      <div>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          errorMessage={errors.email?.message}
        />
      </div>
      <div>
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register('password')}
          errorMessage={errors.password?.message}
        />
      </div>
      <Button type="submit" label="Login" variant="primary" />
    </form>
  );
};

export default LoginForm;
