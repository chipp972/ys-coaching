import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

export const FullWidthImage = ({ image }) => (
  <div
    css={css`
      background-image: url(${image.childImageSharp
        ? image.childImageSharp.fluid.src
        : image});
      width: 100vw;
      height: 400px;
      position: relative;
      left: 50%;
      right: 50%;
      margin: 2em -50vw;
      background-size: cover;
      background-position: bottom;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  />
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
  ]).isRequired
};
