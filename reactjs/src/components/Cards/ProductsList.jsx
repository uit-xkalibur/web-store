import React, { Component } from 'react';
import Cards from './Cards';
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";



export class ProductList extends Component{
  constructor(props){
      super(props);
  }


  render(){
 
  return (
    <> 
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"> 
      <Container fluid>
        <div className="header-body">
          {/* Card stats */}
          <Row>
            <Col lg="6" xl="3" style={{margin: '25px'}}>
            <Cards/> 
            </Col>
            <Col lg="6" xl="3" style={{margin: '25px'}}>
            <Cards/> 
            </Col>
            <Col lg="6" xl="3" style={{margin: '25px'}}>
            <Cards/> 
            </Col>
            <Col lg="6" xl="3" style={{margin: '25px'}}>             
            <Cards/> 
            </Col>  
            <Col lg="6" xl="3" style={{margin: '25px'}}>
            <Cards/> 
            </Col>
            <Col lg="6" xl="3" style={{margin: '25px'}}>
            <Cards/> 
            </Col>
            <Col lg="6" xl="3" style={{margin: '25px'}}>             
            <Cards/> 
            </Col>      
    
          </Row>
        </div>
      </Container>
    </div>
  </>
  );
  }
}

export default ProductList;