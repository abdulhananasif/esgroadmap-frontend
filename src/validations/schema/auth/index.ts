import {z} from 'zod';
import errors from '../../message';

export const loginSchema = z.object({
  email: z
    .string({required_error: errors.auth.signup.email.required})
    .email(errors.auth.signup.email.invalid),
  password: z
    .string({required_error: errors.auth.signup.password.required})
    .min(6, errors.auth.signup.password.minLength),
});

export type LoginFormData = z.infer<typeof loginSchema>;
