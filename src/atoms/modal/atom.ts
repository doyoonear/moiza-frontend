import { atom } from 'recoil';

export type ModalKey = 'selectableModal' | 'confirmModal';

const modalAtom = atom<ModalKey[]>({
  key: 'modalAtom',
  default: [],
});

export default modalAtom;
