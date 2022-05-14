import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Button from '../Button';

interface ConfirmModalProps {
  title: string;
  //confirmText를 필수 props로 할 때 왜 오류가 나는 걸까.....
  confirmText?: string;
  children?: ReactNode;
}

const ConfirmModal = ({ title, confirmText, children }: ConfirmModalProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Contents>{children}</Contents>
      <Button text={confirmText} />
    </Container>
  );
};

export default ConfirmModal;

const Container = styled.div``;

const Title = styled.h3``;

const Contents = styled.div``;
