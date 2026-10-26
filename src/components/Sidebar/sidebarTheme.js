import { createTheme } from '@mui/material/styles';

const sidebarTheme = createTheme({
  typography: {
    fontFamily: '"Product Sans", sans-serif',
    fontSize: '15px',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'antialiased',
        },
        '.active a': {
          color: '#001d35 !important',
        },
        '.sidebar': {
          fontWeight: '500',
        },
        '.sidebar p': {
          letterSpacing: '0.5px',
        },
        '.sidebar ul li': {
          lineHeight: '2.4',
          padding: '5px 20px',
          borderRadius: '50px',
        },
        '.sidebar ul li:hover': {
          backgroundColor: '#ecf2fc',
        },
        '.sidebar ul li.no-style:hover': {
          backgroundColor: '#f7fafc',
        },
        '.sidebar ul li:active': {
        },
        '.sidebar ul li:focus': {
          backgroundColor: '#c2e7ff',
        },
        '.sidebar .active': {
          backgroundColor: '#c2e7ff',
          color: '#001d35',
          fontWeight: '600',
        },
        '.sidebar .active:hover': {
          backgroundColor: '#b5d4e9',
        },
        '.sidebar .add-item': {
          backgroundColor: "#c2e7ff",
          padding: "16px 20px",
          marginBottom: "16px",
          borderRadius: "16px",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "#c2e7ff",
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: '15px',
          color: '#444746',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
          '&:active': {
            textDecoration: 'none',
          },
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#001d35",
          textTransform: "none",
        },
      },
    },
  },
});

export default sidebarTheme;
