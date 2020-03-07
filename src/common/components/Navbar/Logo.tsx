import React from 'react';
import logoSrc from '../../../img/logo.svg';

export const Logo: React.FC = () => (
  <div className="logo">
    <img className="logo-image" src={logoSrc} alt="Ys coaching logo" />
    <span className="logo-type">Y&apos;s coaching</span>
  </div>
);
