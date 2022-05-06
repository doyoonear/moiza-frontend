import { SelectableModal } from '@/components/SelectableModal/SelectableModal';
import { atom } from 'recoil';

type ModalKey = 'selectableModal';
type ModalProps = SelectableModal;

export interface Modal {
  key: ModalKey;
  props: ModalProps;
}

const modalListAtom = atom<Modal[]>({
  key: 'modalListAtom',
  default: [],
});

export default modalListAtom;
