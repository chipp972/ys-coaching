import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import React from 'react';
import { PrevStepButton } from '../../../common/components/Button';
import { Section } from '../../../common/layout';
import { SectionTitle } from '../../../common/theme';
import { useProductsContext } from '../products.hook';

const useStyles = makeStyles((theme: Theme) => ({
  description: {
    marginBottom: theme.spacing(5)
  }
}));

export const StepContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { prevStep, currentStep, goPrevStep } = useProductsContext();
  return (
    <Section
      css={css`
        display: flex;
        flex-direction: column;
      `}>
      {prevStep?.stepName && (
        <div
          css={css`
            disply: inline-block;
            margin-bottom: ${theme.spacing(3)};
          `}>
          <PrevStepButton variant="text" onClick={goPrevStep}>
            {prevStep?.stepName}
          </PrevStepButton>
        </div>
      )}
      <SectionTitle>{currentStep?.heading}</SectionTitle>
      {currentStep?.description && (
        <Typography className={classes.description} variant="body2">
          {currentStep?.description}
        </Typography>
      )}
      {children}
    </Section>
  );
};