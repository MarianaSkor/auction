import { createTheme } from '@mui/material/styles';
import BitterBold from 'src/assets/fonts/BitterBold.ttf';
import BitterMedium from 'src/assets/fonts/BitterMedium.ttf';
import BitterRegular from 'src/assets/fonts/BitterRegular.ttf';
import BitterLight from 'src/assets/fonts/BitterLight.ttf';
import BitterExtraLight from 'src/assets/fonts/BitterExtraLight.ttf';
import BitterThin from 'src/assets/fonts/BitterThin.ttf';
import BitterThinItalic from 'src/assets/fonts/BitterThinItalic.ttf';
import AmaticSCRegular from 'src/assets/fonts/AmaticSCRegular.ttf';


declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
    white: Palette['primary'];
    blue: Palette['primary'];
    green: Palette['primary'];
    pink: Palette['primary'];
    red: Palette['primary'];
  }

  interface PaletteOptions {
    black: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    pink: PaletteOptions['primary'];
    red: PaletteOptions['primary'];
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    ipad: true;
  }
}

const createFont = (fontName: string, fontWeight: number, fontUrl: string) => `
  @font-face {
    font-family: ${fontName};
    font-style: normal;
    font-display: swap;
    font-weight: ${fontWeight};
    src: local(${fontName}), url(${fontUrl}) format('opentype');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}`;

export const theme = createTheme({
  palette: {
    primary: {
      main: '#030407',
    },
    secondary: {
      main: '#6e7073',
      light: '#b4bfc9',
      contrastText: '#c5cedc',
    },
    blue: {
      main: '#2f80ed',
    },
    green: {
      main: '#219F94',
      dark: '#6fcf97',
      light: '#c5ecd6',
    },
    pink: {
      main: '#F9D6DC',
    },
    black: {
      main: '#000000',
      dark: '#333333',
    },
    white: {
      main: '#ffffff',
    },
    red: {
      main: '#d92530',
      dark: '#7B242B',
      light: '#99242B',
    },
  },
  typography: {
    fontFamily: ['BitterBold', 'BitterMedium', 'BitterRegular', 'BitterLight', 'BitterExtraLight','BitterThin', 'BitterThinItalic', 'AmaticSCRegular'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      ${createFont('BitterBold', 700, BitterBold)}
      ${createFont('BitterMedium', 500, BitterMedium)}
      ${createFont('BitterRegular', 400, BitterRegular)}
      ${createFont('BitterLight', 300, BitterLight)}
      ${createFont('BitterExtraLight', 200, BitterExtraLight)}
      ${createFont('BitterThin', 100, BitterThin)}
      ${createFont('BitterThinItalic', 100, BitterThinItalic)}
      ${createFont('AmaticSCRegular', 400, AmaticSCRegular)}
      `,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      ipad: 767,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});