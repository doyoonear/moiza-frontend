import modalAtom from '@/atoms/modal/atom';
import { useRecoilState } from 'recoil';

interface UseModal {
  openModal: () => void;
  closeModal: () => void;
}

const useModal = (): UseModal => {
  const [modal, setModal] = useRecoilState(modalAtom);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return { openModal, closeModal };
};

export default useModal;
