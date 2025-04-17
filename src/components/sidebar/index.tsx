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

  const toggleSidebar = () => {
    if (window.innerWidth >= 768) {
      setCollapsed(!collapsed);
    }
  };

  const handleLogout = () => {
    navigate('/auth/login');
  };

  const toggleIcon = collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />;
  const collapse = collapsed
    ? 'justify-center px-0 py-3'
    : 'px-6 py-3 justify-start';

  const getSvgIcon = (
    path: string,
    activeIcon: string,
    inactiveIcon: string
  ): string => {
    return location.pathname === path ? activeIcon : inactiveIcon;
  };
  const renderIcon = (path: string, icon: string, label: string) => (
    <img
      src={getSvgIcon(path, `${icon}-white.svg`, `${icon}-black.svg`)}
      alt={`${label} Icon`}
      className="w-5 h-5 mr-0"
    />
  );

  return (
    <div className="sidebarbg min-h-full w-full font-customFont">
      <div className="flex items-center justify-between px-5 py-4">
        {!collapsed && <Logo />}
        <Button
          type="text"
          icon={toggleIcon}
          onClick={toggleSidebar}
          className="ml-auto"
        />
      </div>

      <div className="mt-2 text-start text-md">
        {siderItems.map(({path, label, icon}) => {
          const isActive = location.pathname === path;
          const itemClass = `flex items-center cursor-pointer transition-all duration-300 ${
            collapsed ? 'justify-center px-0 py-3' : 'px-6 py-3 justify-start'
          } ${isActive ? 'themebg textwhite' : ''}`;

          return (
            <div
              key={path}
              className={itemClass}
              onClick={() => navigate(path)}
            >
              {renderIcon(path, icon, label)}
              {!collapsed && <span className="flex-1 ml-3">{label}</span>}
            </div>
          );
        })}

        <div
          className={`flex items-center cursor-pointer transition-all duration-300 ${collapse}`}
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
