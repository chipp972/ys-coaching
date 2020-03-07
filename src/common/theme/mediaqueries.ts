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
  tabletOnly: `@media screen and (min-width: ${
    breakpoints.tablet
  }px) and (max-width: ${breakpoints.desktop - 1}px))`,
  desktopOnly: `@media screen and (min-width: ${
    breakpoints.desktop
  }px) and (max-width: ${breakpoints.widescreen - 1}px))`,
  widescreenOnly: `@media screen and (min-width: ${
    breakpoints.widescreen
  }px) and (max-width: ${breakpoints.fullhd - 1}px))`
};