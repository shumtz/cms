import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: 100vh;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  background-color: var(--primary-blue);
`;

export const Ul = styled.ul`
  list-style-type: none;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
`;

export const Li = styled.li`
  box-shadow: 0px 0px 02px rgba(255, 255, 255, 0.5);
  border-radius: 05px;
  padding: 10px;
  margin: 10px;
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Header = styled.div`
  background-color: var(--blue-aqua);
  padding: 20px;
`;
