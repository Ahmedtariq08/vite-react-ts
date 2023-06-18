import { ThemeOptions, createTheme } from '@mui/material/styles';

// background black: rgb(49,45,42)
// grey-white-bg: rgb(251, 249, 248)
// card-rey: rgb(92,86,81)
const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#312d2a',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fbf9f8',
    },
  },
});

export default theme;
