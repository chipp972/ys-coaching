import './buttons.sass';

import React from 'react';
import { Link } from 'gatsby';
import PropType from 'prop-types';
import classNames from 'clsx';

export const GhostButton = ({ title, to, className, ...props }) =>
  !!to ? (
    <div className="column is-12 has-text-centered big-cta-container">
      <Link className={classNames(className, 'big-cta')} to={to} {...props}>
        {title}
      </Link>
    </div>
  ) : (
    <button type="button" className={classNames(className, 'big-cta')} {...props}>
      {title}
    </button>
  );

GhostButton.propTypes = {
  title: PropType.string.isRequired,
  className: PropType.string,
  to: PropType.string,
  onClick: PropType.func
};
