import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import ComanyLogo from 'src/assets/images/company_logo.png';
import { useContextState } from '../../state';
import { RoutePath } from '../../routes';
import LoginForm from './components/LoginForm';
import { LoginFormData } from './model/loginFormSchema';
import { useEffect } from 'react';

const LoginPage = () => {
  const { t } = useTranslation();
  const userAuthenticated = useContextState((state) => state.userAuthenticated);
  const setUserAuthenticated = useContextState((state) => state.setUserAuthenticated);
  const navigate = useNavigate();
  const { state: redirectTo } = useLocation();

  useEffect(() => {
    if (userAuthenticated) {
      navigate(RoutePath.dashboard);
    }
  }, []);

  const onLogin = (data: LoginFormData) => {
    setUserAuthenticated(true);
    if (redirectTo) {
      navigate(redirectTo);
    } else {
      navigate(RoutePath.dashboard);
    }
  };

  return (
    <Box flexGrow={1} display="flex" justifyContent="center" alignItems="center" bgcolor="primary.main">
      <Paper elevation={3}>
        <Box width={400} minHeight={200} display="flex" flexDirection="column" alignItems="center" padding={2}>
          <h2>{t('login_page')}</h2>
          <LoginForm onSubmit={onLogin} />
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
