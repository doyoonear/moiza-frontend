import { ConfirmModalProps } from '@/components/ConfirmModal/ConfirmModal';
import { SelectableModalProps } from '@/components/SelectableModal/SelectableModal';
import { atom } from 'recoil';

type ModalKey = 'selectableModal' | 'confirmModal';
type ModalProps = SelectableModalProps | ConfirmModalProps;

export interface Modal {
  key: ModalKey;
  props: ModalProps;
}

const modalListAtom = atom<Modal[]>({
  key: 'modalListAtom',
  default: [],
});

export default modalListAtom;
