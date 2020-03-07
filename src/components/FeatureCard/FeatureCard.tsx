import React from 'react';
import PropTypes from 'prop-types';
import { PreviewCompatibleImage } from '../ImageContainer/PreviewCompatibleImage';
import { css } from '@emotion/core';
import { colors } from '../theme';
import { BigText } from '../Typography/Text';

export const FeatureCard = ({ image, title, text }) => (
  <div className="column is-6">
    <div
      className="card"
      css={css`
        border-radius: 20px;
        background-color: ${colors.gray50};
        height: 100%;
      `}>
      <div
        className="card-image"
        css={css`
          width: 20%;
          height: auto;
          position: relative;
          left: 40%;
          padding-top: 10px;
        `}>
        <PreviewCompatibleImage imageInfo={{ image }} />
      </div>
      <div className="card-content">
        <BigText css={css`
          text-transform: uppercase;
          text-align: center;
          width: 100%;
          display: block;
          color: ${colors.black};
          margin-bottom: 20px;
        `}>{title}</BigText>
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
