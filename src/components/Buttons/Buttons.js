import React from 'react';
import { Link } from 'gatsby';
import PropType from 'prop-types';
import { colors, fontFamilies, mediaQueries } from '../theme';
import { css } from '@emotion/core';

const buttonThemes = {
  crimson: {
    color: colors.crimson200,
    background: colors.transparent,
    hoverColor: colors.gray50,
    hoverBackground: colors.crimson200
  },
  light: {
    color: colors.gray50,
    background: colors.transparent,
    hoverColor: colors.gray50,
    hoverBackground: colors.transparent
  }
}

const buttonSizes = {
  big: {
    fontSize: '24px',
    padding: '20px 30px',
    fromTabletFontSize: '28px',
    isFullWidth: true
  },
  medium: {
    fontSize: '16px',
    padding: '20px 30px',
    fromTabletFontSize: '18px',
    isFullWidth: false
  }
}

const buttonCss = (theme, size) => css`
  cursor: pointer;
  font-size: ${size.fontSize};
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: ${fontFamilies.notoSans};
  border: 2px solid ${theme.color};
  border-radius: .25rem;
  text-align: center;
  text-decoration: none;
  padding: ${size.padding};
  color: ${theme.color};
  background-color: ${theme.background};
  transition: background-color 0.3s ease, color 0.3s ease;
  ${size.isFullWidth && 'width: 80;'}

  :hover {
    background-color: ${theme.hoverBackground};
    color: ${theme.hoverColor};
  }

  ${mediaQueries.fromTablet} {
    font-size: ${size.fromTabletFontSize};
    ${size.isFullWidth && 'width: auto;'}
  }
`;

export const GhostButton = ({ title, to, theme = 'crimson', size = 'big', ...props }) => {
  const themeProps = buttonThemes[theme];
  const sizeProps = buttonSizes[size];

  return !!to ? (
    <div className="column is-12 has-text-centered big-cta-container">
      <Link css={buttonCss(themeProps, sizeProps)} to={to} {...props}>
        {title}
      </Link>
    </div>
  ) : (
    <button css={buttonCss(themeProps, sizeProps)} type="button" {...props}>
      {title}
    </button>
  );
}

GhostButton.propTypes = {
  title: PropType.string.isRequired,
  theme: PropType.oneOf(['crimson', 'light']),
  size: PropType.oneOf(['big', 'medium']),
  className: PropType.string,
  to: PropType.string,
  onClick: PropType.func
};
