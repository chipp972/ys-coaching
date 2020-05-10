import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { PrevStepButton } from '../../../common/components/Button';
import { Section } from '../../../common/layout';
import { colors } from '../../../common/theme';
import { useProductsContext } from '../products.hook';

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    display: 'flex',
    flexDirection: 'column'
  },
  backButtonContainer: {
    margin: `${theme.spacing(3)} 0`
  },
  description: {
    marginBottom: theme.spacing(5)
  },
  sectionTitle: {
    color: colors.white
  }
}));

export const StepContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  const { prevStep, currentStep, goPrevStep } = useProductsContext();
  return (
    <Section className={classes.section}>
      {prevStep?.stepName && (
        <div className={classes.backButtonContainer}>
          <PrevStepButton variant="text" onClick={goPrevStep}>
            {prevStep?.stepName}
          </PrevStepButton>
        </div>
      )}
      <Typography className={classes.sectionTitle} variant="h3">{currentStep?.heading}</Typography>
      {currentStep?.description && (
        <Typography className={classes.description} variant="body2">
          {currentStep?.description}
        </Typography>
      )}
      {children}
    </Section>
  );
};
