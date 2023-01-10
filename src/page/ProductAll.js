import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux';


const ProductAll = () => {


  //const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const dispatch = useDispatch();
  //const {productList} = useSelector((state)=>state);
  const productList = useSelector((state)=>state.productList);


  const getProducts = () => {

    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));

   
  };
  
  useEffect(()=>{
    getProducts();
    console.log('productList=======>>', productList);
  },[query],productList );

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index)=>(
             <Col lg={3} >    <ProductCard menu={menu} key = {index}/>    </Col>
          ))}


        </Row>
      </Container>

    </div>
  )
}

export default ProductAll
