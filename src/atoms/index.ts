import { atom, atomFamily } from 'recoil';

export const currentOpenIndexState = atom<number | null>({
  key: 'currentOpenIndex',
  default: null,
});
