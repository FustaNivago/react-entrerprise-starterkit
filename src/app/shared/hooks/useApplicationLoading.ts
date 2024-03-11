import { useEffect, useRef, useState } from 'react';
import { useContextState } from 'src/app/shared/state';
import { api } from 'src/app/shared/api';
import { RoutePath } from '../routes';
import { useNavigate } from 'react-router-dom';

const useApplicationLoading = () => {
  const { runningApiRequests, addRunningApiRequests, removeRunningApiRequests, addFeedbackMessage } = useContextState(
    (state) => state
  );
  const navigate = useNavigate();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requestHandler = api.interceptors.request.use(
      (r) => {
        addRunningApiRequests();
        return r;
      },
      (_) => {
        removeRunningApiRequests();
      }
    );
    const responceHandler = api.interceptors.response.use(
      (r) => {
        removeRunningApiRequests();
        if (r.data.success !== undefined && r.data.feedback) {
          addFeedbackMessage({
            type: r.data.success ? 'info' : 'error',
            message: r.data.feedback.message,
            permanent: r.data.feedback.permanent,
          });
        }
        return r;
      },
      (error) => {
        removeRunningApiRequests();
        if (error?.response?.status === 401) {
          navigate(RoutePath.login);
        } else {
          if (!window.navigator.onLine) {
            addFeedbackMessage({
              type: 'error',
              message: 'offline_error',
              permanent: false,
            });
          } else {
            addFeedbackMessage({
              type: 'error',
              message: 'application_error',
            });
          }
        }
      }
    );

    return () => {
      api.interceptors.request.eject(requestHandler);
      api.interceptors.response.eject(responceHandler);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (runningApiRequests < 1) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      setIsLoading(false);
      timerRef.current = null;
      return;
    }

    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        if (runningApiRequests > 0) {
          setIsLoading(true);
        } else {
          setIsLoading(false);
        }
      }, 500);
    }
  }, [runningApiRequests]);

  return isLoading;
};

export default useApplicationLoading;
