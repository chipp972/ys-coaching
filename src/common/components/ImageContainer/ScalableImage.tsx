import { css } from '@emotion/core';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import { getImageSrc } from '../../helpers/gatsby';

type Props = {
  image: {
    fluid: FluidObject;
    alt: string;
  };
  scalableImageClassName: string;
  height?: string;
  width?: string;
};

export const ScalableImage: React.FC<Props> = ({
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
