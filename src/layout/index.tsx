import Navbar from '../components/navbar';
import AuthBanner from '../components/authBanner';
import Footer from '../components/footer';
import {LayoutProps} from './type';
import {FunctionComponent} from 'react';

const Layout: FunctionComponent<LayoutProps> = ({bannerText, children}) => {
  return (
    <>
      <Navbar />
      {bannerText && <AuthBanner text={bannerText} />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
