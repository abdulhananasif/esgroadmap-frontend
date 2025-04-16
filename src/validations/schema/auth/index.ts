import {z} from 'zod';
import errors from '../../message';

export const loginSchema = z.object({
  email: z
    .string({required_error: errors.auth.login.email.required})
    .email(errors.auth.login.email.invalid),
  password: z
    .string({required_error: errors.auth.login.password.required})
    .min(6, errors.auth.login.password.minLength),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const signUpSchema = z.object({
  username: z
    .string({required_error: errors.auth.signup.username.required})
    .min(3, errors.auth.signup.password.minLength),
  email: z
    .string({required_error: errors.auth.signup.email.required})
    .email(errors.auth.signup.email.invalid),
  confirmEmail: z
    .string({required_error: errors.auth.signup.email.required})
    .email(errors.auth.signup.email.invalid),
  password: z
    .string({required_error: errors.auth.signup.password.required})
    .min(6, errors.auth.signup.password.minLength),
  confirmPassword: z
    .string({required_error: errors.auth.signup.password.required})
    .min(6, errors.auth.signup.password.minLength),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
