import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { getImageSrc } from '../../helpers/gatsby';
import { mediaQueries, colors } from '../theme';

export const FullWidthImage = ({
  image,
  overlayColor = colors.overlay,
  children,
  mobileHeight = '400px',
  height = '400px'
}) => (
  <div
    css={css`
      background-image: url(${getImageSrc(image)});
      width: 100vw;
      height: ${mobileHeight};
      position: relative;
      left: 50%;
      right: 50%;
      margin: 0 -50vw;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;

      ${mediaQueries.fromTablet} {
        height: ${height};
      }

      ${React.Children.count(children) > 0 &&
        `:before {
      content: '';
      background-color: ${overlayColor};
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }`}
    `}>
    {children}
  </div>
);

FullWidthImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string
        })
      })
    }),
    PropTypes.string
  ]).isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string
};
