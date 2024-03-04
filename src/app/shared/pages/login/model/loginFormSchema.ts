import * as yup from 'yup';

const loginFormSchema = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});

export { loginFormSchema };

export interface LoginFormData extends yup.InferType<typeof loginFormSchema> {}
