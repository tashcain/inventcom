import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Viewmore from './components/viewMore';
import Dash from './components/dashboard'
import TopNav from './components/topNav';
import Cont from './components/contacts';
import Zalotest from './components/tst2';
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom';
import './components/copponents.css';
import RecTable from './components/rectable';
import  Stock from './components/stocktab';
import Deltable from './components/delivtable';
import Req from './components/stockrequest';
import Viewmorestc from './components/viewmorestc';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class App extends Component {
  state = {
    collapsed: false,
  };

  setValue(e){
      console.log(e)
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
       <BrowserRouter>
    <TopNav/>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
          <Link to="/" style={{color:'#fff'}}>
              <Icon type="desktop" />
             <span >Dashboard</span>
             </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/contact" style={{color:'#fff'}}>
              <Icon type="desktop" />
              <span >Contacts</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
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
        <Layout>
          <Content style={{ margin: '0 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <div className="App">
              <Switch>
              <Route exact path='/Zalotest' component={Zalotest}/>
               <Route exact path='/' component={Dash} />
               <Route exact path='/contact' component={Cont} />
               <Route exact path='/order/:id' component={Viewmore} id="_id"/>
               {/* <Route exact path='/test' component={Testt} /> */}
               <Route exact path='/ordtable' component={RecTable} />
               <Route exact path='/deliveredOrder' component={Deltable} />
               <Route exact path='/request' component={Req}/>
               <Route exact path='/req/:id' component={Viewmorestc} id="_id"/>              
               <Route exact Path='/stock' component={Stock} />
               </Switch>
 
            </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>@Red Hare</Footer>
        </Layout>
      </Layout>
   
    </BrowserRouter>
      </div>
    )
  }
}

