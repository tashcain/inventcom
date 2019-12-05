import React, {Component} from 'react';
import './copponents.css';
import Axios from 'axios';
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
      super();
      this.state = {
        confirmDirty: false,
        autoCompleteResult: [],
        value1: "apple",
        ContactType: null,
        primaryContact: null,
        salute:null,
        firstname:null,
        lastname:null,
        companyname:null,
        contactDisplayName:null,
        contactEmail:null,
        contactPhone:null,
        website:null,
        currency:null,
        paymentterms:null,
        bilAddr1:null,
        bilAddr2:null,
        bilcity:null,
        bilstate:null,
        bilzip:null,
        bilcountry:null,
        bilfax:null,
        bilphone:null,
        shipAddr1:null,
        shipAddr2:null,
        shipcity:null,
        shipstate:null,
        shipzip:null,
        shipcountry:null,
        shipfax:null,
        shipphone:null 
      };

      this.saveData= this.saveData.bind(this);
      this.setvalue= this.setvalue.bind(this);
      this.handleContactType= this.handleContactType.bind(this);
      this.handleCurrency= this.handleCurrency.bind(this);
      this.handleSalute= this.handleSalute.bind(this);
      this.handlepaymentterms= this.handlepaymentterms.bind(this);



    }
  
  saveData(){
      Axios.post('http://localhost:5000/data-add',
      {
          ContactType:this.state.ContactType,
          primaryContact:this.state.primaryContact,
          salute:this.state.salute,
          firstname:this.state.firstname,
          lastname:this.state.lastname,
          companyname:this.state.companyname,
          contactDisplayName:this.state.contactDisplayName,
          contactEmail:this.state.contactEmail,
          contactPhone:this.state.contactPhone,
          website:this.state.website,
          currency:this.state.currency,
          paymentterms:this.state.paymentterms,
          bilAddr1:this.state.bilAddr1,
          bilAddr2:this.state.bilAddr2,
          bilcity:this.state.bilcity,
          bilstate:this.state.bilstate,
          bilzip:this.state.bilzip,
          bilcountry:this.state.bilcountry,
          bilfax:this.state.bilfax,
          bilphone:this.state.bilphone,
          shipAddr1:this.state.shipAddr1,
          shipAddr2:this.state.shipAddr2,
          shipcity:this.state.shipcity,
          shipstate:this.state.shipstate,
          shipzip:this.state.shipzip,
          shipcountry:this.state.shipcountry,
          shipfax:this.state.shipfax,
          shipphone:this.state.shipphone
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
        [e.target.id]:e.target.value,
        
    })
    
  }

  handleContactType(value){
    console.log(value);
   this.setState({
     ContactType:value,
   })
  }

  handleSalute(value){
    console.log(value)

    this.setState({
      salute:value,
    })
   }

   handleCurrency(value){
     console.log(value);

    this.setState({
      currency:value,
    })
   }
   handlepaymentterms(value){
    console.log(value);
    this.setState({
      paymentterms:value,
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
        <Form className="form" {...formItemLayout} >
          
        <Form.Item label={<span>
               Contact Type
              </span>}>
          <Row>
          <Col  span={10}><InputGroup  compact>
          <Select defaultValue="Customer"  onChange={this.handleContactType}>
            <Option value="Customer">Customer</Option>
            <Option value="Vendor">Vendor</Option>
            
          </Select>
        </InputGroup> </Col>
        </Row>
        </Form.Item>
          <Form.Item label={<span>
                PrimaryContact &nbsp;
                <Tooltip title="dekh kya raha h naam daal">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>}>
          <Row>
          <Col span={4}><InputGroup   compact>
          <Select defaultValue="Salut"  onChange={this.handleSalute}>
            <Option value="Mr.">Mr.</Option>
            <Option value="Mrs.">Mrs.</Option>
            <Option value="Ms.">Ms.</Option>
            <Option value="Miss">Miss</Option>
            <Option value="Dr.">Dr.</Option>
          </Select>
        </InputGroup> </Col>
        <Col span={2}></Col>    
      <Col span={8}><Input id="firstname" onChange={this.setvalue}/></Col>
      <Col span={2}></Col>
      <Col span={8}><Input id="lastname" onChange={this.setvalue}/></Col>
    </Row>
            
          </Form.Item>
          <Form.Item
            label="Company Name"
          >
            {(<Input id="companyname" onChange={this.setvalue} />)}
          </Form.Item>
          <Form.Item label="Company Display Name">
              <Input id="contactDisplayName" onChange={this.setvalue}/>
         </Form.Item>
          <Form.Item label="Contact Email">
            {(<Input id="contactEmail" onChange={this.setvalue} style={{ width: '100%' }} type= "Email" />)}
          </Form.Item>
          <Form.Item label="Contact Phone">
            {
                <Input id="contactPhone" onChange={this.setvalue} />
              
             
            }
          </Form.Item>
          <Form.Item label="Website">
            { <Input id="website" onChange={this.setvalue} />}
          </Form.Item>
         <div style={{ background: 'pink' }}><h1 >Tax and Payments Details</h1></div>
         <Form.Item label={<span>
                Currency
              </span>}>
          <Row>
          <Col span={12}><InputGroup compact>
          <Select defaultValue="INR-INDIAN RUPEE" onChange={this.handleCurrency}>
            <Option value="Mr.">Mr.</Option>
            <Option value="Mrs.">Mrs.</Option>
            <Option value="Ms.">Ms.</Option>
            <Option value="Miss">Miss</Option>
            <Option value="Dr.">Dr.</Option>
          </Select>
        </InputGroup> </Col>
    </Row>
            
          </Form.Item> 
          <Form.Item label={<span>
                Payment Terms
              </span>}>
          <Row span={18}>
          <Col span={12}><InputGroup compact>
          <Select defaultValue="DUE ON DATE" onChange={this.handlepaymentterms}>
            <Option value="Mr.">Mr.</Option>
            <Option value="Mrs.">Mrs.</Option>
            <Option value="Ms.">Ms.</Option>
            <Option value="Miss">Miss</Option>
            <Option value="Dr.">Dr.</Option>
          </Select>
        </InputGroup> </Col>
    </Row>
            
          </Form.Item> 
          <div style={{ background: 'pink' }}><h1 >Address</h1></div>
          <Row>
            <Col span={20}>Billing Address
            <Form.Item label={<span>
                Address
              </span>}>
          <Row>   
      <Col span={20}><TextArea id="bilAddr1" onChange={this.setvalue} rows={4}/></Col>
      <Col span={20}><TextArea id="bilAddr2" onChange={this.setvalue} rows={4}/></Col>
       </Row>
            
          </Form.Item>
          <Form.Item
            label="City"
          >
            {(<Input id="bilcity" onChange={this.setvalue} />)}
          </Form.Item>
          <Form.Item label="State">
              <Input id="bilstate" onChange={this.setvalue}/>
         </Form.Item>
         <Form.Item label="Zip Code">
              <Input id="bilzip" onChange={this.setvalue} />
         </Form.Item>
          <Form.Item label="Coutry">
            {<Input id="bilcountry" onChange={this.setvalue} />}
          </Form.Item>
          <Form.Item label="Fax">
            {(
                <Input id="bilfax" onChange={this.setvalue} />
            )}
          </Form.Item>
          <Form.Item label="Phone">
            {(
                <Input id="bilphone" onChange={this.setvalue} />
            )}
          </Form.Item>
         
            </Col>
            
            <Col span={20}>Shipping Address
            <Form.Item label={<span>
                Address
              </span>}>
          <Row>   
      <Col span={20}><TextArea id="shipAddr1" onChange={this.setvalue} rows={4}/></Col>
      <Col span={20}><TextArea id="shipAddr2" onChange={this.setvalue} rows={4}/></Col>
       </Row>
            
          </Form.Item>
          <Form.Item
            label="City"
          >
            {(<Input id="shipcity" onChange={this.setvalue} />)}
          </Form.Item>
          <Form.Item label="State">
              <Input id="shipstate" onChange={this.setvalue}/>
         </Form.Item>
         <Form.Item label="Zip Code">
              <Input id="shipzip" onChange={this.setvalue}/>
         </Form.Item>
          <Form.Item label="Coutry">
            {<Input id="shipcountry" onChange={this.setvalue} />}
          </Form.Item>
          <Form.Item label="Fax">
            {(
                <Input id="shipfax" onChange={this.setvalue} />
            )}
          </Form.Item>
          <Form.Item label="Phone">
            {(
                <Input id="shipphone" onChange={this.setvalue}/>
            )}
          </Form.Item>
         </Col>


            </Row>  
          
          
          <Form.Item {...tailFormItemLayout}>
            <Button onClick={this.saveData} type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
    }
  }

  export default Add;