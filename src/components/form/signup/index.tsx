import {FunctionComponent} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Input from '../../ui/input';
import Button from '../../ui/button';
import {SignUpFormData, signUpSchema} from '../../../validations/schema/auth';
import {Link} from 'react-router-dom';

const SignUpForm: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log('Signup Data:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl mx-auto px-4 md:px-10 py-10"
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline themetext gap-5">
          <h1 className="font-semibold text-2xl">Membership Level</h1>
          <p className="text-xs cursor-pointer">Change</p>
        </div>
        <p>
          You have selected the{' '}
          <span className="font-bold">
            Comprehensive account Analysts' club
          </span>{' '}
          membership level.
        </p>
        <p>Comprehensive account Analysts' club PLAN</p>
        <p>
          The price for membership <span className="font-bold">$0.00</span> now
          and then <span className="font-bold">$20.00 per Month.</span> After
          your initial payment, your first payment is Free.
        </p>
      </div>

      <div className="flex flex-col space-y-4 my-5 py-5 border-y-2 bordergray">
        <div className="flex flex-col sm:flex-row sm:items-baseline themetext gap-5">
          <h1 className="font-semibold text-2xl">Account Information</h1>
          <Link to="/auth/login" className="text-xs">
            Already have an account? Log in here
          </Link>
        </div>

        <Input
          id="username"
          label="Username"
          type="text"
          placeholder="Enter username"
          {...register('username')}
          errorMessage={errors.username?.message}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register('password')}
          errorMessage={errors.password?.message}
        />
        <Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          {...register('confirmPassword')}
          errorMessage={errors.confirmPassword?.message}
        />
        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          errorMessage={errors.email?.message}
        />
        <Input
          id="confirmEmail"
          label="Confirm Email Address"
          type="email"
          placeholder="Confirm your email"
          {...register('confirmEmail')}
          errorMessage={errors.confirmEmail?.message}
        />
      </div>

      <div className="flex flex-col space-y-4 border-b-2 pb-5 bordergray">
        <div className="themetext">
          <h1 className="font-semibold text-2xl">Payment Method</h1>
        </div>
        <div className="flex flex-col  gap-4">
          <div className="flex items-center gap-2">
            <Input
              label="Pay with Stripe"
              id="stripe"
              type="radio"
              value="stripe"
            />
          </div>
          <div className="flex items-center gap-2">
            <Input
              label="Pay with PayPal"
              id="paypal"
              type="radio"
              value="paypal"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          label="Continue"
          className="w-full sm:w-auto buttonbg"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
