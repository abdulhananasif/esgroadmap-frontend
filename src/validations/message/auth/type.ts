export interface AuthMessages {
  signup: {
    email: {
      required: string;
      invalid: string;
    };
    password: {
      required: string;
      minLength: string;
    };
  };
}
