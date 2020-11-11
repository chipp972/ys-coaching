import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from '../../hook/use-site-metadata';
import { LanguageSelection } from '../../layout/Multilanguage';
import { animation, colors, mediaQueries } from '../../theme';
import { SocialLinks } from '../SocialLinks';
import { HamburgerMenu } from './HamburgerMenu';
import { Logo } from './Logo';

const useStyles = makeStyles((theme: Theme) => ({
  navBar: {
    boxShadow: theme.shadows[8],
    zIndex: theme.zIndex.appBar
  },
  navbarItem: {
    textTransform: 'uppercase',
    padding: '1.2rem',
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.secondary.main
    }
  },
  socialIcons: {
    borderRadius: 0,
    '&:hover': {
      backgroundColor: colors.transparent
    },
    '&:hover .social-icon': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.secondary.main
    }
  }
}));

type Props = {
  pathname: string;
};

const navBarActiveClass = 'is-active';

export const Navbar: React.FC<Props> = ({ pathname }) => {
  const { routes } = useSiteMetadata();
  const [isActive, setActive] = React.useState(false);
  const isCurrentPage = (to) => to === pathname;
  const classes = useStyles();

  return (
    <nav css={css`
      border-bottom: 1px solid ${colors.gray500};
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
    `} className={clsx('navbar', classes.navBar)} role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" title="Logo">
            <Logo />
          </Link>
          <HamburgerMenu isActive={isActive} setActive={setActive} />
        </div>
        <div
          id="navMenu"
          css={css`
            animation: ${animation.slideLeft} 0.3s ease;

            ${mediaQueries.fromDesktop} {
              animation: none;
            }
          `}
          className={`navbar-menu ${isActive && navBarActiveClass}`}>
          <div className="navbar-end has-text-centered">
            {routes.map(({ name, to }) => (
              <Typography key={to} variant="button" className={clsx({
                'navbar-item': true,
                [navBarActiveClass]: isCurrentPage(to),
                [classes.navbarItem]: true
              })} component={Link} to={to}>{name}</Typography>
            ))}
          </div>
          <div className="navbar-end has-text-centered">
            <SocialLinks className={classes.socialIcons} />
          </div>
          <div className="navbar-end has-text-centered">
            <LanguageSelection className={classes.navbarItem} />
          </div>
        </div>
      </div>
    </nav>
  );
};
