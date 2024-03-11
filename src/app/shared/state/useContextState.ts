import { create } from 'zustand';
import { ApplicationFeedbackMessage } from 'src/app/shared/types';

interface AppContexState {
  userAuthenticated: boolean;
  setUserAuthenticated: (authenticated: boolean) => void;
  runningApiRequests: number;
  addRunningApiRequests: () => void;
  removeRunningApiRequests: () => void;
  feedbackMessages: ApplicationFeedbackMessage[];
  addFeedbackMessage: (msg: ApplicationFeedbackMessage) => void;
  pickFeedbackMessage: () => ApplicationFeedbackMessage | undefined;
}

const useContextState = create<AppContexState>((set) => ({
  userAuthenticated: false,
  setUserAuthenticated: (authenticated: boolean) =>
    set((state: AppContexState) => ({
      ...state,
      userAuthenticated: authenticated,
    })),
  runningApiRequests: 0,
  addRunningApiRequests: () => {
    set((state: AppContexState) => ({
      runningApiRequests: state.runningApiRequests + 1,
    }));
  },
  removeRunningApiRequests: () => {
    set((state: AppContexState) => {
      if (state.runningApiRequests > 0) {
        return { runningApiRequests: (state.runningApiRequests -= 1) };
      }

      return state;
    });
  },
  feedbackMessages: [],
  addFeedbackMessage: (msg) => {
    set((state: AppContexState) => {
      const msgs = [...state.feedbackMessages];
      msgs.push(msg);
      return { feedbackMessages: msgs };
    });
  },
  pickFeedbackMessage: () => {
    let msg: ApplicationFeedbackMessage | undefined = undefined;
    set((state: AppContexState) => {
      if (state.feedbackMessages.length === 0) {
        return state;
      }
      const msgs = [...state.feedbackMessages];
      msg = msgs.shift();
      return {
        feedbackMessages: msgs,
      };
    });

    return msg;
  },
}));

export default useContextState;
