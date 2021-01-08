import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Card, Container, Input, Text,
} from '../../components/styles';

const Login: React.FC = () => (
  <Container>
    <Card width="50%">
      <Text fontSize="25px">Login</Text>
      <form>
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/recovery-password"><Text>Esqueci a senha</Text></Link>
    </Card>
  </Container>
);

export default Login;
