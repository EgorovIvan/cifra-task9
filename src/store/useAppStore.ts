import {create} from 'zustand';

interface AppState {
    appHeight: number;
    setAppHeight: (height: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
    appHeight: 0,
    setAppHeight: (height) => set({ appHeight: height }),
}));