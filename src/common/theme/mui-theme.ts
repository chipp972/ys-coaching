import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from './colors';
import { mediaQueries } from './mediaqueries';
import { fontFamilies } from './typography/variables';

export const theme = createMuiTheme({
  spacing: (factor) => `${0.75 * factor}rem`,
  palette: {
    type: 'dark',
    primary: {
      main: colors.crimson200
    },
    secondary: {
      main: colors.gray200
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
    body1: {
      fontSize: '1.8rem'
    },
    body2: {
      fontSize: '1.6rem'
    },
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
    htmlFontSize: 10
  }
});
