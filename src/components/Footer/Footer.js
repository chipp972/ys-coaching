import './footer.sass';

import logoDark from '../../img/logo-dark.svg';
import instagram from '../../img/social/instagram.svg';

import React from 'react';
import { Link } from 'gatsby';
import { routes, instagramUrl } from '../../routing';

export const Footer = () => (
  <footer className="footer has-text-white-ter">
    <div className="content has-text-centered has-text-white-ter">
      <div className="container has-text-white-ter">
        <div className="columns">
          <div className="column is-6">
            <section className="menu">
              <ul className="menu-list has-text-centered">
                {routes.map(({name, to}, index) => (
                  <li key={index}>
                    <Link to={to} className="navbar-item">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="column is-6 social">
            <a title="instagram" href={instagramUrl}>
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="content has-text-centered">
        <img
          src={logoDark}
          alt="Ys coaching logo"
          style={{ width: '14em', height: '10em' }}
        />
      </div>
    </div>
  </footer>
);
