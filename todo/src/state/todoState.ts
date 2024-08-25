// src/atoms/todoAtom.ts
import { atom, selector, useRecoilState } from 'recoil';
import { Todo } from '../types/inputForm';

export const todoState = atom<Todo[]>({
  key: 'todoState',
  default: [],
});

export const todoCount = atom<number>({
  key: 'todoCount',
  default: 1
});
