import React from 'react';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import { Button, Card, Text } from '../../../components/styles';

const Posts: React.FC = () => (
  <Container>
    <SideBar />
    <Card margin="02%">
      <Button>Criar novo</Button>
      <Card margin="10px 0px">
        <Text
          fontSize="30px"
          justifyContent="flex-start"
        >
          Titulo
        </Text>
      </Card>
    </Card>
  </Container>
);

export default Posts;
