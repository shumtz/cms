import React from 'react';
import { Helmet } from 'react-helmet';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import {
  Card, Form, Input, Label, Text,
} from '../../../components/styles';

const Dashboard: React.FC = () => (
  <Container>
    <Helmet>
      <title>Configurações</title>
    </Helmet>
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
