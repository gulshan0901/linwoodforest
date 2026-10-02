import { createTheme } from '@mui/material/styles';
import type { Shadows } from '@mui/material/styles/shadows';

const linwoodShadows: Shadows = [
  'none',
  '0 1px 2px rgb(11 41 40 / 0.08)',
  '0 2px 8px rgb(11 41 40 / 0.08)',
  '0 4px 12px rgb(11 41 40 / 0.08)',
  '0 8px 22px rgb(11 41 40 / 0.1)',
  '0 14px 35px rgb(11 41 40 / 0.12)',
  '0 18px 44px rgb(11 41 40 / 0.14)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
  '0 24px 70px rgb(11 41 40 / 0.16)',
];

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#123b3a',
      dark: '#0b2928',
      light: '#dde8e3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c89b3c',
      dark: '#a77d2d',
      light: '#efe1bd',
      contrastText: '#ffffff',
    },
    info: {
      main: '#123b3a',
    },
    error: {
      main: '#a33a30',
    },
    text: {
      primary: '#273333',
      secondary: '#667573',
    },
    background: {
      default: '#f8f7f3',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: linwoodShadows,
  typography: {
    fontFamily: 'var(--linwood-font-sans)',
    h1: {
      fontFamily: 'var(--linwood-font-display)',
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.08,
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.16,
      '@media (min-width:900px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontWeight: 700,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@layer mui': {
          body: {
            fontFamily: 'var(--linwood-font-sans)',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 'var(--linwood-radius-md)',
        },
      },
    },
  },
});
