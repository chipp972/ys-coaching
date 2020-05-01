import { css } from '@emotion/core';
import React from 'react';
import { colors } from '../../theme';

export const BackToTopButton = () => (
  <button
    css={css`
      border: none;
      background-color: ${colors.transparent};
    `}
    onClick={() =>
      typeof window !== 'undefined' &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }>
    Back to top
  </button>
);
