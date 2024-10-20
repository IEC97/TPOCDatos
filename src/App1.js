import React from 'react';
import './App1.css';
import { Button, Form, FormGroup, Label, Input } 
from 'reactstrap';


function App1() {
  return (
    <Form className="login-form">
      <h1>
        <span className="font-weight-bold"></span>
      </h1>
      <h2 className="text-center">Bienvenido</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email"/>
      </FormGroup>

      <FormGroup>
        <Label>Contraseña</Label>
        <Input type="password" placeholder="Contraseña"/>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Log in</Button>
      <div className="text-center">
        <a href="/sign-up">Sign up</a>
        <span className="p-2">|</span>
        <a href="/forgot-password">Olvidaste la contraseña</a>
      </div>
    </Form>
  );
}

export default App1;
