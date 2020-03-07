import React from 'react';
import PropTypes from 'prop-types';
import { FullWidthImage } from '../ImageContainer/FullWidthImage';
import { PageTitle } from '../Typography/PageTitle';

export const HeadlineBanner = ({ image, title, subtitle }) => (
  <FullWidthImage image={image} mobileHeight="200px">
    <PageTitle title={title} subtitle={subtitle} />
  </FullWidthImage>
);

HeadlineBanner.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string
        })
      })
    }),
    PropTypes.string
  ]).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};
