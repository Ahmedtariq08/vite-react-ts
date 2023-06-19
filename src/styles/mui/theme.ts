import { ThemeOptions, createTheme } from '@mui/material/styles';

// background black: rgb(49,45,42)
// grey-white-bg: rgb(251, 249, 248)
// card-grey: rgb(92,86,81)
// test grey color #e0e0e0
const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#312d2a', // calltoActionBlack
    },
    secondary: {
      main: '#e0e0e0',
    },
    info: {
      main: '#5c5651',
    },
    background: {
      default: '#fbf9f8', // normal grey white
    },
  },
});

export default theme;
