import {FunctionComponent, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {siderItems} from './constant';
import Logo from '../logo';
import {SidebarProps} from './type';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {Button} from 'antd';

const Sidebar: FunctionComponent<SidebarProps> = ({
  setActivePage,
  collapsed,
  setCollapsed,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  }, [setCollapsed]);

  useEffect(() => {
    const path = location.pathname.replace('/dashboard', '') || '/dashboard';
    setActivePage(path);
  }, [location, setActivePage]);

  const getSvgIcon = (
    path: string,
    activeIcon: string,
    inactiveIcon: string
  ): string => {
    return location.pathname === path ? activeIcon : inactiveIcon;
  };
  const handleLogout = () => {
    navigate('/auth/login');
  };

  return (
    <div className="sidebarbg min-h-full w-full font-customFont">
      <div className="flex items-center justify-between px-5 py-4">
        {!collapsed && <Logo />}
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => {
            if (window.innerWidth >= 768) {
              setCollapsed(!collapsed);
            }
          }}
          className="ml-auto"
        />
      </div>

      <div className="mt-2 text-start text-md">
        {siderItems.map(({path, label, icon}) => (
          <div
            key={path}
            className={`flex items-center cursor-pointer transition-all duration-300 ${
              collapsed ? 'justify-center px-0 py-3' : 'px-6 py-3 justify-start'
            } ${location.pathname === path ? 'themebg textwhite' : ''}`}
            onClick={() => navigate(path)}
          >
            <img
              src={getSvgIcon(path, `${icon}-white.svg`, `${icon}-black.svg`)}
              alt={`${label} Icon`}
              className="w-5 h-5 mr-0"
            />
            {!collapsed && <span className="flex-1 ml-3">{label}</span>}
          </div>
        ))}

        <div
          className={`flex items-center cursor-pointer transition-all duration-300 ${
            collapsed ? 'justify-center px-0 py-3' : 'px-6 py-3 justify-start'
          }`}
          onClick={handleLogout}
        >
          <img
            src="/icons/logout.svg"
            alt="Logout Icon"
            className="w-5 h-5 mr-0"
          />
          {!collapsed && <span className="flex-1 ml-3">Logout</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
