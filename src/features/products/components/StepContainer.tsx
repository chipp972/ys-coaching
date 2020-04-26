import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import React from 'react';
import { PrevStepButton } from '../../../common/components/Button';
import { Section } from '../../../common/layout';
import { SectionTitle } from '../../../common/theme';

type Props = {
  heading: string;
  description: string;
  prevStepName?: string;
  goPrevStep?: () => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  description: {
    marginBottom: theme.spacing(3)
  }
}));

export const StepContainer: React.FC<Props> = ({ heading, description, children, prevStepName, goPrevStep }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Section
      css={css`
        display: flex;
        flex-direction: column;
      `}>
      {prevStepName && goPrevStep && <div css={css`
        disply: inline-block;
        margin-bottom: ${theme.spacing(3)};
      `}>
        <PrevStepButton variant="text" onClick={goPrevStep}>{prevStepName}</PrevStepButton>
      </div>}
      <SectionTitle>{heading}</SectionTitle>
      {description && (
        <Typography className={classes.description} variant="body2">
          {description}
        </Typography>
      )}
      {children}
    </Section>
  );
};
