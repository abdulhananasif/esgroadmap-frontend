import Logo from './logo';
import {Link} from 'react-router-dom';
import Button from './ui/button';

const navItems = [
  {
    id: 1,
    title: 'Sign up',
    link: '/auth/sign-up',
    isButton: false,
    className: '',
  },
  {
    id: 2,
    title: 'Contact Us',
    isButton: true,
    link: '/',
  },
];

const Navbar = () => {
  return (
    <div className="w-full flex flex-col items-center gap-1 px-5">
      <div className="flex flex-1 w-full py-5 items-end justify-between">
        <Link to={'/'}>
          <Logo />
        </Link>

        <nav className="md:block hidden">
          <ul className="flex items-center gap-4">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={`text-md `}>
                  {item.isButton ? (
                    <Button
                      label={item.title}
                      style={{
                        backgroundColor: 'var(--button-bg)',
                      }}
                    />
                  ) : (
                    <Link to={item.link} style={{color: 'var(--text-color)'}}>
                      {item.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
