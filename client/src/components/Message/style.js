import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;

export const Card = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  transform: translateX(-120%);
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 20px;
  box-shadow: 0px 0px 05px rgba(0, 0, 0, 0.5);
  background-color: var(--white);
  width: 20%;
  z-index: 9999;
  border-radius: 05px;
  animation: ${fadeIn} ease 1s;
`;

export const Text = styled.span`
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
`;
