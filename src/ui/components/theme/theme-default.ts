import { createTheme } from '@mui/material';

const black = '#0D0D0D';
const dark = '#262626';
const mainTheme = '#595959';
const light = '#A6A6A6';
const white = '#F2F2F2';

declare module '@mui/material/styles' {
  type Panini = {
    black: string;
    dark: string;
    mainTheme: string;
    light: string;
    white: string;
  };
  interface Palette {
    swgh: Panini;
  }
  interface PaletteOptions {
    swgh: Panini;
  }
}

export const theme = createTheme({
  palette: {
    swgh: {
      black,
      dark,
      mainTheme,
      light,
      white
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
  direction: 'ltr',
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48,
      },
      '@media (min-width:600px)': { minHeight: 64 },
    },
  },
});