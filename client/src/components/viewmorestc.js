import React, { Component } from 'react';
import { Descriptions, Card, Button, Divider, } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './copponents.css';


 class Viewmorestc extends Component {
    constructor(Props){
        super(Props);
        this.state = {
            order:[],
            isLoaded: false,
            stockpId: null,
            orderpId: null,
            stockArr:[]
        }

        this.changeStatustoone = this.changeStatustoone.bind(this);
        

    } 

    componentDidMount(Props){
        let id = this.props.match.params.id;
        fetch('http://localhost:5000/req/'+id)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                order: json,
            })
            console.log(this.state.order)
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
    }



    // handleFulfill(e){
        
            
    //         for(var i =0;i<this.state.stockArr.length;i++){
    //         if(this.state.order.productId === this.state.stockArr[i].productId){
    //             axios.get('http://localhost:5000/updateStock/'+this.state.stockArr[i]._id)
    //             .then(res => {console.log(res);
    //             })
    //             .catch(err => console.log(err))
    //             this.changeStatustotwo(e)

    //         }
    //     }
    // }
    
    

    // changeStatustotwo(e){
    //     axios.get('http://localhost:5000/updatetotwo/'+e.target.id)
    //     .then(res => {console.log(res);
    //     })
    //     .catch(err => console.log(err))
    //     console.log(e.target.id)
    //   }
      
    //   changeStocksta(e){
    //     axios.get('http://localhost:5000/updateStock/'+e.target.id)
    //     .then(res => {console.log(res);
    //     })
    //     .catch(err => console.log(err))
    //   }

      changeStatustoone(e){
        axios.get('http://localhost:5000/stocksta/'+e.target.id)
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
            <Descriptions title="Stock Info" dataSource={order}>
             <Descriptions.Item label="comId">{order.comId}</Descriptions.Item>
              <Descriptions.Item label="comName">{order.comName}</Descriptions.Item>
              <Descriptions.Item label="prodName">{order.prodName}</Descriptions.Item>
              
            </Descriptions>
            <Button onClick={this.changeStatustoone} id={order._id} style={{background:'#95de64', color:'white'}}>recieved</Button>

            {/* <Button onClick={this.handleFulfill} id={order._id} style={{background:'#95de64', color:'white'}}>fulfiled</Button> */}

            
            </Card>

     </div>
        )}}
        
        
    }



export default Viewmorestc
