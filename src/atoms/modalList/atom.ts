import { atom } from 'recoil';

export type ModalListKey = 'selectableModal' | 'confirmModal';

const modalListAtom = atom<ModalListKey[]>({
  key: 'modalListAtom',
  default: [],
});

export default modalListAtom;
