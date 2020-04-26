import { css } from '@emotion/core';
import * as R from 'ramda';
import React from 'react';
import { navbarHeight } from '../../layout';
import { colors, mediaQueries } from '../../theme';

export const HamburgerMenu = ({ setActive, isActive }) => (
  <>
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 8px;
        text-transform: uppercase;
        height: ${navbarHeight.mobile};
        width: ${navbarHeight.mobile};

        ${mediaQueries.fromTablet} {
          height: ${navbarHeight.fromTablet};
          width: ${navbarHeight.fromTablet};
        }

        ${mediaQueries.fromDesktop} {
          display: none;
        }
      `}
      className="navbar-burger burger"
      data-target="navMenu"
      onClick={() => setActive(!isActive)}>
      {R.range(0, 3).map((id) => (
        <div
          key={id}
          css={css`
            width: 20px;
            height: 2px;
            margin-bottom: 5px;
            background-color: ${colors.white};
            transition: transform 0.2s ease;

            ${isActive &&
              {
                0: 'transform: translateY(2px) rotate(45deg);',
                1: 'transform: translateY(-5px) rotate(-45deg);',
                2: 'opacity: 0;'
              }[id]}
          `}
        />
      ))}
      <div>{isActive ? 'close' : 'menu'}</div>
    </div>
  </>
);
