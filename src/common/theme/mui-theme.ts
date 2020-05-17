import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { colors } from './colors';
import { mediaQueries } from './mediaqueries';
import { fontFamilies } from './typography/variables';

const oneUnitSpace = 0.75;

// eslint-disable-next-line max-lines-per-function
const themeOptions = ({ isDark }: { isDark: boolean }): ThemeOptions => ({
  spacing: (factor) => `${oneUnitSpace * factor}rem`,
  palette: {
    type: isDark ? 'dark' : 'light',
    primary: {
      main: isDark ? colors.gray200 : colors.gray500
    },
    secondary: {
      main: isDark ? colors.crimson200 : colors.crimson500
    },
    success: {
      main: colors.success
    },
    warning: {
      main: colors.warning
    },
    error: {
      main: colors.warning
    },
    background: {
      default: isDark ? colors.black : colors.gray50
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
      fontSize: '3.6rem',
      fontWeight: 900,
      letterSpacing: 3,
      lineHeight: 1.2,
      [mediaQueries.fromTablet]: {
        fontSize: '3.8rem',
        lineHeight: 1.2
      }
    },
    // Page title
    h2: {
      fontSize: '3.4rem',
      fontWeight: 800,
      letterSpacing: 2,
      lineHeight: 1.2,
      textTransform: 'uppercase',
      textAlign: 'center',
      [mediaQueries.fromTablet]: {
        fontSize: '3.6rem',
        lineHeight: 1.2
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
      padding: `${oneUnitSpace * 5}rem 0`,
      [mediaQueries.fromTablet]: {
        fontSize: '3.4rem',
        lineHeight: 1.2,
        textAlign: 'left'
      }
    },
    // Page Subtitle
    h4: {
      fontSize: '2.8rem',
      fontWeight: 100,
      letterSpacing: 2,
      lineHeight: 1.3,
      textAlign: 'center',
      [mediaQueries.fromTablet]: {
        fontSize: '3.2rem',
        lineHeight: 1.2
      }
    }
  }
});

export const theme = createMuiTheme(themeOptions({ isDark: true }));

export const lightTheme = createMuiTheme(themeOptions({ isDark: false }));
