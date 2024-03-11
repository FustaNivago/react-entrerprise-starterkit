import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';
import { useContextState } from '../../state';
import { ApplicationFeedbackMessage } from '../../types';
import { t } from 'i18next';
import Slide from '@mui/material/Slide';
import Alert, { AlertColor } from '@mui/material/Alert';

interface FeedbackData extends Omit<ApplicationFeedbackMessage, 'type'> {
  duration: number;
  severity: AlertColor;
}

const getFeedbackData = (appMsg: ApplicationFeedbackMessage | undefined): FeedbackData | null => {
  if (!appMsg) {
    return null;
  }

  let severity: AlertColor = 'success';
  if (appMsg.type === 'error') {
    severity = 'error';
  } else if (appMsg.type === 'warning') {
    severity = 'warning';
  }

  const data: FeedbackData = {
    severity: severity,
    message: appMsg.message,
    permanent: appMsg.permanent,
    duration: appMsg.permanent ? 8000 : 4000,
  };

  return data;
};

const ApplicationFeedback = () => {
  const [feedbackData, setFeedbackData] = useState<FeedbackData | null>(null);
  const { feedbackMessages, pickFeedbackMessage } = useContextState((state) => state);
  useEffect(() => {
    if (feedbackMessages.length > 0) {
      const data = getFeedbackData(pickFeedbackMessage());
      setFeedbackData(data);
    }
  }, [feedbackMessages]);

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setFeedbackData(null);
  };

  return (
    <Snackbar
      open={!!feedbackData}
      onClose={handleClose}
      autoHideDuration={feedbackData?.duration}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      TransitionComponent={(props) => <Slide {...props} direction="down" />}
    >
      <Alert onClose={handleClose} severity={feedbackData?.severity} variant="filled" sx={{ width: '100%' }}>
        {t(feedbackData?.message as string)}
      </Alert>
    </Snackbar>
  );
};

export default ApplicationFeedback;
