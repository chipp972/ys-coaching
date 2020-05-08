import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from '../../hook/use-site-metadata';
import { colors } from '../../theme';
import { SocialLinks } from '../SocialLinks';
import { HamburgerMenu } from './HamburgerMenu';
import { Logo } from './Logo';
import './navbar.sass';

const useStyles = makeStyles((theme: Theme) => ({
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
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" title="Logo">
            <Logo />
          </Link>
          <HamburgerMenu isActive={isActive} setActive={setActive} />
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${isActive && navBarActiveClass}`}>
          <div className="navbar-end has-text-centered">
            {routes.map(({ name, to }, index) => (
              <Link
                key={index}
                className={`navbar-item ${
                  isCurrentPage(to) ? navBarActiveClass : ''
                }`}
                to={to}>
                {name}
              </Link>
            ))}
          </div>
          <div className="navbar-end has-text-centered">
            <SocialLinks className={classes.socialIcons} />
          </div>
        </div>
      </div>
    </nav>
  );
};
