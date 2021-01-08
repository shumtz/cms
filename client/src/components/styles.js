import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 05px;
  box-shadow: 0px 0px 05px rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: ${(props) => props.width};
`;

export const Container = styled.div`
  align-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => props.display || 'flex'};
  height: 100vh;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  font-size: 20px;
  height: 50px;
  margin-bottom: 20px;
  padding-left: 20px;
  width: 100%;
`;

export const Button = styled.button`
  background: #4cbbb9;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 25px;
  height: ${(props) => props.height || '45px'};
  width: ${(props) => props.width || '100%'};
`;

export const Text = styled.span`
  display: flex;
  font-size: ${(props) => props.fontSize || '15px'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  color: ${(props) => props.color || '#000'};
  margin: 20px;
`;

export const Label = styled.label`
  font-size: 15px;
`;
