import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import React from 'react';
import { PrimaryButton } from '../../../../common/components/Button';
import { PreviewCompatibleImage } from '../../../../common/components/ImageContainer';
import { ProductsContext } from '../../products.context';
import { StepContainer } from '../StepContainer';

export const ThankYouStep: React.FC = () => {
  const { thankYouScreen } = React.useContext(ProductsContext);
  return (
    <StepContainer>
      <Typography variant="body1">{thankYouScreen.content}</Typography>
      <div css={css`
        position: relative;
        display: block;
      `}>
        <PreviewCompatibleImage imageInfo={{ image: thankYouScreen.image }} />
      </div>
      {!!thankYouScreen.redirectLinkLabel && (
        <div css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}>
          <PrimaryButton to={thankYouScreen.redirectLinkUrl}>{thankYouScreen.redirectLinkLabel}</PrimaryButton>
        </div>
      )}
    </StepContainer>
  );
};
