import './footer.sass';

import React from 'react';
import logoDarkSrc from '../../../img/logo-dark.svg';
import { css } from '@emotion/core';
import { colors } from '../../theme';
import { footerHeight } from '../../layout';

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
      src={logoDarkSrc}
      alt="Ys coaching logo"
      css={css`
        height: 100%;
        width: auto;
      `}
    />
  </footer>
);
