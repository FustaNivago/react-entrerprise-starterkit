import { ThemeOptions } from '@mui/material/styles';

export const ThemeFontsConfig: ThemeOptions = {
  typography: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    fontSize: 12,

    h1: {
      fontWeight: 300, // "light",
      fontSize: '96px',
      letterSpacing: 0,
      textTransform: 'none',
    },
    h2: {
      fontWeight: 300, // "light",
      fontSize: '60px',
      letterSpacing: 0,
      textTransform: 'none',
    },
    h3: {
      fontWeight: 400, // "regular",
      fontSize: '48px',
      letterSpacing: 0,
      textTransform: 'none',
    },
    h4: {
      fontWeight: 400, // "regular",
      fontSize: '32px',
      letterSpacing: '-0.5px',
      textTransform: 'none',
    },
    h5: {
      fontWeight: 400, // "regular",
      fontSize: '24px',
      letterSpacing: '-0.25px',
      textTransform: 'none',
    },
    h6: {
      fontWeight: 600, // "semibold"
      fontSize: '20px',
      letterSpacing: '-0.5px',
      textTransform: 'none',
    },
    body1: { fontSize: '16px', letterSpacing: '-0.25px' },
    body2: { fontSize: '14px' },
    subtitle1: { fontSize: '16px', letterSpacing: '-0.25px' },
    subtitle2: { fontSize: '14px' },
    overline: { fontSize: '12px' },
    caption: { fontSize: '12px' },
  },
};
