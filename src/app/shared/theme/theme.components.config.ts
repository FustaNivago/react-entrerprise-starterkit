import { ThemeOptions } from '@mui/material/styles';

export const ThemeComponentsConfig: ThemeOptions = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};
