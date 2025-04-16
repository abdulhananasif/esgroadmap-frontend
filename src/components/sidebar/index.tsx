import {FunctionComponent, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {siderItems} from './constant';
import Logo from '../logo';

interface SidebarProps {
  setActivePage: (page: string) => void;
  activePage: string;
  collapsed: boolean;
}

const Sidebar: FunctionComponent<SidebarProps> = ({setActivePage}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.replace('/', '') || '/';
    setActivePage(path);
  }, [location, setActivePage]);

  const getSvgIcon = (
    path: string,
    activeIcon: string,
    inactiveIcon: string
  ): string => {
    return location.pathname === path ? activeIcon : inactiveIcon;
  };

  return (
    <div className="bg-[#EDF1F1] h-full w-full font-customFont">
      <div className="flex items-center justify-start ms-3 mt-3">
        <Logo />
      </div>

      <div className="mt-2 ms-3 text-start text-md">
        {/* Sidebar Items */}
        {siderItems.map(({path, label, icon}) => (
          <div
            key={path}
            className={`flex items-center p-2 pl-2 cursor-pointer ${
              location.pathname === path
                ? 'bg-white text-black rounded-md shadow-sm'
                : 'text-black'
            }`}
            onClick={() => {
              navigate(path);
            }}
          >
            <img
              src={getSvgIcon(path, `${icon}2.svg`, `${icon}1.svg`)}
              alt={`${label} Icon`}
              className="w-5 h-5 mr-3"
            />
            <span className="flex-1">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
