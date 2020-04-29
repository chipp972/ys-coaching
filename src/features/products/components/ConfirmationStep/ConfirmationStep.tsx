import { Form } from '@chipp972/form-validation';
import { css } from '@emotion/core';
import { FormLabel, Typography } from '@material-ui/core';
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
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

const FilledAnswer: React.FC<{label: string; answer: string; className?: string}> = ({ label, answer, className }) => (
  <div className={className}>
    <FormLabel component="p">{label}</FormLabel>
    <Typography color="primary" variant="h6" component="p">{answer}</Typography>
  </div>
);

// eslint-disable-next-line max-lines-per-function
export const ConfirmationStep: React.FC = () => {
  const dispatch = useDispatch();
  const { goNextStep, goPrevStep, prevStep, confirmationScreen } = useProductsContext();
  const selectedLocation = useSelector(getSelectedLocation);
  const selectedPlan = useSelector(getSelectedPlan);
  const selectedDate = useSelector(getSelectedDate);
  const classes = useStyles();

  const formattedDate = React.useMemo(
    () => !!selectedDate && format('iiii dd/MM hh:mm', selectedDate),
    [selectedDate]
  );

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
          label={confirmationScreen.contribution.planChoiceLabel}
          answer={selectedPlan}
        />

        <FilledAnswer
          className={classes.fieldset}
          label={confirmationScreen.contribution.dateChoiceLabel}
          answer={formattedDate}
        />

        <FilledAnswer
          className={classes.fieldset}
          label={confirmationScreen.contribution.locationChoiceLabel}
          answer={selectedLocation}
        />

        <FormInput
          className={classes.fieldset}
          label={confirmationScreen.contribution.emailLabel}
          placeholder={confirmationScreen.contribution.emailPlaceholder}
          errorMessage={confirmationScreen.contribution.requiredErrorMessage}
          name="email"
          type="email"
          margin="dense"
          required
        />

        <div css={css`
          display: flex;
          justify-content: space-between;
        `}>
          <FormInput
            className={classes.fieldset}
            label={confirmationScreen.contribution.firstNameLabel}
            placeholder={confirmationScreen.contribution.firstNamePlaceholder}
            errorMessage={confirmationScreen.contribution.requiredErrorMessage}
            name="firstName"
            margin="dense"
            required
          />

          <FormInput
            className={classes.fieldset}
            label={confirmationScreen.contribution.lastNameLabel}
            placeholder={confirmationScreen.contribution.lastNamePlaceholder}
            errorMessage={confirmationScreen.contribution.requiredErrorMessage}
            name="lastName"
            margin="dense"
            required
          />
        </div>

        <FormInput
          className={classes.fieldset}
          label={confirmationScreen.contribution.additionalInfoLabel}
          placeholder={confirmationScreen.contribution.additionalInfoPlaceholder}
          errorMessage={confirmationScreen.contribution.requiredErrorMessage}
          name="additionalInformations"
          margin="dense"
          multiline
        />

        <StepButtons
          className={classes.fieldset}
          onPrevStepClick={goPrevStep}
          prevStepName={prevStep?.stepName}
          nextStepName={confirmationScreen.contribution.validationButtonLabel}
        />
      </Form>
    </StepContainer>
  );
};
