import './feature-card.sass';

import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../ImageContainer/PreviewCompatibleImage';
import { css } from '@emotion/core';
import { colors } from '../theme';

export const FeatureCard = ({ image, title, text }) => (
  <div className="column is-6">
    <div
      className="card feature-card"
      style={{
        borderRadius: '20px',
        backgroundColor: colors.gray50
      }}>
      <div
        className="card-image"
        css={css`
          width: 20%;
          height: auto;
          position: relative;
          left: 40%;
          padding-top: 10px;
        `}>
        <PreviewCompatibleImage
          imageInfo={{ image, style: { position: 'absolute' } }}
        />
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
