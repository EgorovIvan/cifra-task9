import {create} from 'zustand';

interface BoxState {
    yPosition: number;
    appHeight: number;
    isTouchUp: boolean;
    setYPosition: (y: number) => void;
    setAppHeight: (height: number) => void;
    setIsTouchUp: (b: boolean) => void;
}

export const useBoxStore = create<BoxState>((set) => ({
    yPosition: 800,
    appHeight: window.innerHeight + 10,
    isTouchUp: true,
    setYPosition: (y) => set({ yPosition: y }),
    setAppHeight: (height) => set({ appHeight: height }),
    setIsTouchUp: (b) => set({ isTouchUp: b }),
}));
