import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { GatsbyImage, getImageSrc } from '../../../common/helpers/gatsby';
import { navbarHeight } from '../../../common/layout';
import { colors, mediaQueries } from '../../../common/theme';

type Props = {
  image: GatsbyImage;
  title: string;
  subtitle?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(2),
    color: colors.white,
    textTransform: 'uppercase',
    textAlign: 'center',
    backgroundColor: colors.shadow
  },
  subtitle: {
    fontWeight: 100,
    color: colors.gray50,
    textAlign: 'center',
    backgroundColor: colors.shadow,
    padding: theme.spacing(2)
  }
}));

export const HomeParallax: React.FC<Props> = ({ image, title, subtitle }) => { 
  const classes = useStyles();
  return (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-image: url(${getImageSrc(image)});
      width: 100vw;
      height: calc(100vh - ${navbarHeight.mobile});
      margin-top: 0;

      ${mediaQueries.mobileOnly} {
        background-attachment: initial;
      }

      ${mediaQueries.fromTablet} {
        height: calc(100vh - ${navbarHeight.fromTablet});
      }
    `}>
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
      `}>
      <Typography className={classes.title} variant="h1">{title}</Typography>
      {subtitle && <Typography className={classes.subtitle} variant="h4" component="h2">{subtitle}</Typography>}
    </div>
  </div>);
 };