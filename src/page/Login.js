import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
import { productAction } from '../redux/actions/productAction';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {

  let dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const loginUser = (e) => {

    e.preventDefault();
    dispatch(productAction.login(email, password));
    //로그인 왼료 후 메인페이지 
    navigate('/');
  }
  return (
    <div>
      <Container className='login-win'>
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(event) => (setEmail(event.target.value))} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>패스워드</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(event) => (setPassword(event.target.value))} />
          </Form.Group>
          <Button variant="warning" type="submit">
            로그인
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Login
