import styled from '@emotion/styled';
import { ChangeEventHandler } from 'react';

interface SelectableModalProps {
  title: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: string[];
}

const SelectableModal = ({ title, name, onChange, children }: SelectableModalProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Wrapper>
        {children.map((element) => (
          <Item key={element}>
            <label htmlFor={element}>
              <input type="radio" id={element} name={name} value={element} onChange={onChange} />
              {element}
            </label>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SelectableModal;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  //임의로 height
  height: 50vh;
  background: blue;
`;

const Title = styled.h3``;

const Wrapper = styled.ul``;

const Item = styled.li`
  cursor: pointer;
  input {
    width: 0;
  }
`;
