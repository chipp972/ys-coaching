import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { colors } from '../theme';

export const TabContent = ({ isVisible, children }) => (
  <div css={css`
    @keyframe fadein {
      from: {opacity: 0}
      to: {opacity: 1}
    }

    display: ${isVisible ? 'block' : 'none'};
    opacity: 0;
    animation: 0.15s ease-in 1s forwards fadein;
    background-color: ${colors.black02dp};
  `}>{children}</div>
);

TabContent.propTypes = {
  isVisible: PropTypes.bool.isRequired
};
