import React, { Component } from 'react';
import { Descriptions, Card, Button, Divider, } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './copponents.css';


 class Viewmore extends Component {
    constructor(Props){
        super(Props);
        this.state = {
            order:[],
            isLoaded: false,
            stockpId: null,
            orderpId: null,
            stockArr:[],
            orderArr:[]
        }

        this.changeStatustotwo = this.changeStatustotwo.bind(this);
        this.changeStatustotwo = this.changeStatustotwo.bind(this);
        this.changeStocksta = this.changeStocksta.bind(this);

    } 

    componentDidMount(Props){
        let id = this.props.match.params.id;
        fetch('http://localhost:5000/order/'+id)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                order: json,
            })
        });
        fetch('http://localhost:3001/stock')
        .then(res=> res.json())
        .then(json => {
            let stockArr = []
            for(var i =0;i<json.length;i++){
                stockArr.push(json[i])
                }
               this.setState({
                stockArr: stockArr
               }) 
             console.log(this.state.stockArr)
        });
        fetch('http://localhost:3001/users')
        .then(res=> res.json())
        .then(json => {
            let orderArr = []
            for(var i =0;i<json.length;i++){
                orderArr.push(json[i])
                }
               this.setState({
                orderArr: orderArr
               }) 
             console.log(this.state.orderArr)
        });
    }



    // handleFulfill(e){            
    //         for(var i =0;i<this.state.stockArr.length;i++){
    //         if(this.state.orderArr[i].productId === this.state.stockArr[i].productId){
    //             axios.get('http://localhost:5000/updateStock/'+this.state.stockArr[i]._id)
    //             .then(res => {console.log(res);
    //                 this.changeStatustotwo(e)
    //             })
    //             .catch(err => {console.log(err);
    //             console.log("catch");})
    //         }
    //     }
    // }
    
    

    changeStatustotwo(e){
        console.log('changeStatustotwo');
        axios.get('http://localhost:5000/updatetotwo/'+e.target.id)
        .then(res => {console.log(res);
        })
        .catch(err => console.log(err))
        console.log(e.target.id)
      }
      
      changeStocksta(e){
        axios.get('http://localhost:5000/updateStock/'+e.target.id)
        .then(res => {console.log(res);
        })
        .catch(err => console.log(err))
      }

      changeStatustoone(e){
        axios.get('http://localhost:5000/updatetoone/'+e.target.id)
        .then(res => {console.log(res);
        })
        .catch(err => console.log(err))
        console.log(e.target.id)
    }
      
    render(){
        var {isLoaded, order} = this.state;
        if(!isLoaded){ 
          return  <div className="load">       
          <Button shape="circle" loading />
       </div>
        }
        else{
            
            return(
            <div className='App'>
            <Card style={{ width: 700 }}>
            <Descriptions title="Order Info" dataSource={order}>
             <Descriptions.Item label="productId">{order.productId}</Descriptions.Item>
              <Descriptions.Item label="delivery location">{order.deliveryLocation}</Descriptions.Item>
              <Descriptions.Item label="phone">{order.phoneNo}</Descriptions.Item>
              <Descriptions.Item label="payment mode">{order.paymentMode}</Descriptions.Item>
              <Descriptions.Item label="price">{order.price}</Descriptions.Item>
              <Descriptions.Item label="barcode">{order.barcode}</Descriptions.Item>
            </Descriptions>
            <Button onClick={this.changeStatustoone} id={order._id} style={{background:'#95de64', color:'white'}}>underProcess</Button>

            <Button onClick={this.changeStatustotwo} id={order._id} style={{background:'#95de64', color:'white'}}>fulfiled</Button>

            
            </Card>

     </div>
        )}}
        
        
    }



export default Viewmore
