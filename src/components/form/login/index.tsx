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
      <Link to="/auth/signup">
        <Button
          type="submit"
          label="Login"
          className="mt-5 w-full sm:w-auto buttonbg"
        />
      </Link>

      <div>
        <h1 className="texterror border-t-2 bordergray mt-8 font-semibold text-start">
          Lost Password ?
        </h1>
      </div>
    </form>
  );
};

export default LoginForm;
