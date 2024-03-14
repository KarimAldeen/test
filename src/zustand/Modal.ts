import {create} from 'zustand'

interface ModalState {
  isOpen: boolean;
  setIsOpen: () => void;
 
}


export const useModalState = create<ModalState>((set) => ({
  isOpen: false,
  setIsOpen: () =>
    set((state) => ({ isOpen: !state.isOpen })),

}));
