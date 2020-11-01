import Img from 'gatsby-image';
import React from 'react';
import { RedirectLink } from '../../../common/components/Button';
import { DatoCmsThankYouStep } from '../products.context';

export const ThankYouStep: React.FC<DatoCmsThankYouStep> = ({ image, redirectLink }) => (
    <>
      {image && <Img {...image} />}
      <RedirectLink {...redirectLink} />
    </>
  );
