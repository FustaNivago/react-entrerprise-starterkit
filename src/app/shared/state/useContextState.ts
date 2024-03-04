import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface AppContexState {
  userAuthenticated: boolean;
  setUserAuthenticated: (authenticated: boolean) => void;
}

const useContextState = create<AppContexState>()(
  immer((set) => ({
    userAuthenticated: false,
    setUserAuthenticated: (authenticated) =>
      set((state: AppContexState) => {
        state.userAuthenticated = authenticated;
      }),
  }))
);

export default useContextState;
