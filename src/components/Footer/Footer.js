import './footer.sass';
import React from 'react';
import logoDark from '../../img/logo-dark.svg';
import { css } from '@emotion/core';
import { colors } from '../theme';

export const footerHeight = '10rem';

export const Footer = () => (
  <footer
    css={css`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${colors.gray50};
      height: ${footerHeight};
    `}>
    <img
      src={logoDark}
      alt="Ys coaching logo"
      css={css`
        height: 100%;
        width: auto;
      `}
    />
  </footer>
);
