import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from './colors';
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
    htmlFontSize: 10
  }
});
