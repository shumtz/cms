import React from 'react';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import { Card, Text } from '../../../components/styles';

const Dashboard: React.FC = () => (
  <Container>
    <SideBar />
    <Card margin="02%" display="flex">
      <Card margin="20px">
        <Text fontSize="25px" justifyContent="flex-start">Publicacoes</Text>
        <Text fontSize="15px" justifyContent="flex-start">200</Text>
      </Card>
    </Card>
  </Container>
);

export default Dashboard;
