import React from 'react';
import { PrimaryButton } from '../../../../common/components/Button';
import { PreviewCompatibleImage } from '../../../../common/components/ImageContainer';
import { GatsbyImage } from '../../../../common/helpers/gatsby';
import { StepContainer } from '../StepContainer';

type Props = {
  heading: string;
  description?: string;
  content: string;
  image: GatsbyImage;
  redirectLinkUrl?: string;
  redirectLinkLabel?: string;
};

export const ThankYouStep: React.FC<Props> = ({
  heading,
  description,
  image,
  content,
  redirectLinkLabel,
  redirectLinkUrl
}) => (
  <StepContainer heading={heading} description={description}>
    <p>{content}</p>
    <PreviewCompatibleImage imageInfo={{ image }} />
{!!redirectLinkLabel && <PrimaryButton to={redirectLinkUrl}>{redirectLinkLabel}</PrimaryButton>}
  </StepContainer>
);
