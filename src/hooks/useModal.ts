import modalAtom, { ModalKey } from '@/atoms/modal/atom';
import { useRecoilState } from 'recoil';

interface UseModal {
  openModal: (modalKey: ModalKey) => void;
  closeModal: () => void;
}

const useModal = (): UseModal => {
  const [modal, setModal] = useRecoilState(modalAtom);

  const openModal = (modalKey: ModalKey) => {
    const newModal = [...modal];
    newModal.push(modalKey);
    setModal(newModal);
  };

  const closeModal = () => {
    const newModal = [...modal];
    newModal.pop();
    setModal(newModal);
  };

  return { openModal, closeModal };
};

export default useModal;
