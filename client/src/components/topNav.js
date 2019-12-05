import React, {Component} from 'react';
import { Icon } from 'antd';

import { Input } from 'antd';
const { Search } = Input;

class TopNav extends Component{
    render(){
    return(
            <div className="searchbardiv">
            <Icon style={{ fontSize: '25px', color:'blue', padding:"10px" }} type="plus-circle-o"/>
            <Search className="searchbar"
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            />
              </div>
        )
    }
}

export default TopNav;