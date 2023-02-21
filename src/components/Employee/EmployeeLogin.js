import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import "../../App.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const EmployeeLogin = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [temp, setTemp] = useState({})
    const navigate = useNavigate()
  
    // const handleUsernameChange = (e) => {
    //   setUsername(e.target.value);
    // };
  
    // const handlePasswordChange = (e) => {
    //   setPassword(e.target.value);
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Perform authentication logic here, such as making a API call to a server to verify the credentials
    //   // If the credentials are valid, redirect the user to their profile page
    // };

    const login=()=>{
      const data = {

          "userEmail": userEmail,
          "userPassword": userPassword
      }
      axios.post("http://127.0.0.1:8000/api/login",data).then((response)=>{
          console.log("hello")
      })
  }

  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs="12" md="6" lg="4">
      <div className="login-container">
          {/* <div>{userType}</div> */}
        <Form className="login-form">
          <FormGroup>
            <Label for="username">Email</Label>
            <Input
              type="text"
              onChange={(event)=>{setUserEmail(event.target.value)}}
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              onChange={(event)=>{setUserPassword(event.target.value)}}
              className="form-control"
            />
          </FormGroup>
          <Button type="submit" onClick={login} className="btn btn-primary">
            Submit
          </Button>
        </Form>
        </div>
      </Col>
    </Row>
  </Container>
  )
}
export default EmployeeLogin
