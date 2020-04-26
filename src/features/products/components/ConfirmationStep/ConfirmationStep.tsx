import { Form } from '@chipp972/form-validation';
import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import format from 'date-fns/fp/format';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StepButtons } from '../../../../common/components/Button';
import { FormInput } from '../../../../common/components/Form';
import { ProductsContext } from '../../products.context';
import { setComment, setEmail, setFirstName, setLastName } from '../../state/products.action';
import { getSelectedDate, getSelectedLocation, getSelectedPlan } from '../../state/products.selector';
import { StepContainer } from '../StepContainer';

type Props = {
  heading: string;
  description?: string;
  goNextStep: () => void;
  goPrevStep: () => void;
  nextStepName: string;
  prevStepName: string;
};

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
export const ConfirmationStep: React.FC<Props> = ({
  heading,
  description,
  goNextStep,
  goPrevStep,
  nextStepName,
  prevStepName
}) => {
  const dispatch = useDispatch();
  const { contribution } = React.useContext(ProductsContext);
  const selectedLocation = useSelector(getSelectedLocation);
  const selectedPlan = useSelector(getSelectedPlan);
  const selectedDate = useSelector(getSelectedDate);
  const classes = useStyles();

  const formattedDate = !!selectedDate && format('iiii dd/MM hh:mm', selectedDate);

  return (
    <StepContainer
      heading={heading}
      description={description}
      prevStepName={prevStepName}
      goPrevStep={goPrevStep}>
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
          label={contribution.customerPlaceLabel}
          name="email"
          type="email"
          placeholder={contribution.customerPlacePlaceholder}
          errorMessage={contribution.customerPlaceError}
          margin="dense"
          required
        />

        <FormInput
          className={classes.fieldset}
          label={contribution.customerPlaceLabel}
          name="firstName"
          placeholder={contribution.customerPlacePlaceholder}
          errorMessage={contribution.customerPlaceError}
          margin="dense"
          required
        />

        <FormInput
          className={classes.fieldset}
          label={contribution.customerPlaceLabel}
          name="lastName"
          placeholder={contribution.customerPlacePlaceholder}
          errorMessage={contribution.customerPlaceError}
          margin="dense"
          required
        />

        <FormInput
          className={classes.fieldset}
          label={contribution.customerPlaceLabel}
          name="additionalInformations"
          placeholder={contribution.customerPlacePlaceholder}
          errorMessage={contribution.customerPlaceError}
          margin="dense"
          multiline
        />

        <StepButtons
          className={classes.fieldset}
          onPrevStepClick={goPrevStep}
          prevStepName={prevStepName}
          nextStepName={nextStepName}
        />
      </Form>
    </StepContainer>
  );
};
