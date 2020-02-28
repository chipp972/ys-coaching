import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ imageInfo: { alt = '', childImageSharp, image } }) => {
  const imageStyle = { borderRadius: '5px' };

  if (!!image) {
    if (!!image.childImageSharp) {
      return (
        <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
      );
    } else if (typeof image === 'string') {
      return <img style={imageStyle} src={image} alt={alt} />;
    }
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
};

export default PreviewCompatibleImage;
