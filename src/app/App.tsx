import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { LoaderComponent } from './shared/components/loader';
import useClientTheme from './shared/theme/useClientTheme';
import AppRoutesComponent from './AppRoutesComponent';
import { HeaderComponent } from './shared/components/header';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './shared/components/errorFallback';

function App() {
  const { theme } = useClientTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CssBaseline />
          <BrowserRouter>
            <HeaderComponent />
            <Suspense fallback={<LoaderComponent />}>
              <AppRoutesComponent />
            </Suspense>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
