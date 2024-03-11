import { Suspense } from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ErrorBoundary } from 'react-error-boundary';

import { LoaderComponent } from 'src/app/shared/components/loader';
import useClientTheme from 'src/app/shared/theme/useClientTheme';
import AppRoutesComponent from 'src/app/AppRoutesComponent';
import { HeaderComponent } from 'src/app/shared/components/header';
import { ErrorFallback } from 'src/app/shared/components/errorFallback';
import useApplicationLoading from 'src/app/shared/hooks/useApplicationLoading';
import { ApplicationFeedback } from './shared/components/applicationFeedback';

function App() {
  const { theme } = useClientTheme();
  const isLoading = useApplicationLoading();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CssBaseline />
          <HeaderComponent />
          <Suspense fallback={<LoaderComponent />}>
            <AppRoutesComponent />
            {isLoading && <LoaderComponent />}
            <ApplicationFeedback />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
