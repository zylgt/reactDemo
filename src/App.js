import React from 'react';
import './App.css';
import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import HeaderBars from './components/header/header';
import Menus from './components/Menu/Menu';
import MainContents from './components/mainContent/mainContent';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo"></div>
          <Menus></Menus>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{padding:'0 24px'}} >
            <HeaderBars collapsed={this.state.collapsed} onToggle={this.toggle}/>
          </Header>
          <Content
            style={{
              margin: '0 24px',
              padding: 0,
              minHeight: 580,
            }}
          >
             <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <MainContents></MainContents>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
