import React from 'react';
import './copponents.css';
import Test from './test';
import Dash from './dashboard';
import Add from './addItems';
import Cont from './contacts';
import { Layout, Menu,  Icon, Button } from 'antd';
import Show from './showContacts';

const { Header, Content,  Sider } = Layout;
const { SubMenu } = Menu;


class SiderDemo extends React.Component {
  constructor(){
    super();
    
  this.state = {
    collapsed: false,
    ster : null

  };
  this.setView = this.setView.bind(this)
  }

  

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  setView(e){
    console.log(e);
    if(e.key === "1"){
       this.setState({
        ster: <Dash/>
      });
    }
    else{
    if(e.key === "2"){
      this.setState({
        ster: <Cont/>
      });
    }};
      if(e.key === "3"){
        this.setState({
          ster: <Add/>
        });
      }
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={this.setView}>
            <Icon type="desktop" /> 
               <span>dashboard</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.setView}>
              <Icon type="team" />
              <span>contacts</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Items</span>
                </span>
              }
            >
              <Menu.Item key="3" onClick={this.setView}>Items</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        
        <Header style={{ background: '#fff', padding: 0 }} />
        

          <Content style={{ margin: '0 16px' }}>
            <div >{this.state.ster}</div>
          </Content>
          
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);

export default SiderDemo;