import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import "../../App.css"

const AdminLogin = ({userType}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform authentication logic here, such as making a API call to a server to verify the credentials
      // If the credentials are valid, redirect the user to their profile page
    };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="12" md="6" lg="4">
        <div className="login-container">
            <div>{userType}</div>
          <Form onSubmit={handleSubmit} className="login-form">
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
              />
            </FormGroup>
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
          </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminLogin