import modalAtom from '@/atoms/modal/atom';
import { useSetRecoilState } from 'recoil';

interface UseModal {
  openModal: () => void;
  closeModal: () => void;
}

const useModal = (): UseModal => {
  const setModal = useSetRecoilState(modalAtom);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return { openModal, closeModal };
};

export default useModal;
