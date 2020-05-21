import React, { Component } from 'react';
import Cards from './Cards';
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";



export class ProductsList extends Component{
 

  render(){
 
  return (
    <> 
    <div className="d-flex p-2"> 
           {/* Card stats */}
          <Row>
            <Col lg="6" xl="3" className="d-flex p-2">
            <Cards/> 
            </Col>
            <Col lg="6" xl="3" className="d-flex p-2">
            <Cards/> 
            </Col>
            <Col lg="6" xl="3" className="d-flex p-2">
            <Cards/> 
            </Col>
            <Col lg="6" xl="3" className="d-flex p-2">             
            <Cards/> 
            </Col>  
            <Col lg="6" xl="3" className="d-flex p-2">
            <Cards/> 
            </Col>
            <Col lg="6" xl="3" className="d-flex p-2">
            <Cards/> 
            </Col>
            <Col lg="6" xl="3" className="d-flex p-2">             
            <Cards/> 
            </Col>      

            <Col lg="6" xl="3"  className="d-flex p-2">
            <Cards/> 
            </Col>
            <Col lg="6" xl="3"  className="d-flex p-2">
            <Cards/> 
            </Col>
            <Col lg="6" xl="3"  className="d-flex p-2">
            <Cards/> 
            </Col>
            <Col lg="6" xl="3"  className="d-flex p-2">             
            <Cards/> 
            </Col>  
            <Col lg="6" xl="3"  className="d-flex p-2">
            <Cards/> 
            </Col>
            <Col lg="6" xl="3"  className="d-flex p-2">
            <Cards/> 
            </Col>
            <Col lg="6" xl="3"  className="d-flex p-2">             
            <Cards/> 
            </Col>
          </Row>
    </div>
  </>
  );
  }
}

export default ProductsList;