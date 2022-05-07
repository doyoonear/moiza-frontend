import modalListAtom from '@/atoms/modalList';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

export interface SelectableModalProps {
  title: string;
  children?: ReactNode;
}

const SelectableModal = ({ title, children }: SelectableModalProps) => {
  const modalList = useRecoilValue(modalListAtom);
  const isActivated = modalList.find((modal) => modal.key === 'selectableModal');

  return (
    <Container isVisible={isActivated ? true : false}>
      <Title>{title}</Title>
      <Lists>{children}</Lists>
    </Container>
  );
};

export default SelectableModal;

interface ContainerProps {
  isVisible?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  //임의로 height
  height: 50vh;
  background: blue;
`;

const Title = styled.h3``;

const Lists = styled.ul`
  > li {
    cursor: pointer;
  }
`;
