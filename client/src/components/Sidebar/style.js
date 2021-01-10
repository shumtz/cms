import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: 98vh;
  box-shadow: 0px 0px 05px rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
`;

export const Li = styled.li`
  box-shadow: 0px 0px 05px rgba(0, 0, 0, 0.5);
  border-radius: 05px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
