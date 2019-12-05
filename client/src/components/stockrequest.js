import React, {Component} from 'react';
import {Table, Button} from 'antd';
import {Link} from 'react-router-dom';

const { Column } = Table;


class Req extends Component{
    constructor(props){
        super(props);
        this.state = {size: 3,
            requests:[],
            isLoaded: false
        }
      }



componentDidMount(){
    fetch('http://localhost:3001/stock')
    .then(res=> res.json())
    .then(json => {
        let reqArr = []
        
        for(var i =0;i<json.length;i++){
            if(json[i].status === 0){
                reqArr.push(json[i])
            }
                    }
          this.setState({
            requests: reqArr,
            isLoaded:true
           }) 
         console.log(this.state.stockArr)
    });
}

    render(){
        var {requests, isLoaded} = this.state;
        if(!isLoaded){
            return  <div className="load">       
               <Button shape="circle" loading />
            </div>
          }
          else{ return(
            <div className="App">
            <Table dataSource={requests}>
     <Column title="comId" dataIndex="comId" key="comId" />
      <Column title="comName" dataIndex="comName" key="comName" />
    <Column title="prodName" dataIndex="prodName" key="prodName" />
    <Column
      title="Action"
      key="_id"
      dataIndex="_id"
      render={(_id) => (
        <span>
         <Link to={"req/" + _id}> <Button >View More</Button></Link>
         </span>
      )}
    />
    
  </Table> 
            </div>
        )
    }
}
       
}

export default Req;


