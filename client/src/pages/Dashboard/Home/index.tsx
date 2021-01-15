import React from 'react';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import { Card } from '../../../components/styles';

const Dashboard: React.FC = () => (
  <Container>
    <SideBar />
    <Card margin="02%">
      <Card>
        <h2>Posts</h2>
      </Card>
      <Card>
        <h2>Comentarios</h2>
      </Card>
      <Card>
        <h2>Lidos</h2>
      </Card>
    </Card>
  </Container>
);

export default Dashboard;
