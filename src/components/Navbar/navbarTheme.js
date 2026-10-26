import { createTheme } from '@mui/material/styles';

const navbarTheme = createTheme({
  typography: {
    fontFamily: '"Product Sans", sans-serif',
    h6: {
      fontFamily: '"Product Sans", sans-serif',
    },
  },
  palette: {
    primary: {
      main: "rgba(255,255,255,0)",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#5f6368",
        },
      },
    },
  },
});

export default navbarTheme;
