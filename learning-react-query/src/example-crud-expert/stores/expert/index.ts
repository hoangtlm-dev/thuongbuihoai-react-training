import { create } from "zustand";
import { Expert } from "../../interfaces/expert";

interface ExpertType {
  experts: Expert[];
  setExperts: (value: Expert[]) => void;
  addExperts: (value: Expert) => void;
}

export const useExpertStore = create<ExpertType>()((set, get) => ({
  experts: [],
  setExperts: (data: Expert[]) => set(() => ({ experts: data })),
  addExperts: (value: Expert) => set(() => ({ experts: [...get().experts, value] })),
}));
