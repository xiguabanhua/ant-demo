import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import React, {Component} from 'react';
import './layout.css';
import Index from '../component/index/index';
import Shebei from '../component/shebei/shebei'; 
import Yingyong from '../component/yingyong/yingyong';
let content = null;
class SiderDemo extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
           collapsed: false,
           current: '1'
        }
        // this.onChangeMenu = this.onChangeMenu.bind(this);
    }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  onChangeMenu =(e) =>{
    console.log(e);
     this.setState({
        current: e.key,
      });
      // console.log(typeof e.key);
    switch(e.key) {
      case "1":
        console.log('1');
        content = <Index />
        break;
      case "2":
        console.log('2');
        content = <Shebei />
        break;
      case "3":
        console.log('3');
        content = <Yingyong />
        break;
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
          selectedKeys={[this.state.current]}
           onClick={this.onChangeMenu.bind(this)}
          >
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">首页</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">设备管理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">应用管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {content}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;