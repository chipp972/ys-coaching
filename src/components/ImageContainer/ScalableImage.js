import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

export const ScalableImage = ({
  image,
  height = '100%',
  width = '100%',
  scalableImageClassName
}) => (
  <div
    css={css`
      height: ${height};
      width: ${width};
      overflow: hidden;
    `}>
    <div
      className={scalableImageClassName}
      css={css`
        background-image: url(${!!image.childImageSharp
          ? image.childImageSharp.fluid.src
          : image});
        background-position: center;
        background-size: cover;
        height: 100%;
        width: 100%;
        transition: transform 0.15s ease-in-out;
      `}
    />
  </div>
);

ScalableImage.propTypes = {
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
  scalableImageClassName: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};
