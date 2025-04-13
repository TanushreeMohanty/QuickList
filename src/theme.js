import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#10439F', // Deep Blue
          },
          secondary: {
            main: '#874CCC', // Soft Purple
          },
          background: {
            default: '#f9f9fb', // Slightly off-white
            paper: '#ffffff',
          },
          text: {
            primary: '#1a1a1a',
            secondary: '#4f4f4f',
          },
        }
      : {
          primary: {
            main: '#C65BCF', // Elegant Magenta
          },
          secondary: {
            main: '#26A69A', // Soft Pink
          },
          background: {
            default: '#0e0e10', // Deep dark
            paper: '#1a1a1a',
          },
          text: {
            primary: '#f5f5f5',
            secondary: '#b0b0b0',
          },
        }),
  },

  typography: {
    fontFamily: `'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif`,
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.875rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 12, // Rounded but modern
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '6px 16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
