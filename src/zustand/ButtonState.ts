import {create} from 'zustand'

interface ModalState {
  ActiveTab: number;
  setActiveTab: (Key:number) => void;
 
}


export const useButtonState = create<ModalState>((set) => ({
  ActiveTab: 1,
  setActiveTab: (Key) =>
    set((state) => ({ ActiveTab: Key })),

}));
