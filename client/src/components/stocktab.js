import React, {Component} from 'react';
import {Table, Button} from 'antd';
import {Link} from 'react-router-dom';

const { Column } = Table;


class Stock extends Component{
    constructor(props){
        super(props);
        this.state = {size: 3,
            stock:[],
            isLoaded: false
        }
      }



componentDidMount(){
    fetch('http://localhost:3001/stock')
    .then(res=> res.json())
    .then(json => {
        let stockArr = []
        
        for(var i =0;i<json.length;i++){
            if(json[i].status === 1){
                stockArr.push(json[i])
            }
                    }
          this.setState({
            stock: stockArr,
            isLoaded:true
           }) 
         console.log(this.state.stockArr)
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
     <Column title="comId" dataIndex="comId" key="comId" />
      <Column title="comName" dataIndex="comName" key="comName" />
    <Column title="prodName" dataIndex="prodName" key="prodName" />
    
    
  </Table> 
            </div>
        )
    }
}
       
}

export default Stock;