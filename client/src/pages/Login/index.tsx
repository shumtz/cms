import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Button, Card, Container, Input, Text, Form,
} from '../../components/styles';

const Login: React.FC = () => (
  <Container backgroundColor="var(--primary-blue)">
    <Helmet>
      <title>Login</title>
    </Helmet>
    <Card width="50%">
      <Text fontSize="25px">Login</Text>
      <Form>
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Entrar</Button>
      </Form>
      <Link to="/recovery-password"><Text>Esqueci a senha</Text></Link>
    </Card>
  </Container>
);

export default Login;
