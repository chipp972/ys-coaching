import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from './colors';
import { mediaQueries } from './mediaqueries';
import { fontFamilies } from './typography/variables';

const oneUnitSpace = 0.75;

export const theme = createMuiTheme({
  spacing: (factor) => `${oneUnitSpace * factor}rem`,
  palette: {
    type: 'dark',
    primary: {
      main: colors.gray200
    },
    secondary: {
      main: colors.crimson200
    },
    success: {
      main: colors.success
    },
    warning: {
      main: colors.warning
    },
    error: {
      main: colors.warning
    }
  },
  typography: {
    fontFamily: fontFamilies.notoSans,
    htmlFontSize: 10,
    body1: {
      fontSize: '1.8rem'
    },
    body2: {
      fontSize: '1.6rem'
    },
    // Alternative typo title
    h1: {
      fontFamily: fontFamilies.cinzel,
      fontSize: '4.8rem',
      fontWeight: 900,
      letterSpacing: 3,
      lineHeight: 1.2,
      [mediaQueries.fromTablet]: {
        fontSize: '5.8rem',
        lineHeight: 1.5
      }
    },
    // Page title
    h2: {
      fontSize: '3.4rem',
      fontWeight: 800,
      letterSpacing: 2,
      lineHeight: 1.5,
      textTransform: 'uppercase',
      textAlign: 'center',
      [mediaQueries.fromTablet]: {
        fontSize: '3.8rem',
        lineHeight: 1.5
      }
    },
    // Section title
    h3: {
      fontSize: '3.2rem',
      fontWeight: 100,
      letterSpacing: 2,
      lineHeight: 1.2,
      textTransform: 'uppercase',
      textAlign: 'center',
      margin: `${oneUnitSpace * 5}rem 0`,
      [mediaQueries.fromTablet]: {
        fontSize: '3.6rem',
        lineHeight: 1.5,
        textAlign: 'left'
      }
    },
    // Page Subtitle
    h4: {
      fontSize: '2.8rem',
      fontWeight: 100,
      letterSpacing: 2,
      lineHeight: 1.2,
      textAlign: 'center',
      [mediaQueries.fromTablet]: {
        fontSize: '3.2rem',
        lineHeight: 1.5
      }
    }
  }
});
