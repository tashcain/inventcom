import React, {Component} from 'react';
import { Table, Badge,Button, Divider,Icon, Row, Col,Card } from 'antd';
import {Link} from 'react-router-dom';
import './copponents.css';

const { Column } = Table;


class Dash extends Component{
  constructor(Props){
    super(Props);
    this.state = {
        items:[],
        recorder:[],
        delorder:[],
        stockArr:[],
        restock:[]
          }
}

func(){
  console.log(this.state.items)
}

componentDidMount(){
  fetch('http://localhost:3001/users')
  .then(res => res.json())
  .then(json => {
    let recorder = []
    for(var i =0;i<json.length;i++){
      if(json[i].status === 0 || json[i].status === 1){
        recorder.push(json[i])
      }
    }
    let delorder = []
    for(var i =0;i<json.length;i++){
      if(json[i].status === 2){
        delorder.push(json[i])
      }
    }
      this.setState({
          items: json,
          recorder: recorder,
          delorder: delorder
      })
  });
  fetch('http://localhost:3001/stock')
        .then(res=> res.json())
        .then(json => {
            let stockArr = []
            let restock =[]
            for(var i =0;i<json.length;i++){
              if(json[i].status === 0){
                restock.push(json[i])
              }else{
                if(json[i].status === 1){
                  stockArr.push(json[i])
                }
              }
                }
               this.setState({
                stockArr: stockArr,
                restock: restock
               }) 
        });
}
render(){
  var {items,recorder,delorder,stockArr,restock} = this.state;
  return(
    <div style={{}}>
    <Row>
    <Col span={12}>
      <Card title="" bordered={false} style={{ width: 300 }}>
             <Badge className="recreq" count={restock.length}>
             <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Link to="/request">
              <div className="recreq" ><Icon  style={{height:"200px"}} type="align-left" /> </div>
             <span style={{fontSize:"25px", paddingTop:"20px"}}>Stock Request</span>
             </Link>
             </div>
             </Badge>
            </Card>
            </Col>
      <Col span={12}>
      <Card title="" bordered={false} style={{ width: 300 }}>
             <Badge className="recreq" count={recorder.length}>
             <div style={{ background: '#ECECEC', padding: '30px' }}>
             <Link to="/ordtable">
              <div className="recreq" ><Icon  style={{height:"200px"}} type="align-left" /> </div>
             <span style={{fontSize:"25px", paddingTop:"20px"}}>Received Orders</span>
             </Link>
             </div>
             </Badge>
            </Card>
            </Col>
            <Col span={12}>
      <Card title="" bordered={false} style={{ width: 300 }}>
             <Badge className="recreq" count={delorder.length}>
             <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Link to="/deliveredOrder">
              <div className="recreq" ><Icon  style={{height:"200px"}} type="align-left" /> </div>
             <span style={{fontSize:"25px", paddingTop:"20px"}}>Delivered Orders</span>
             </Link>
             </div>
             </Badge>
            </Card>
            </Col>
            <Col span={12}>
      <Card title="" bordered={false} style={{ width: 300 }}>
             <Badge className="recreq" count={stockArr.length}>
             <div style={{ background: '#ECECEC', padding: '30px' }}>
             <Link to="/stock"> 
             <div className="recreq" ><Icon  style={{height:"200px"}} type="align-left" /> </div>
             <span style={{fontSize:"25px", paddingTop:"20px"}}>Stocks</span>
             </Link>
             </div>
             </Badge>
            </Card>
            </Col>
            <Col span={12}>
      <Card title="" bordered={false} style={{ width: 300 }}>
             <Badge className="recreq" count={recorder.length}>
             <div style={{ background: '#ECECEC', padding: '30px' }}>
             <Link to="/Zalotest"> 
             <div className="recreq" ><Icon  style={{height:"200px"}} type="align-left" /> </div>
             <span style={{fontSize:"25px", paddingTop:"20px"}}>Zalotest</span>
             </Link>
             </div>
             </Badge>
            </Card>
            </Col>
            
          
                         </Row>
             </div>
  )}

}


export default Dash;