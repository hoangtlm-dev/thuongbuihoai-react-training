import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Interfaces
import {
  Account,
  CheckType
} from '@interfaces/account';

// Helpers
import { checkAccount } from '@helpers/login';

// Constants
import { STORAGE_KEY } from '@constants/common';

interface AccountType {
  accounts: Account[];
  authenticated: boolean;
  isIncorrectEmail: boolean;
  isIncorrectPassword: boolean;
  setAccounts: (value: Account[]) => void;
  setIsIncorrectEmail: (value: boolean) => void;
  setIsIncorrectPassword: (value: boolean) => void;
  login: (
    data?: Account[],
    email?: string,
    password?: string,
    type?: CheckType
  ) => void;
  logout: () => void;
}

export const useAuthenticationStore = create<AccountType>()(
  persist(
    (set) => ({
      accounts: [],
      authenticated: false,
      isIncorrectEmail: false,
      isIncorrectPassword: false,
      setAccounts: (data: Account[]) => set(() => ({ accounts: data })),
      setIsIncorrectEmail: (value) => set(() => ({ isIncorrectEmail: value })),
      setIsIncorrectPassword: (value) =>
        set(() => ({ isIncorrectPassword: value })),
      login: (
        data?: Account[],
        email?: string,
        password?: string,
        type?: CheckType
      ) => {
        const checkCorrectEmail = checkAccount(
          data,
          email,
          '',
          CheckType.email
        );
        const checkCorrectPassword = checkAccount(
          data,
          '',
          password,
          CheckType.password
        );

        if (checkAccount(data, email, password, type)) {
          set((state) => ({
            ...state,
            isIncorrectEmail: !!checkCorrectEmail,
            isIncorrectPassword: !!checkCorrectPassword,
            authenticated: true
          }));
        } else {
          set((state) => ({
            ...state,
            isIncorrectEmail: !checkCorrectEmail,
            isIncorrectPassword: !checkCorrectPassword
          }));
        }
      },
      logout: () => set((state) => ({ ...state, authenticated: false }))
    }),
    {
      name: STORAGE_KEY.TOKEN,
      partialize: (state) => ({
        authenticated: state.authenticated
      }),
    }
  )
);
