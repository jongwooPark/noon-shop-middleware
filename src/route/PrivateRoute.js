import React from 'react'
import { Navigate } from 'react-router-dom';
import Login from '../page/Login'
import ProductDetail from '../page/ProductDetail'
import {useSelector} from 'react-redux';

const PrivateRoute = ({authenticate2}) => {
  const {authenticate}= useSelector((state)=>state);


  //const {authenticate} = use
  return authenticate == true ? <ProductDetail /> : <Navigate to = "/login" />;
 // return  <ProductDetail /> ;
}

export default PrivateRoute
