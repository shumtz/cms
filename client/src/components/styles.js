import styled from 'styled-components';

export const Card = styled.div`
  display: ${(props) => props.display};
  width: ${(props) => props.width || '100%'};
  background-color: var(--white);
  border-radius: 05px;
  box-shadow: 0px 0px 05px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  overflow: auto;
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
  font-size: 20px;
  height: 50px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Button = styled.button`
  background: var(--blue-aqua);
  border: none;
  color: var(--white);
  cursor: pointer;
  font-size: 25px;
  border-radius: 05px;
  height: ${(props) => props.height || '45px'};
  width: ${(props) => props.width || '100%'};

  :active {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  }
`;

export const Text = styled.span`
  display: flex;
  font-size: ${(props) => props.fontSize || '15px'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  color: ${(props) => props.color || 'var(--black)'};
  margin: 20px;
`;

export const Label = styled.label`
  font-size: 15px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  font-size: 20px;
`;

export const Switch = styled.input`
  // Change code for Toggle Switch
  
`;

export const Form = styled.form``;

export const Content = styled.span`
  font-size: 12px;
  overflow-y: auto;
`;
