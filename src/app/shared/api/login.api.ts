import { apiPost, apiUrl } from '.';
import { ContextUser } from '../types';

const initUser = (onSuccess?: (data: ContextUser) => void, onComplete?: () => void) => {
  apiPost<ContextUser>(apiUrl.login + '/contextuser', null, {
    onSuccess,
    onComplete,
  });
};

const logoutUser = (onSuccess?: () => void) => {
  apiPost<void>(apiUrl.login + '/logout', null, {
    onSuccess,
    silent: true,
  });
};

export { initUser, logoutUser };
