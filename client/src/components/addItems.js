import React, {Component} from 'react';
import './copponents.css';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Radio
    
  } from 'antd';
  
  const {TextArea} = Input;
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  
  
  class Add extends Component {
    constructor(){
      super()
      this.state = {
        confirmDirty: false,
        autoCompleteResult: [],
        value1: "apple",
        itemName:null
      };
    }

    setValue(e){
      
      this.setState({
        [e.target.id]:e.target.value
      })
    }
    render() {
       
      const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));
      const InputGroup = Input.Group;
const { Option } = Select;
  
      return (
       <div>
        <Form className="form" {...formItemLayout} onSubmit={this.handleSubmit}>
          <div>
              
        <Form.Item label={<span>
                Type
              </span>}>
          <Row>
          <Col  span={10}><InputGroup compact>
          <Select defaultValue="Goods">
            <Option value="Goods">Goods</Option>
            <Option value="Service">Service</Option>
          </Select>
        </InputGroup> </Col>
        </Row>
        </Form.Item>
        <Form.Item
            label="Item Name"
          >
            {(<Input id="itemName" onChange={this.setValue} />)}
       </Form.Item>
       <Form.Item label={<span>
                SKU &nbsp;
                <Tooltip title="stock keeping unit for this item">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>}>
              <Input/>
          </Form.Item>
        <Form.Item label={<span>
            Unit &nbsp;
                <Tooltip title="Select or Type to add">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>}>
          <Row>
          <Col  span={10}><InputGroup compact>
          <Select defaultValue="box">
            <Option value="cm">cm</Option>
            <Option value="dz">dz</Option>
            <Option value="ft">ft</Option>
            <Option value="inch">inch</Option>
            <Option value="box">box</Option>
          </Select>
        </InputGroup> </Col>
        </Row>
        </Form.Item>
        <Radio.Group name="radiogroup" defaultValue={1}>
      <Radio value={"1"}>Returnable Item</Radio>
      <Radio value={"2"}>Nonreturnable Item</Radio>
    </Radio.Group>
          </div>
          <br/>
          <hr/>
          <br/>
          <Form.Item label="Dimension (cm)">
            {(
              <AutoComplete
                placeholder="(Length X Width X Height)"
              >
                <Input />
              </AutoComplete>
             
            )}
          </Form.Item>
          <Form.Item label="Manufacturer">
            {(
              <AutoComplete
                placeholder="Name of Manufcturer"
              >
                <Input />
              </AutoComplete>
             
            )}
          </Form.Item>
          <Form.Item label={<span>
                UPC &nbsp;
                <Tooltip title="Twelve digit unique number associated with bar code (Universal Product Code)">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>}>
              <Input/>
          </Form.Item> 
          
          
          <Form.Item label={<span>
                EAN &nbsp;
                <Tooltip title="Thirteen digit unique number (International Article Number)">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>}>
              <Input/>
          </Form.Item>
          <Form.Item label="Weight">
            {(
              <AutoComplete
                placeholder="Kg"
              >
                <Input />
              </AutoComplete>
             
            )}
          </Form.Item> 
          <Form.Item label="Brand">
            {<Input />}
          </Form.Item>
          <Form.Item label={<span>
                MPN &nbsp;
                <Tooltip title="Manufacturing Part Number unambiguously identifies a part design">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>}>
              <Input/>
          </Form.Item>
          
          <Form.Item label={<span>
                ISBN &nbsp;
                <Tooltip title="Thirteen digit unique commercial book identifier (International Standard Book Number)">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>}>
              <Input/>
          </Form.Item>
          
          <br/>
          <hr/>
          <br/>
          <div>Sales Information</div>
          <Form.Item label="Selling Price(INR)">
              <Input/>
          </Form.Item>
          <Form.Item label={<span>
                Account &nbsp;
                <Tooltip title="All transactions related to the items you sell will be displayed in this account ">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>}>
              <Input/>
          </Form.Item>
          <Form.Item label="Description">
              <Input/>
          </Form.Item>
          
          <br/>
          <hr/>
          <br/>
          <div>Purchase Information</div>
          <Form.Item label="Purchase Price(INR)">
              <Input/>
          </Form.Item>
          <Form.Item label={<span>
                Account &nbsp;
                <Tooltip title="All transactions related to the items you sell will be displayed in this account ">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>}>
              <Input/>
          </Form.Item>
          <Form.Item label="Description">
              <Input/>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
    }
  }

  export default Add;