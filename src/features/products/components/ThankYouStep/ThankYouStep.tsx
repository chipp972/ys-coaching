import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { RedirectLink } from '../../../../common/components/Button';
import { PreviewCompatibleImage } from '../../../../common/components/ImageContainer';
import { ProductsContext } from '../../products.context';
import { StepContainer } from '../StepContainer';

export const ThankYouStep: React.FC = () => {
  const { thankYouScreen } = React.useContext(ProductsContext);
  const theme = useTheme();
  return (
    <StepContainer>
      <Typography variant="body1">{thankYouScreen.content}</Typography>
      <div
        css={css`
          position: relative;
          display: block;
        `}>
          <div css={css`
            padding: ${theme.spacing(4)} 0;
          `}>
            <PreviewCompatibleImage imageInfo={{ image: thankYouScreen.image }} />
          </div>
      </div>
      {!!thankYouScreen.redirectLink && (
        <RedirectLink
          isInternal={thankYouScreen.redirectLink.isInternal}
          url={thankYouScreen.redirectLink.url}
          label={thankYouScreen.redirectLink.label}
        />
      )}
    </StepContainer>
  );
};
