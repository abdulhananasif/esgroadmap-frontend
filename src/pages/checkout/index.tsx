import AuthBanner from '../../components/authBanner';
import SignUpForm from '../../components/form/signup';
import Navbar from '../../components/navbar';

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <AuthBanner text="Membership Checkout" />
      <SignUpForm />
    </div>
  );
};

export default Checkout;
