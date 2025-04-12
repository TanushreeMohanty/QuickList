// theme.js
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#10439F',
          },
          secondary: {
            main: '#874CCC',
          },
          background: {
            default: '#f4f4f4',
            paper: '#fff',
          },
        }
      : {
          primary: {
            main: '#C65BCF',
          },
          secondary: {
            main: '#F27BBD',
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
        }),
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
