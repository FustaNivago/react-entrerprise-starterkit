export interface ServiceResponse<T> {
  data: T;
  success: boolean;
  feedback?: Feedback;
}

export interface Feedback {
  message: string;
  permanent?: boolean;
}
