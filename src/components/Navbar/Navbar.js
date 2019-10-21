import './navbar.sass';
import instagram from '../../img/social/instagram.svg';
import logo from '../../img/logo.svg';

import React from 'react';
import { Link } from 'gatsby';
import { routes, instagramUrl } from '../../routing';

const navBarActiveClass = 'is-active';

const HamburgerMenu = ({ setActive, isActive, label }) => {
  return (
    <>
      <div
        className={`navbar-burger burger ${isActive ? navBarActiveClass : ''}`}
        data-target="navMenu"
        onClick={() => setActive(!isActive)}>
        <span />
        <span />
        <span />
        <div>{label}</div>
      </div>
    </>
  );
};

export const Navbar = () => {
  const [isActive, setActive] = React.useState(false);
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: 'auto', height: '70px', maxHeight: '70px' }} />
          </Link>
          <HamburgerMenu label="menu" isActive={isActive} setActive={setActive} />
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${isActive ? navBarActiveClass : ''}`}>
          <div className="navbar-start has-text-centered">
            {routes.map(({ name, to }) => (
              <Link className="navbar-item" to={to}>
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
                <img src={instagram} alt="Ys coaching Instagram" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
