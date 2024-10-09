import {create} from 'zustand';

interface DragState {
    positionY: number;
    setPositionY: (y: number) => void;
}

export const useStore = create<DragState>((set) => ({
    positionY: window.innerHeight / 2, // начальное положение
    setPositionY: (y) => set(() => ({ positionY: y })),
}));
