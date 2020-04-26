import { Typography } from '@material-ui/core';
import React from 'react';
import { PrimaryButton } from '../../../../common/components/Button';
import { PreviewCompatibleImage } from '../../../../common/components/ImageContainer';
import { ProductsContext } from '../../products.context';
import { StepContainer } from '../StepContainer';

export const ThankYouStep: React.FC = () => {
  const { thankYouScreen } = React.useContext(ProductsContext);
  // TODO: put in contrib
  const redirectLinkLabel = 'CHECK OUT MY BLOG';
  const redirectLinkUrl = '/';
  return (
    <StepContainer>
      <Typography variant="body1">{thankYouScreen.content}</Typography>
      <PreviewCompatibleImage imageInfo={{ image: thankYouScreen.image }} />
      {!!redirectLinkLabel && (
        <PrimaryButton to={redirectLinkUrl}>{redirectLinkLabel}</PrimaryButton>
      )}
    </StepContainer>
  );
};
