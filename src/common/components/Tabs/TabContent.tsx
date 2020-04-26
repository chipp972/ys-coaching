import { css } from '@emotion/core';
import React from 'react';

type Props = {
  isVisible: boolean;
};

export const TabContent: React.FC<Props> = ({ isVisible, children }) => (
  <div
    css={css`
      position: ${isVisible ? 'relative' : 'absolute'};
      pointer-events: ${isVisible ? 'auto' : 'none'};
      top: 0;
      left: 0;
      opacity: ${isVisible ? 1 : 0};
      transition: opacity 0.15s ease-in-out;
      visibility: ${isVisible ? 'visible' : 'hidden'};
    `}>
    {children}
  </div>
);
