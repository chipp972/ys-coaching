import * as R from 'ramda';
import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { GatsbyImage } from '../../../helpers/gatsby';

type Props = {
  imageInfo: {
    image?: GatsbyImage;
    alt?: string;
    childImageSharp?: {fluid: FluidObject};
  };
};

export const PreviewCompatibleImage: React.FC<Props> = ({
  imageInfo: { alt = '', childImageSharp, image }
}) => {
  const imageStyle = { borderRadius: '5px' };

  if (R.hasPath(['childImageSharp', 'fluid'], image)) {
    return (
      <Img style={imageStyle} fluid={R.path(['childImageSharp', 'fluid'], image)} alt={alt} />
    );
  } else if (typeof image === 'string') {
    return <img style={imageStyle} src={image} alt={alt} />;
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  return null;
};
