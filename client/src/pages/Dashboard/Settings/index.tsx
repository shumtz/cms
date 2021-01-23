import React from 'react';
import Title from 'components/Helmet';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import {
  Card, Form, Input, Label, Text,
} from '../../../components/styles';

const Dashboard: React.FC = () => (
  <Container>
    <Title title="Configurações" />
    <SideBar />
    <Card margin="02%">
      <Text fontSize="25px" justifyContent="flex-start">Configuracoes</Text>

      <Form>
        <Label>
          Titulo do site
          <Input placeholder="Index" />
        </Label>
        <Label>
          Não sei
          <Input placeholder="Titulo do site" />
        </Label>
      </Form>
    </Card>
  </Container>
);

export default Dashboard;
