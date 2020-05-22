import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import '../../assets/css/Cart.css';
import { productQuantity, clearProduct } from '../../redux/actions/productQuantity'
import { useState } from 'react';
import { DOMAIN } from '../../utils/apisCalling';
import { Col, Card, CardHeader, Row, Button, CardBody } from 'reactstrap';

function CartView({basketProps, productQuantity, clearProduct}){
    let productsInCart = [];
    Object.keys(basketProps.products).forEach( function (item) {
        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item])
        }
    })

    productsInCart = productsInCart.map((product, index)=>{
        return (
            <Fragment key={index}>
                <div className="product">                                          
                <ion-icon onClick={()=> clearProduct(product.name)} name="close-circle"></ion-icon>
                <img src={`${DOMAIN}/${product.piclink}`} alt="Khong load dc anh"/>                               
                </div>
               <span className="sm-hide-name">{product.name}</span>
        <div className="price sm-hide">${product.price}</div>
        <div className="quantity">
        <ion-icon onClick ={()=>productQuantity('decrease', product.name)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
        <span>{product.numbers}</span>
        <ion-icon onClick ={()=>productQuantity('increase', product.name)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
            </div>
        <div className="total">${product.numbers * product.price}</div>
            </Fragment>
        )
    });


    return (  
        <Card className="bg-white shadow mt--7 mx-4 position-relative" style={{ zIndex: 1 }}>    
        {basketProps.cartCost != 0 ? (<div>
        <div className="container-products">            
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                {productsInCart}
                </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
    <h4 className="basketTotal">{basketProps.cartCost}</h4>
            </div>  
        </div>
        </div>): (<div className="container pt-5">
          <CardHeader className="bg-white border-0">
            <Row>
              <Col sm="12" md="9" lg="9" xl="9">
                <h2 className="mb-0">Chưa có sản phẩm nào trong giỏ hàng</h2>
              </Col>
              <Col className="text-right">
                <Button color="primary" href="/store/products" style={{ width: "100%" }}>
                  Tiếp tục mua hàng
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody/>        
        </div>)}
        </Card> 
    )
}

const mapStatetoProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStatetoProps, {productQuantity, clearProduct}) (CartView);