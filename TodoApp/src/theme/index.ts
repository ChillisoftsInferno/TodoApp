import { createTheme } from '@mui/material/styles';
import light from './light';

export const theme = createTheme({
  colorSchemes: {
    light: { palette: { designColors: light } },
  },
  palette: {
    primary: {
      main: '#4F4AD5',
      light: '#aaa8dc',
      dark: '#1611a7',
      contrastText: '#F4F4F4',
    },
    secondary: {
      main: '#F4F4F4',
      contrastText: '#000000'
    },
    designColors: light
  },
  typography: {
    fontFamily: 'Barlow, Arial, sans-serif',
    button: {
      fontWeight: 500,
      letterSpacing: '0.04em',
    },
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 768,
      md: 1170,
      lg: 1280,
      xl: 1400,
    },
  },
})
