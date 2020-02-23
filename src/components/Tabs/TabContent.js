import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

export const TabContent = ({ isVisible, children }) => (
  <div css={css`
    position: ${isVisible ? 'relative' : 'absolute'};
    pointer-events: ${isVisible ? 'auto' : 'none'};
    top: 0;
    left: 0;
    opacity: ${isVisible ? 1 : 0};
    transition: opacity 0.15s ease-in-out;
  `}>{children}</div>
);

TabContent.propTypes = {
  isVisible: PropTypes.bool.isRequired
};
