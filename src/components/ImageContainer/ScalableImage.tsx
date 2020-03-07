import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { getImageSrc } from '../../helpers/gatsby';

export const ScalableImage = ({
  image,
  height = '100%',
  width = '100%',
  scalableImageClassName,
  children
}) => (
  <div
    css={css`
      height: ${height};
      width: ${width};
      overflow: hidden;
      position: relative;
    `}>
    <div
      className={scalableImageClassName}
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(${getImageSrc(image)});
        background-position: center;
        background-size: cover;
        height: 100%;
        width: 100%;
        transition: transform 0.15s ease-in-out;
      `}
    />
    {children}
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
