import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import logoSrc from '../../../img/logo.svg';
import { colors, mediaQueries } from '../../theme';
import { navbarHeight } from './Navbar.constant';

const useStyle = makeStyles({
  logoType: {
    fontSize: '1.2rem',
    color: colors.gray500,
    textTransform: 'uppercase',
    letterSpacing: 5,
    transition: 'letter-spacing 0.2s ease, color 0.2s ease',
    [mediaQueries.tabletOnly]: {
      fontSize: '1.8rem'
    },
    [mediaQueries.fromDesktop]: {
      fontSize: '2rem'
    }
  }
});

export const Logo: React.FC = () => {
  const classes = useStyle();
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        ${mediaQueries.fromDesktop} {
          width: 400px;
        }

        &:hover {
          .logo-type {
            color: ${colors.gray50};
            letter-spacing: 7px;
          }
          .logo-image {
            transform: scale(1.1);
          }
        }
      `}>
      <img
        css={css`
          width: auto;
          height: ${navbarHeight.mobile};
          max-height: ${navbarHeight.mobile};
          transition: transform 0.2s ease;
          ${mediaQueries.fromTablet} {
            height: ${navbarHeight.tablet};
            max-height: ${navbarHeight.tablet};
          }
        `}
        className="logo-image"
        src={logoSrc}
        alt="Ys coaching logo"
      />
      <Typography className={`${classes.logoType} logo-type`} variant="h1" component="p">
        Y&apos;s coaching
      </Typography>
    </div>
  );
};
