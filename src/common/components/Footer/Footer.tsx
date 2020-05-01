import { css } from '@emotion/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import logoDarkSrc from '../../../img/logo-dark.svg';
import { footerHeight } from '../../layout';
import { colors, mediaQueries } from '../../theme';
import { BackToTopButton } from '../Button/BackToTopButton';
import { SocialLinks } from '../SocialLinks';
import './footer.sass';

export const Footer = () => {
  const theme = useTheme();
  return (
    <footer
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${colors.gray50};
        height: ${footerHeight.mobile};

        ${mediaQueries.fromTablet} {
          height: ${footerHeight.fromTablet};
        }
      `}>
      <div
        css={css`
          display: flex;
          margin-top: ${theme.spacing(2)};
        `}>
        <SocialLinks />
        <BackToTopButton />
      </div>
      <img
        src={logoDarkSrc}
        alt="Ys coaching logo"
        css={css`
          height: auto;
          width: 30rem;
        `}
      />
    </footer>
  );
};
