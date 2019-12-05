import React, {Component} from 'react';
import { Table, Badge,Button, Divider,Empty } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './copponents.css';

const { Column } = Table;


class RecTable extends Component{
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
          for(var i =0;i<json.length;i++){
              newarr.push(json[i])
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
      <Column title="delloc" dataIndex="deliveryLocation" key="lastName" />
    <Column title="phone" dataIndex="phoneNo" key="age" />
    <Column title="payment" dataIndex="paymode" key="address" />
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


export default RecTable;