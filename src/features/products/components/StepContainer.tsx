import React from 'react';
import { SectionTitle } from '../../../common/theme';
import { Section } from '../../../common/layout';
import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  heading: string;
  description: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  description: {
    marginBottom: theme.spacing(3)
  }
}));

export const StepContainer: React.FC<Props> = ({ heading, description, children }) => {
  const classes = useStyles();
  return (
    <Section
      css={css`
        display: flex;
        flex-direction: column;
      `}>
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
