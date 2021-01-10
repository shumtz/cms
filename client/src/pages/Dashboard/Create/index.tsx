import React from 'react';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import { Button, Card, Input } from '../../../components/styles';

const Dashboard: React.FC = () => (
  <Container>
    <SideBar />
    <Card margin="02%">
      <form>
        <Input placeholder="Nome" />
        <Button>Enviar</Button>
      </form>
    </Card>
  </Container>
);

export default Dashboard;
