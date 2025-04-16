import {FunctionComponent, useState} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {Button, Layout, theme} from 'antd';
import Sidebar from '../../components/sidebar';
import {Outlet} from 'react-router-dom';

const {Header, Sider, Content} = Layout;

const DashboardLayout: FunctionComponent = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string>('dashboard');

  const {
    token: {colorBgContainer},
  } = theme.useToken();
  const colorBgContainer1 = '#EEEEEE';

  return (
    <Layout className="min-h-full">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        collapsedWidth={80}
        className="h-full overflow-auto"
      >
        <Sidebar
          setActivePage={setActivePage}
          activePage={activePage}
          collapsed={collapsed}
        />
      </Sider>

      <Layout
        className="site-layout"
        style={{marginLeft: collapsed ? 80 : 250}}
      >
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            className="trigger"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{marginLeft: 0}}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              textAlign: 'center',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'relative',
                height: '70px',
                width: '20rem',
                marginLeft: '1rem',
              }}
              className="my-auto mt-2"
            >
              <h5
                style={{
                  color: '#102C57',
                  margin: 0,
                  position: 'absolute',
                  top: '0',
                  right: '0',
                }}
                className="text-xl"
              >
                <strong>Welcome to ESGroadmap Portal</strong>
              </h5>
            </div>
          </div>

          <img
            src={'../images/userPlaceholder.png'}
            style={{cursor: 'pointer', width: '2rem', marginRight: 20}}
            alt="userProfile"
          />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 10,
            minHeight: 280,
            background: colorBgContainer1,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
