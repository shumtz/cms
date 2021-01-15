import { Text } from 'components/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Ul, Li, Header,
} from './style';

const Menu = [
  {
    data: {
      name: 'Home',
      link: '/dashboard',
    },
  },
  {
    data: {
      name: 'Posts',
      link: '/dashboard/posts',
    },
  },
  {
    data: {
      name: 'Criar',
      link: '/dashboard/create',
    },
  },
  {
    data: {
      name: 'Configuracoes',
      link: '/dashboard/settings',
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
    <Header>
      <Text fontSize="30px" justifyContent="center" color="#fff">Dashboard</Text>
    </Header>
    <Ul>
      {Menu.map((items) => (
        <Link to={items.data.link} key={items.data.link}><Li>{items.data.name}</Li></Link>
      ))}
    </Ul>
  </Container>
);

export default SideBar;
