import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { fontFamilies, mediaQueries, colors } from './theme';
import { navbarHeight } from './Navbar/Navbar';

const Title = styled.h1`
  font-family: Cinzel, ${fontFamilies.notoSans};
  font-size: 48px;
  font-weight: 800
  margin-bottom: 2rem;
  padding: 1rem;
  letter-spacing: 3px;
  line-height: 1.2;
  color: ${colors.white};
  text-transform: uppercase;
  text-align: center;
  background-color: ${colors.shadow};

  ${mediaQueries.fromTablet} {
    font-size: 58px;
    line-height: 1.5
  }
`;

const Subtitle = styled.h2`
  font-family: ${fontFamilies.notoSerif};
  font-size: 26px;
  font-weight: 100
  line-height: 0.5;
  color: ${colors.gray50};
  text-align: center;
  background-color: ${colors.shadow};
  padding: 1rem;

  ${mediaQueries.fromTablet} {
    font-size: 34px;
  }
`;

export const HomeParallax = ({ image, title, subtitle }) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-image: url(${!!image.childImageSharp
        ? image.childImageSharp.fluid.src
        : image});
      width: 100vw;
      height: calc(100vh - ${navbarHeight});
      margin-top: 0;
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

HomeParallax.propTypes = {
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
