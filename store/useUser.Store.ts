import { create } from "zustand";

export interface UserState {
  user: any;
  setUser: (user: any) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
}));
