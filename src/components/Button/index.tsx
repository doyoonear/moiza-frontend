import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, isDisabled, onClick }: ButtonProps) => {
  return (
    <Container onClick={onClick} disabled={isDisabled}>
      {text}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  width: 100%;
  //임의로 height
  height: 50px;
  background: ${({ disabled }) => (disabled ? 'gray' : 'black')};
  color: white;
`;
