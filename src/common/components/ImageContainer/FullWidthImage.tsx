import React from 'react';
import { css } from '@emotion/core';
import { getImageSrc, GatsbyImage } from '../../helpers/gatsby';
import { mediaQueries, colors } from '../../theme';

export const defaultHeight = '400px';

type Props = {
  image: GatsbyImage;
  overlayColor?: string;
  height?: string;
  mobileHeight?: string;
};

export const FullWidthImage: React.FC<Props> = ({
  image,
  overlayColor = colors.overlay,
  children,
  mobileHeight = defaultHeight,
  height = defaultHeight
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
