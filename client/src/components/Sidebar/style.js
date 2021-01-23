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
  border-radius: 05px;
  border:1px solid var(--blue-aqua);
  color: var(--white);
  cursor: pointer;
  margin: 10px;
  padding: 10px;

  &:hover {
    opacity: 0.6;
  }
`;

export const Header = styled.div`
  background-color: var(--blue-aqua);
  padding: 20px;
`;
