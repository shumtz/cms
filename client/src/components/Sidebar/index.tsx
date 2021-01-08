import React from 'react';
import { Container, Ul, Li } from './style';

const Menu = [
  'Home',
  'Post',
  'Conta',
];

const SideBar: React.FC = () => (
  <Container>
    <h2>Dashboard</h2>
    <Ul>
      {Menu.map((items) => (
        <Li>{items}</Li>
      ))}
    </Ul>
  </Container>
);

export default SideBar;
