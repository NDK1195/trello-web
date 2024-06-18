import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[500],
          secondary: deepOrange,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#121212',
          secondary: orange,
        },
      },
    },
  },
  // ...other properties
});

export default theme;
