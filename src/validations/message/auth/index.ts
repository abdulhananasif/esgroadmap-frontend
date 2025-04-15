import {AuthMessages} from './type';

const authMessages: AuthMessages = {
  signup: {
    email: {
      required: 'Email is required',
      invalid: 'Please enter a valid email address',
    },
    password: {
      required: 'Password is required',
      minLength: 'Password must be at least 6 characters',
    },
  },
};

export default authMessages;
