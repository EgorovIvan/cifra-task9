import {create} from 'zustand';

interface BoxState {
    yPosition: number;
    setYPosition: (y: number) => void;
}

export const useBoxStore = create<BoxState>((set) => ({
    yPosition: 0,
    setYPosition: (y) => set({ yPosition: y }),
}));