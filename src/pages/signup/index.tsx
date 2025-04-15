import AuthBanner from '../../components/authBanner';
import Navbar from '../../components/navbar';
import Packages from '../../components/packages';

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <AuthBanner text="Sign Up" />
      <Packages />
    </div>
  );
};

export default SignUp;
