import { createTheme } from '@mui/material';

const primaryBg = "#004280";
const secondaryBg = "#003567";
const primaryText = "#000000";
const secondaryText = "#333333";
const light = "#999999";
const warning = "#f9e800";
const primaryEmphasis = "#db9600";
const secondaryEmphasis = "#f4921e";
const primarySuccess = "#088c00";
const secondarySuccess = "#10A162";
const primaryInfo = "#2684c7";
const secondaryInfo = "#3878e9";
const newsletterBg = "#004280";

declare module '@mui/material/styles' {
  type Panini = {
    primaryBg: string;
    secondaryBg: string;
    primaryText: string;
    secondaryText: string;
    light: string;
    warning: string;
    primaryEmphasis: string;
    secondaryEmphasis: string;
    primarySuccess: string;
    secondarySuccess: string;
    primaryInfo: string;
    secondaryInfo: string;
    newsletterBg: string;
  };
  interface Palette {
    panini: Panini;
  }
  interface PaletteOptions {
    panini: Panini;
  }
}

export const theme = createTheme({
  palette: {
    panini: {
      primaryBg,
      secondaryBg,
      primaryText,
      secondaryText,
      light,
      warning,
      primaryEmphasis,
      secondaryEmphasis,
      primarySuccess,
      secondarySuccess,
      primaryInfo,
      secondaryInfo,
      newsletterBg
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