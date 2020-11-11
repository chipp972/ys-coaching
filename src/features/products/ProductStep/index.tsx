/* eslint-disable @typescript-eslint/camelcase, complexity, max-len */
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { PrevStepButton } from '../../../common/components/Button';
import { Section } from '../../../common/layout';
import { colors } from '../../../common/theme';
import { DatoCmsConfirmationStep, DatoCmsDateTimeStep, DatoCmsLocationStep, DatoCmsPlanStep, DatoCmsThankYouStep, StepContent } from '../products.context';
import { LocalizedProductStep, useProductsContext } from '../products.hook';
import { ConfirmationStep } from './ConfirmationStep';
import { DateTimeStep } from './DateTimeStep';
import { LocationStep } from './LocationStep';
import { PlanStep } from './PlanStep';
import { ThankYouStep } from './ThankYouStep';

const ProductStepContent: React.FC<StepContent> = (content) => {
  const components = {
    plan_step: <PlanStep {...content as DatoCmsPlanStep} />,
    date_time_step: <DateTimeStep {...content as DatoCmsDateTimeStep} />,
    location_step: <LocationStep {...content as DatoCmsLocationStep} />,
    confirmation_step: <ConfirmationStep {...content as DatoCmsConfirmationStep} />,
    thank_you_step: <ThankYouStep {...content as DatoCmsThankYouStep} />
  };
  return components[content.model.apiKey] || null;
};

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

export const ProductStep: React.FC<LocalizedProductStep> = ({ title, description, content }) => {
  const classes = useStyles();
  const { prevStep, goPrevStep, nextStep } = useProductsContext();
  return (
    <Section className={classes.section}>
      {nextStep !== null && prevStep?.stepName && (
        <div className={classes.backButtonContainer}>
          <PrevStepButton variant="text" onClick={goPrevStep}>
            {prevStep?.stepName}
          </PrevStepButton>
        </div>
      )}
      <Typography className={classes.sectionTitle} variant="h3">{title}</Typography>
      {description && (
        <p className={classes.description} dangerouslySetInnerHTML={{ __html: description }} />
      )}
      <ProductStepContent {...content} />
    </Section>
  );
};
