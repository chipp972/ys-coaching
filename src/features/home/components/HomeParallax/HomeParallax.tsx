import React from 'react';
import { css } from '@emotion/core';
import { getImageSrc, GatsbyImage } from '../../../../helpers/gatsby';
import { mediaQueries } from '../../../../common/theme';
import { navbarHeight } from '../../../../common/layout';
import { Title } from './Title';
import { Subtitle } from './Subtitle';

type Props = {
  image: GatsbyImage;
  title: string;
  subtitle?: string;
};

export const HomeParallax: React.FC<Props> = ({ image, title, subtitle }) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-image: url(${getImageSrc(image)});
      width: 100vw;
      height: calc(100vh - ${navbarHeight.mobile});
      margin-top: 0;

      ${mediaQueries.mobileOnly} {
        background-attachment: initial;
      }

      ${mediaQueries.fromTablet} {
        height: calc(100vh - ${navbarHeight.fromTablet});
      }
    `}>
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
      `}>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </div>
  </div>
);
