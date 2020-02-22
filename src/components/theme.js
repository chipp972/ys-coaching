export const colors = {
  white: '#ffffff',
  black: '#121212',
  overlay: 'rgba(0, 0, 0, 0.5)',
  shadow: 'rgba(18, 18, 18, 0.7)',
  transparent: 'transparent',

  black01dp: '#1b1b1b',
  black02dp: '#232323',
  black03dp: '#252525',
  black04dp: '#272727',
  black06dp: '#2c2c2c',
  black08dp: '#2e2e2e',
  black12dp: '#333333',
  black16dp: '#363636',
  black24dp: '#383838',

  crimson04dp: '#221f1f',

  gray50: '#f7f7f7',
  gray100: '#ececee',
  gray200: '#e0e0e0',
  gray300: '#d3d3d3',
  gray400: '#c9c9c9',
  gray500: '#c0c0c0',
  gray600: '#bababa',
  gray700: '#b2b2b2',
  gray800: '#aaaaaa',
  gray900: '#9c9c9c',

  crimson50: '#f3e0e0',
  crimson100: '#e0b3b3',
  crimson200: '#cc8080',
  crimson300: '#b84d4d',
  crimson400: '#a82626',
  crimson500: '#990000',
  crimson600: '#910000',
  crimson700: '#860000',
  crimson800: '#7c0000',
  crimson900: '#6b0000',

  green1: '#219653',
  green2: '#27ae60',
  green3: '#6fcf97'
};

const sansSerif =
  'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif';

export const fontFamilies = {
  notoSans: `Noto Sans JP, ${sansSerif}`,
  notoSerif: 'Noto Serif JP, serif',
  monospace: 'monospace'
};

export const breakpoints = {
  tablet: 769,
  desktop: 1024,
  widescreen: 1216,
  fullhd: 1408
};

export const mediaQueries = {
  fromTablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
  fromDesktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
  fromWidescreen: `@media screen and (min-width: ${breakpoints.widescreen}px)`,
  fromFullhd: `@media screen and (min-width: ${breakpoints.fullhd}px)`,
  mobileOnly: `@media screen and (max-width: ${breakpoints.tablet - 1}px)`,
  tabletOnly: `@media screen and (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px))`,
  desktopOnly: `@media screen and (min-width: ${breakpoints.desktop}px) and (max-width: ${breakpoints.widescreen - 1}px))`,
  widescreenOnly: `@media screen and (min-width: ${breakpoints.widescreen}px) and (max-width: ${breakpoints.fullhd - 1}px))`
};

export const navbarHeight = {
  mobile: '4rem',
  fromTablet: '6rem'
};

export const footerHeight = '10rem';
