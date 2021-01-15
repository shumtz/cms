import React from 'react';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import { Card, Text } from '../../../components/styles';

const Dashboard: React.FC = () => (
  <Container>
    <SideBar />
    <Card margin="02%">
      <Text fontSize="25px">Settings</Text>
    </Card>
  </Container>
);

export default Dashboard;
