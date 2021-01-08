import React from 'react';
import SideBar from '../../components/Sidebar';
import { Container } from './style';

const Dashboard: React.FC = () => (
  <Container>
    <SideBar />
    <h2>Dashboard</h2>
  </Container>
);

export default Dashboard;
