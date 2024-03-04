import { Theme, createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';

export interface UseClientThemeResults {
  theme: Theme;
  swithTheme: () => void;
}

type ThemeMode = 'light' | 'dark';

const useClientTheme = (): UseClientThemeResults => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const swithTheme = () => {
    const newMode: ThemeMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };

  return { theme, swithTheme };
};

export default useClientTheme;
