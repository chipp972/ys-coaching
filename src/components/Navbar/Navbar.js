import './navbar.sass';
import instagram from '../../img/social/instagram.svg';
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
        <span />
        <span />
        <span />
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
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                en
              </div>
              <div class="navbar-dropdown">
                <button className="navbar-item">
                  fr
                </button>
                <button className="navbar-item">
                  jp
                </button>
              </div>
            </div>
            <a
              className="navbar-item social-icon"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer">
              <span className="icon">
                <img src={instagram} alt="Ys coaching Instagram" />
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
