import modalAtom from '@/atoms/modal/atom';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

interface SelectableModalProps {
  title: string;
  children?: ReactNode;
}

interface StyledContainerProps {
  isVisible?: boolean;
}

const SelectableModal = ({ title, children }: SelectableModalProps) => {
  const modal = useRecoilValue(modalAtom);
  return (
    <Container isVisible={modal ? true : false}>
      <Title>{title}</Title>
      <Lists>{children}</Lists>
    </Container>
  );
};

export default SelectableModal;

const Container = styled.div<StyledContainerProps>`
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
