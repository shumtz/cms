import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Card, Input, Button, Text, Label,
} from '../../components/styles';

const Recovery: React.FC = () => (
  <Container backgroundColor="var(--primary-blue)">
    <Card width="50%">
      <Text fontSize="25px">Perdi minha senha</Text>
      <Label>
        Digite o e-mail da sua conta
        <Input placeholder="Digite seu e-mail" />
      </Label>
      <Button>Enviar</Button>
      <Link to="/login"><Text>Voltar</Text></Link>
    </Card>
  </Container>
);

export default Recovery;
