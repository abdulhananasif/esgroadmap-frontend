import AuthBanner from '../../components/authBanner';
import LoginForm from '../../components/form/login';
import Navbar from '../../components/navbar';

const Login = () => {
  return (
    <div>
      <Navbar />
      <AuthBanner text="Login" />
      <LoginForm />
    </div>
  );
};

export default Login;
