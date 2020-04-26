import { Form } from '@chipp972/form-validation';
import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import format from 'date-fns/fp/format';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StepButtons } from '../../../../common/components/Button';
import { FormInput } from '../../../../common/components/Form';
import { useProductsContext } from '../../products.hook';
import { setComment, setEmail, setFirstName, setLastName } from '../../state/products.action';
import { getSelectedDate, getSelectedLocation, getSelectedPlan } from '../../state/products.selector';
import { StepContainer } from '../StepContainer';

const useStyles = makeStyles((theme: Theme) => ({
  fieldset: {
    marginTop: theme.spacing(2)
  }
}));

const FilledAnswer: React.FC<{label: string; answer: string; className?: string}> = ({ label, answer, className }) => (
  <div className={className}>
    <Typography variant="body2">{label}</Typography>
    <Typography color="primary" variant="body1">{answer}</Typography>
  </div>
);

// eslint-disable-next-line max-lines-per-function
export const ConfirmationStep: React.FC = () => {
  const dispatch = useDispatch();
  const { locationScreen, goNextStep, goPrevStep, prevStep } = useProductsContext();
  const selectedLocation = useSelector(getSelectedLocation);
  const selectedPlan = useSelector(getSelectedPlan);
  const selectedDate = useSelector(getSelectedDate);
  const classes = useStyles();

  const formattedDate = !!selectedDate && format('iiii dd/MM hh:mm', selectedDate);

  // TODO: put in contrib
  const validationButtonLabel = 'SCHEDULE OUR MEETING';
  // TODO: add contrib in confirmation screen instead and use it

  return (
    <StepContainer>
      <Form
        css={css`
          display: flex;
          flex-direction: column;
        `}
        onValidationSuccess={({ email, firstName, lastName, additionalInformations }) => {
          [
            setEmail(email),
            setFirstName(firstName),
            setLastName(lastName),
            setComment(additionalInformations)
          ].forEach(dispatch);
          goNextStep();
        }}>
        <FilledAnswer
          className={classes.fieldset}
          label="Plan chosen"
          answer={selectedPlan}
        />

        <FilledAnswer
          className={classes.fieldset}
          label="Date"
          answer={formattedDate}
        />

        <FilledAnswer
          className={classes.fieldset}
          label="Location"
          answer={selectedLocation}
        />

        <FormInput
          className={classes.fieldset}
          label={locationScreen.contribution.customerPlaceLabel}
          name="email"
          type="email"
          placeholder={locationScreen.contribution.customerPlacePlaceholder}
          errorMessage={locationScreen.contribution.customerPlaceError}
          margin="dense"
          required
        />

        <FormInput
          className={classes.fieldset}
          label={locationScreen.contribution.customerPlaceLabel}
          name="firstName"
          placeholder={locationScreen.contribution.customerPlacePlaceholder}
          errorMessage={locationScreen.contribution.customerPlaceError}
          margin="dense"
          required
        />

        <FormInput
          className={classes.fieldset}
          label={locationScreen.contribution.customerPlaceLabel}
          name="lastName"
          placeholder={locationScreen.contribution.customerPlacePlaceholder}
          errorMessage={locationScreen.contribution.customerPlaceError}
          margin="dense"
          required
        />

        <FormInput
          className={classes.fieldset}
          label={locationScreen.contribution.customerPlaceLabel}
          name="additionalInformations"
          placeholder={locationScreen.contribution.customerPlacePlaceholder}
          errorMessage={locationScreen.contribution.customerPlaceError}
          margin="dense"
          multiline
        />

        <StepButtons
          className={classes.fieldset}
          onPrevStepClick={goPrevStep}
          prevStepName={prevStep?.stepName}
          nextStepName={validationButtonLabel}
        />
      </Form>
    </StepContainer>
  );
};
