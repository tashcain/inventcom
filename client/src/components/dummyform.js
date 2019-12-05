import React, {Component} from 'react';
import {Input, Button,Select} from 'antd';
import Axios from 'axios';
const { Option } = Select;



class Dummy extends Component{
  
    constructor(){
        super();
        this.state={
            estr:null,
            estre:null
        }
        this.setvalue=this.setvalue.bind(this);
        this.saveData= this.saveData.bind(this);
        this.handleChange= this.handleChange.bind(this);


      }
    handleChange(value) {
      console.log(`selected ${value}`);
    }

    saveData(){
        Axios.post('http://localhost:5000/save-data'
     ,{
            ContactType:this.state.estr,
            something:this.state.estre
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    setvalue(e){
        
      this.setState({
          [e.target.id]:e.target.value
      })
      console.log(this.state.estr);
      console.log(this.state.estre);
    }
    render(){
        return(
            <div>
            <Input id="estr" onChange={this.setvalue} placeholder="Basic usage" />
            <Input id="estre" onChange={this.setvalue} placeholder="Basic usage" />
            <div>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>
           
            <Button onClick={this.saveData}>Default</Button>
            </div>
        
        )
    }
}

export default Dummy; 