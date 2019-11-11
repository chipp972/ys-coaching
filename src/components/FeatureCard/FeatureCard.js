import './feature-card.sass';

import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

export const FeatureCard = ({image, title, text}) => (
  <div className="column is-6">
  <div className="card feature-card">
    <div className="card-image">
      <PreviewCompatibleImage imageInfo={{image}} />
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <div className="content">{text}</div>
    </div>
  </div>
  </div>
);

FeatureCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  text: PropTypes.string
};
