import React from 'react';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import { Card } from '../../../components/styles';

const Dashboard: React.FC = () => (
  <Container>
    <SideBar />
    <Card margin="02%">
      <h1>Home</h1>
    </Card>
  </Container>
);

export default Dashboard;
