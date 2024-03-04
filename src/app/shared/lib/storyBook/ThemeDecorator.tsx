import { Decorator } from '@storybook/react';
import useClientTheme from '../../theme';
import { ThemeProvider } from '@mui/material/styles';

export const ThemeDecorator: Decorator = (Story) => {
  const { theme } = useClientTheme();

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};
