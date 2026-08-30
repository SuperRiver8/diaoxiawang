"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type CustomerDemoState = {
  authenticated: boolean;
  memberName: string;
  email: string;
  points: number;
  login: (email?: string) => void;
  register: (name: string, email: string) => void;
  logout: () => void;
  reset: () => void;
};

const initial = {
  authenticated: false,
  memberName: "陳小蝦",
  email: "member@demo.hk",
  points: 1280,
};

export const useCustomerDemoStore = create<CustomerDemoState>()(
  persist(
    (set) => ({
      ...initial,
      login: (email = "member@demo.hk") => set({ authenticated: true, email }),
      register: (memberName, email) =>
        set({ authenticated: true, memberName, email, points: 100 }),
      logout: () => set({ authenticated: false }),
      reset: () => set(initial),
    }),
    { name: "shrimp-customer-demo-v2" },
  ),
);
