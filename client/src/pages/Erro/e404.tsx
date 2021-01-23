import React from 'react';
import Title from 'components/Helmet';
import { Text, Button, Container } from 'components/styles';
import { Link } from 'react-router-dom';

const erro404: React.FC = () => (
  <Container display="grid" backgroundColor="var(--primary-blue)">
    <Title title="Erro 404" />
    <Text fontSize="10vh" color="#fff">404</Text>
    <Text fontSize="20px" color="#fff">Ops! Parece que esta pagina nao existe....</Text>
    <Link to="/login"><Button>Clique aqui para voltar</Button></Link>
  </Container>
);

export default erro404;
