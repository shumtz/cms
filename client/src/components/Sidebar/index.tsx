import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Ul, Li } from './style';

const Menu = [
  {
    data: {
      name: 'Home',
      link: '/',
    },
  },
  {
    data: {
      name: 'Criar',
      link: '/create',
    },
  },
  {
    data: {
      name: 'Sair',
      link: '/logout',
    },
  },
];

const SideBar: React.FC = () => (
  <Container>
    <h2>Dashboard</h2>
    <Ul>
      {Menu.map((items) => (
        <Link to={items.data.link}><Li>{items.data.name}</Li></Link>
      ))}
    </Ul>
  </Container>
);

export default SideBar;
