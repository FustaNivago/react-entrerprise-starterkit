import Button from '@mui/material/Button';
import { LoginFormData, loginFormSchema } from '../model/loginFormSchema';
import { Form, Formik } from 'formik';
import { FormInputField } from 'src/app/shared/ui';

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
}

const initialValues: LoginFormData = {
  login: '',
  password: '',
};

const LoginForm = (props: LoginFormProps) => {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormSchema}
      onSubmit={(values, _) => {
        onSubmit(values);
      }}
    >
      <Form>
        <FormInputField type="text" name="login" label="Email" />
        <FormInputField type="password" name="password" label="Password" />
        <Button variant="contained" type="submit" sx={{ mt: 2 }} fullWidth>
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
