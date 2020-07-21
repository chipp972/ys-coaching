import { Form } from '@chipp972/form-validation';
import { css } from '@emotion/core';
import { FormLabel, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import format from 'date-fns/fp/format';
import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingButton, LoadingStatus, StepButtons } from '../../../../common/components/Button';
import { FormInput } from '../../../../common/components/Form';
import { handleFormSubmitWithRecaptcha } from '../../../../common/helpers/form-submit';
import { ReCaptchaAction } from '../../../../common/helpers/recaptcha';
import { ProductsFormData } from '../../../../server/data.type';
import { useProductsContext } from '../../products.hook';
import { Fieldnames, productsRequestEndPoint } from '../../state/products.constant';
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
  const [status, updateStatus] = React.useState(LoadingStatus.NOT_STARTED);
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
        onValidationSuccess={async ({ firstName, lastName, email, additionalInformations }) => {
          updateStatus(LoadingStatus.PENDING);

          const productsFormData: ProductsFormData = {
            firstName,
            lastName,
            email,
            additionalInformations,
            plan: selectedPlan,
            date: selectedDate,
            location: selectedLocation
          };
          const newStatus = await handleFormSubmitWithRecaptcha({
            action: ReCaptchaAction.SUBMIT_PRODUCTS,
            endpoint: productsRequestEndPoint
          })(productsFormData);

          updateStatus(newStatus);
          newStatus === LoadingStatus.SUCCESS && goNextStep();
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
          name={Fieldnames.email}
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
            name={Fieldnames.firstName}
            margin="dense"
            required
          />

          <FormInput
            className={classes.fieldset}
            label={confirmationScreen.contribution.lastNameLabel}
            placeholder={confirmationScreen.contribution.lastNamePlaceholder}
            errorMessage={confirmationScreen.contribution.requiredErrorMessage}
            name={Fieldnames.lastName}
            margin="dense"
            required
          />
        </div>

        <FormInput
          className={classes.fieldset}
          label={confirmationScreen.contribution.additionalInfoLabel}
          placeholder={confirmationScreen.contribution.additionalInfoPlaceholder}
          errorMessage={confirmationScreen.contribution.requiredErrorMessage}
          name={Fieldnames.additionalInformations}
          margin="dense"
          multiline
        />

        <LoadingButton
          status={status}
          errorMessage={confirmationScreen.contribution.errorMessageNotSent}>
          <StepButtons
            className={classes.fieldset}
            onPrevStepClick={goPrevStep}
            prevStepName={prevStep?.stepName}
            nextStepName={confirmationScreen.contribution.validationButtonLabel}
          />
        </LoadingButton>
      </Form>
    </StepContainer>
  );
};
