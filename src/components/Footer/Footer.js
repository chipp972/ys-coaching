import './footer.sass';
import React from 'react';
import logoDark from '../../img/logo-dark.svg';

export const Footer = () => (
  <footer className="footer has-text-white-ter">
    <div className="content has-text-centered has-text-white-ter">
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
