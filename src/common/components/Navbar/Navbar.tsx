import { Link } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from '../../hook/use-site-metadata';
import { HamburgerMenu } from './HamburgerMenu';
import { Logo } from './Logo';
import './navbar.sass';
import { NavbarLinks } from './NavbarLinks';

type Props = {
  pathname: string;
};

const navBarActiveClass = 'is-active';

export const Navbar: React.FC<Props> = ({ pathname }) => {
  const { routes } = useSiteMetadata();
  const [isActive, setActive] = React.useState(false);
  const isCurrentPage = (to) => to === pathname;
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
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
};
