import { Feedback } from '.';

type FeedbackMessageType = 'info' | 'warning' | 'error';

export interface ApplicationFeedbackMessage extends Feedback {
  type: FeedbackMessageType;
}
