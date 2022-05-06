import modalListAtom from '@/atoms/modalList/atom';
import useModal from '@/hooks/useModal';
import styled from '@emotion/styled';
import { MouseEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';
import ConfirmModal from '../ConfirmModal';
import SelectableModal from '../SelectableModal';

interface ModalPortalProps {
  children?: ReactNode;
}

const element = document.querySelector('#modal-root');

const ModalPortal = ({ children }: ModalPortalProps) => {
  const modalList = useRecoilValue(modalListAtom);
  const { closeModal } = useModal();

  const clickBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = event;
    if (target !== currentTarget) return;
    closeModal();
  };
  return createPortal(
    <>
      {modalList.map(({ key, props }) => {
        if (key === 'selectableModal') {
          return (
            <Wrapper onClick={clickBackdrop} key={key}>
              <SelectableModal {...props}>{children}</SelectableModal>
            </Wrapper>
          );
        }
        if (key === 'confirmModal') {
          return (
            <Wrapper onClick={clickBackdrop} key={key}>
              <ConfirmModal {...props}>{children}</ConfirmModal>
            </Wrapper>
          );
        }
        return null;
      })}
    </>,
    element
  );
};

export default ModalPortal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;
