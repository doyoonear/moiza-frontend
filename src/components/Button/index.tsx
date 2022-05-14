import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return <Container onClick={onClick}>{text}</Container>;
};

export default Button;

const Container = styled.button`
  width: 100%;
  //임의로 height
  height: 50px;
  background: black;
  color: white;
`;
