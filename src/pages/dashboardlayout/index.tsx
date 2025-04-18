import {FunctionComponent, useEffect, useState} from 'react';
import {Layout} from 'antd';
import Sidebar from '../../components/sidebar';
import {DashboardLayoutProps} from './type';

const {Sider, Content} = Layout;

const DashboardLayout: FunctionComponent<DashboardLayoutProps> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string>('dashboard');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout className="h-screen overflow-hidden">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={280}
        collapsedWidth={70}
        className="fixed left-0 z-[1000] h-full sidebarbg border-r border-gray-200"
      >
        <Sidebar
          setActivePage={setActivePage}
          activePage={activePage}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      </Sider>

      <Layout className={`ml-[${collapsed ? '70px' : '280px'}]`}>
        <Content className="whitebg h-screen">
          <main>{children}</main>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
