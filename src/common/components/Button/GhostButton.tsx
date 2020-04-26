import { css } from '@emotion/core';
import { Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby';
import React from 'react';
import { colors, mediaQueries } from '../../theme';

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
};

const buttonSizes = {
  big: {
    fontSize: '24px',
    padding: '2rem',
    fromTabletFontSize: '28px',
    isFullWidth: true
  },
  medium: {
    fontSize: '16px',
    padding: '1.5rem',
    fromTabletFontSize: '18px',
    isFullWidth: false
  }
};

const buttonCss = (theme, size) => css`
  cursor: pointer;
  font-size: ${size.fontSize};
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 2px solid ${theme.color};
  border-radius: 0.5rem;
  text-align: center;
  text-decoration: none;
  padding: ${size.padding};
  color: ${theme.color};
  background-color: ${theme.background};
  transition: background-color 0.3s ease, color 0.3s ease;
  ${size.isFullWidth && 'width: 80%;'} :hover {
    background-color: ${theme.hoverBackground};
    color: ${theme.hoverColor};
  }

  ${mediaQueries.fromTablet} {
    font-size: ${size.fromTabletFontSize};
    ${size.isFullWidth && 'width: auto;'}
  }
`;

type Props = {
  type?: 'reset' | 'button' | 'submit';
  theme?: 'crimson' | 'light';
  size?: 'medium' | 'big';
  className?: string;
  to?: string;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

export const GhostButton: React.FC<Props> = ({
  to,
  theme = 'crimson',
  size = 'big',
  type = 'button',
  children,
  ...props
}) => {
  const themeProps = buttonThemes[theme];
  const sizeProps = buttonSizes[size];

  return !!to ? (
    <div className="column is-12 has-text-centered big-cta-container">
      <Link css={buttonCss(themeProps, sizeProps)} to={to} {...props}>
        {children}
      </Link>
    </div>
  ) : (
    <button css={buttonCss(themeProps, sizeProps)} type={type} {...props}>
      {children}
    </button>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  primaryButton: {
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}));

export const PrimaryButton: React.FC<Props> = ({ to, className = '', children, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      component={!!to ? Link : 'button'}
      to={to}
      variant="outlined"
      color="primary"
      className={`${classes.primaryButton} ${className}`}
      size="large">
      {children}
    </Button>
  );
};
