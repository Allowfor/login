
import React from 'react';
import {Col,Container,Row,Form,Button}from "react-bootstrap";


const LoginPage=()=>{
    return(
        <Container>
            <h1 className="shadow-sm text-primary mt-5 p-3 text-center rounded">Login</h1>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="success btn-block" type="submit">
    Submit
  </Button>
</Form>
                    
                </Col>
            </Row>
            <h6 className="mt-5 p-1 text-center text-secondary">Copyright @ 2021 Auswin Mijo.All Rights Reserved</h6>
        </Container>
    
    )
   
 
}
export default LoginPage;