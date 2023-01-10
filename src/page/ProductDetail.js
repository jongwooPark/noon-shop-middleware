import React, { useEffect, useState } from 'react'
import { Col, Container, Row,DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux';


const ProductDetail = () => {


  let {id}  = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state)=>state.product);

  const [prodect, setProduct] = useState(null);

  const getProductDetail =  () => {
    dispatch(productAction.getProductDetail(id));
   

  };

  useEffect(()=>{

    //dispatch({type: "SELECT_PRODUCT", payload:{product : ""}});
    getProductDetail();
    console.log("미들웨어 거친 후 출력",product);

  },[]);
  return (
    <div>

      <Container>
          <Row>
              <Col className='product-img'>
               <img src= {product?.img} />
              </Col>
              <Col>
                <div> {product?.title} </div>
                <div> {prodect?.price} </div>
                <div>
                  <DropdownButton id="dropdown-basic-button" title="사이즈선택">
                    {product?.size.map((item)=>(
                       <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                    ))}
                    

                  </DropdownButton>
                </div>
                <div>
                <Button variant="dark">추가</Button>{' '}
                </div>

              </Col>
            </Row>
      </Container>

    </div>
  )
}

export default ProductDetail
