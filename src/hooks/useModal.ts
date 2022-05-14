import modalListAtom, { ModalListKey } from '@/atoms/modalList/atom';
import { useRecoilState } from 'recoil';

interface UseModal {
  openModal: (modalListKey: ModalListKey) => void;
  closeModal: () => void;
}

const useModal = (): UseModal => {
  const [modalList, setModalList] = useRecoilState(modalListAtom);

  const openModal = (modalListKey: ModalListKey) => {
    const newModalList = [...modalList];
    newModalList.push(modalListKey);
    setModalList(newModalList);
  };

  const closeModal = () => {
    const newModalList = [...modalList];
    newModalList.pop();
    setModalList(newModalList);
  };

  return { openModal, closeModal };
};

export default useModal;
