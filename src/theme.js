import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#fff',
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
