import React from 'react';
import { StepContainer } from '../StepContainer';
import { GatsbyImage } from '../../../../common/helpers/gatsby';
import { PreviewCompatibleImage } from '../../../../common/components/ImageContainer';

type Props = {
  heading: string;
  description?: string;
  content: string;
  image: GatsbyImage;
};

export const ThankYouStep: React.FC<Props> = ({
  heading,
  description,
  image,
  content
}) => (
  <StepContainer heading={heading} description={description}>
    <p>{content}</p>
    <PreviewCompatibleImage imageInfo={{ image }} />
  </StepContainer>
);
