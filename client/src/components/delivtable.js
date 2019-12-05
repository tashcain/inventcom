import React, {Component} from 'react';
import { Table, Badge,Button, Divider,Empty } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './copponents.css';

const { Column } = Table;


class Deltable extends Component{
    constructor(Props){
        super(Props);
        this.state = {
            items:[],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(json => {
          let newarr = []
          console.log(json);
          for(var i =0;i<json.length;i++){
            if(json[i].status === 2){
              newarr.push(json[i])
            }
          }
          console.log(newarr);
          
            this.setState({
                isLoaded: true,
                items: newarr,
            })
        });
    }
 
    render(){
        var {isLoaded, items} = this.state;
        if(!isLoaded){
          return  <div className="load">       
             <Button shape="circle" loading />
          </div>
        }
        else{
        
            return(
            <div className='App'>
            <Table dataSource={items}>
     <Column title="productId" dataIndex="productId" key="productId" />
      <Column title="Delivery Location" dataIndex="deliveryLocation" key="lastName" />
    <Column title="payment Mode" dataIndex="paymentMode" key="age" />
    <Column title="Barcode" dataIndex="barcode" key="address" />
    <Column
      title="Action"
      key="_id"
      dataIndex="_id"
      render={(_id) => (
        <span>
         <Link to={"/order/" + _id}> <Button >View More</Button></Link>
         </span>
      )}
    />
    
  </Table> 
     </div>
        )
      }}
        
        
    }


export default Deltable;