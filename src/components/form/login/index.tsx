import {FunctionComponent} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Input from '../../ui/input';
import Button from '../../ui/button';
import {LoginFormData, loginSchema} from '../../../validations/schema/auth';
import {Link} from 'react-router-dom';

const LoginForm: FunctionComponent = () => {
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
      className="w-full max-w-sm mx-auto my-10 px-4 sm:px-6"
    >
      <div className="flex flex-col space-y-4">
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

        <div className="flex items-center gap-2">
          <Input label="Remember Me" id="remember" type="checkbox" />
        </div>

        <Button type="submit" label="Login" className="buttonbg w-full mt-2" />

        <div className="text-center mt-4">
          <Link to="/auth/signup" className="text-sm textblue hover:underline">
            Don’t have an account? Sign up
          </Link>
        </div>

        <div className="mt-6 border-t bordergray pt-4 text-center">
          <Link
            to="/auth/forgot-password"
            className="text-sm texterror hover:underline"
          >
            Lost Password?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
