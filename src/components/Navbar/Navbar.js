import './navbar.sass';
import pinkInstagram from '../../img/social/pink-instagram.svg';
import logo from '../../img/logo.svg';

import React from 'react';
import { Link } from 'gatsby';
import { routes, instagramUrl } from '../../routing';
import classNames from 'clsx';
import PropTypes from 'prop-types';

const navBarActiveClass = 'is-active';

const Logo = () => (
  <div className="logo">
    <img className="logo-image" src={logo} alt="Ys coaching logo" />
    <span className="logo-type">Y's coaching</span>
  </div>
);

const HamburgerMenu = ({ setActive, isActive }) => {
  return (
    <>
      <div
        className={classNames('navbar-burger', 'burger', {
          [navBarActiveClass]: isActive
        })}
        data-target="navMenu"
        onClick={() => setActive(!isActive)}>
        <div className="burger-part" />
        <div className="burger-part" />
        <div className="burger-part" />
        <div>{isActive ? 'close' : 'menu'}</div>
      </div>
    </>
  );
};

export const Navbar = ({ pathname }) => {
  const [isActive, setActive] = React.useState(false);
  const isCurrentPage = (to) => to === pathname;
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" title="Logo">
            <Logo />
          </Link>
          <HamburgerMenu isActive={isActive} setActive={setActive} />
        </div>
        <div
          id="navMenu"
          className={classNames('navbar-menu', {
            [navBarActiveClass]: isActive
          })}>
          <div className="navbar-end has-text-centered">
            {routes.map(({ name, to }, index) => (
              <Link
                key={index}
                className={classNames('navbar-item', {
                  [navBarActiveClass]: isCurrentPage(to)
                })}
                to={to}>
                {name}
              </Link>
            ))}
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item social-icon"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer">
              <span className="icon">
                <img src={pinkInstagram} alt="Ys coaching Instagram" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  pathname: PropTypes.string
};
