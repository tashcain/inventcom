import React, {Component} from 'react';
import {Table, Button} from 'antd';
import {Link} from 'react-router-dom';

const { Column } = Table;


class Zalotest extends Component{
    constructor(props){
        super(props);
        this.state = {size: 3,
            stock:[],
            isLoaded: false
        }

      }



componentDidMount(){
    fetch('https://test.zalonin.com/api/fetch-order-products')
    .then(res=> res.json())
    .then(json => {
        let ZaloArr = []
        
        for(var i =0;i<json.length;i++){
            if(true){
                ZaloArr.push(json[i])
            }
                    }
          this.setState({
            stock: ZaloArr,
            isLoaded:true
           }) 
         console.log(this.state.stock[0].delivery_info.add_line1);
    });
}

    render(){
        var {stock, isLoaded} = this.state;
        if(!isLoaded){
            return  <div className="load">       
               <Button shape="circle" loading />
            </div>
          }
          else{ return(
            <div className="App">
            <Table dataSource={stock}>
     <Column title="paymode" dataIndex="delivery_info.add_line1" key="productId" />
      <Column title="price" dataIndex="discounted_price" key="lastName" />
    <Column title="order id" dataIndex="order_id" key="age" />
    
    
  </Table> 
            </div>
        )
    }
}
       
}

export default Zalotest;