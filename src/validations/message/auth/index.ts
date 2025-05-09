import {AuthMessages} from './type';

const authMessages: AuthMessages = {
  login: {
    email: {
      required: 'Email is required',
      invalid: 'Please enter a valid email address',
    },
    password: {
      required: 'Password is required',
      minLength: 'Password must be at least 6 characters',
    },
  },
  signup: {
    username: {
      required: 'Email is required',
      invalid: 'Please enter a valid email address',
    },
    email: {
      required: 'Email is required',
      invalid: 'Please enter a valid email address',
    },
    confirmEmail: {
      required: 'Email is required',
      invalid: 'Please enter a valid email address',
    },
    password: {
      required: 'Password is required',
      minLength: 'Password must be at least 6 characters',
    },
    confirmPassword: {
      required: 'Password is required',
      minLength: 'Password must be at least 6 characters',
    },
  },
  changePassword: {
    oldPassword: {
      required: 'Old Password is required',
      minLength: 'Password must be at least 6 characters',
    },
    newPassword: {
      required: 'New Password is required',
      minLength: 'Password must be at least 6 characters',
    },
  },
};

export default authMessages;
