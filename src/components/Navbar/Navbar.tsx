import './navbar.sass';
import * as R from 'ramda';
import pinkInstagram from '../../img/social/pink-instagram.svg';
import logo from '../../img/logo.svg';
import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { mediaQueries, navbarHeight, fontFamilies, colors } from '../theme';
import { useSiteMetadata } from '../SiteMetadata';

type Props = {
  pathname: string;
};

const navBarActiveClass = 'is-active';

const Logo = () => (
  <div className="logo">
    <img className="logo-image" src={logo} alt="Ys coaching logo" />
    <span className="logo-type">Y&apos;s coaching</span>
  </div>
);

const HamburgerMenu = ({ setActive, isActive }) => (
  <>
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: ${fontFamilies.notoSans};
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

export const Navbar: React.FC<Props> = ({ pathname }) => {
  const { routes, instagramUrl } = useSiteMetadata();
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
                className={`navbar-item ${isCurrentPage(to) ? navBarActiveClass : ''}`}
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
