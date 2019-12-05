import React, {Component} from 'react';
import { Icon,Button } from 'antd';
import  Add from './addContacts';
import Show from './showContacts';


class Cont extends Component{
    constructor(props){
        super(props);
        
      this.state = {
        collapsed: false,
        contcomp : null,
        id : null
    
      };
      this.getKey = this.getKey.bind(this)
      

    }

    getKey(e){
        console.log(this.props.click)
        console.log(e.target.id)
       if(e.target.id === "web"){
           console.log("if ke andar")
           this.setState({
               contcomp : <Add/>
           })
       }else{
           if(e.target.id === "bew"){
            console.log("else ke andar")
            this.setState({
                contcomp : null
            })
           }
       }
        }

    render(){
        return(
            <div className="searchbardiv">
            <Button id="bew" style={{float: "left"}} onClick={this.getKey} type="primary">Contacts</Button>
            <Button id="web" style={{float: "right"}} onClick={this.getKey}  type="primary" >New</Button>
            <br/>
            <br/>
            <hr/>
            <div>{this.state.contcomp}</div>
            <h1>hello</h1>
            </div>
           



        )
    }
}

export default Cont;