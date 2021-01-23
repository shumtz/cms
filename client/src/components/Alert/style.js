import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;

export const Card = styled.div`
  animation: ${fadeIn} ease 1s;
  background-color: var(--white);
  border-radius: 05px;
  box-shadow: 0px 0px 05px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  left: 100%;
  margin: 20px;
  padding: 15px;
  position: absolute;
  top: 0;
  transform: translateX(-120%);
  width: 20%;
  z-index: 9999;
`;

export const Text = styled.span`
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
`;
