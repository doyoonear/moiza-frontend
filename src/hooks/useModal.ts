import modalListAtom from '@/atoms/modalList';
import { Modal } from '@/atoms/modalList/atom';
import { useRecoilState } from 'recoil';

interface UseModal {
  openModal: ({ key, props }: Modal) => void;
  closeModal: () => void;
}

const useModal = (): UseModal => {
  const [modalList, setModalList] = useRecoilState(modalListAtom);

  const openModal = ({ key, props }: Modal) => {
    const newModalList = [...modalList];
    newModalList.push({ key, props });
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
