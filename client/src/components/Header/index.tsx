import React from 'react';
import { Card, Text } from 'components/styles';
import { Li, Ul } from './style';

const Header = () => (
  <Card>
    <Text>LOGO</Text>
    <Ul>
      <Li>Home</Li>
      <Li>About</Li>
      <Li>Contact</Li>
    </Ul>
  </Card>
);

export default Header;
