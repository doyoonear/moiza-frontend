import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

interface StartingChatInputProps {
  type: string;
  id: string;
  title: string;
  placeHolder?: string;
  readOnly?: boolean;
  isSelectable?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
}

const StartingChatInput = ({
  type = 'text',
  id,
  title,
  placeHolder,
  readOnly,
  isSelectable,
  onClick,
}: StartingChatInputProps) => {
  return (
    <Container>
      <Input
        type={type}
        id={id}
        placeholder={placeHolder}
        readOnly={readOnly}
        isSelectable={isSelectable}
        onClick={onClick}
      />
      <Title htmlFor={id}>{title}</Title>
    </Container>
  );
};

export default StartingChatInput;

interface InputProps {
  isSelectable?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Input = styled.input<InputProps>`
  border: 1px solid;
  cursor: ${({ isSelectable }) => (isSelectable ? 'pointer' : 'text')};
  :focus {
    background-color: rgba(0, 0, 0, 0.3);
    caret-color: red;
  }
  :focus + label {
    color: red;
  }
`;

const Title = styled.label``;
