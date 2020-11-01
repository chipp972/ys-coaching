import { Form } from '@chipp972/form-validation';
import { css } from '@emotion/core';
import { FormLabel, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingButton, LoadingStatus, StepButtons } from '../../../common/components/Button';
import { FormInput } from '../../../common/components/Form';
import { handleFormSubmitWithRecaptcha } from '../../../common/helpers/form-submit';
import { ReCaptchaAction } from '../../../common/helpers/recaptcha';
import { ProductsFormData } from '../../../server/data.type';
import { DatoCmsConfirmationStep } from '../products.context';
import { useProductsContext } from '../products.hook';
import { Fieldnames, productsRequestEndPoint } from '../state/products.constant';
import {
  getFormattedSelectedDate,
  getSelectedLocation,
  getSelectedPlan
} from '../state/products.selector';

const useStyles = makeStyles((theme: Theme) => ({
  fieldset: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

const FilledAnswer: React.FC<{ label: string; answer: string; className?: string }> = ({
  label,
  answer,
  className
}) => (
  <div className={className}>
    <FormLabel component="p">{label}</FormLabel>
    <Typography color="primary" variant="h6" component="p">
      {answer}
    </Typography>
  </div>
);

// eslint-disable-next-line max-lines-per-function
export const ConfirmationStep: React.FC<DatoCmsConfirmationStep> = ({
  dateChoiceLabel,
  emailLabel,
  emailPlaceholder,
  errorMessageNotSent,
  firstnameLabel,
  firstnamePlaceholder,
  lastnameLabel,
  lastnamePlaceholder,
  locationChoiceLabel,
  messageLabel,
  messagePlacholder,
  planChoiceLabel,
  requiredFieldErrorMessage,
  validationButtonLabel
}) => {
  const [status, updateStatus] = React.useState(LoadingStatus.NOT_STARTED);
  const { goNextStep, goPrevStep, prevStep } = useProductsContext();
  const selectedLocation = useSelector(getSelectedLocation);
  const selectedPlan = useSelector(getSelectedPlan);
  const selectedDate = useSelector(getFormattedSelectedDate);
  const classes = useStyles();

  return (
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
      <FilledAnswer className={classes.fieldset} label={planChoiceLabel} answer={selectedPlan} />

      <FilledAnswer className={classes.fieldset} label={dateChoiceLabel} answer={selectedDate} />

      <FilledAnswer
        className={classes.fieldset}
        label={locationChoiceLabel}
        answer={selectedLocation}
      />

      <FormInput
        className={classes.fieldset}
        label={emailLabel}
        placeholder={emailPlaceholder}
        errorMessage={requiredFieldErrorMessage}
        name={Fieldnames.email}
        type="email"
        margin="dense"
        required
      />

      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}>
        <FormInput
          className={classes.fieldset}
          label={firstnameLabel}
          placeholder={firstnamePlaceholder}
          errorMessage={requiredFieldErrorMessage}
          name={Fieldnames.firstName}
          margin="dense"
          required
        />

        <FormInput
          className={classes.fieldset}
          label={lastnameLabel}
          placeholder={lastnamePlaceholder}
          errorMessage={requiredFieldErrorMessage}
          name={Fieldnames.lastName}
          margin="dense"
          required
        />
      </div>

      <FormInput
        className={classes.fieldset}
        label={messageLabel}
        placeholder={messagePlacholder}
        errorMessage={requiredFieldErrorMessage}
        name={Fieldnames.additionalInformations}
        margin="dense"
        multiline
      />

      <LoadingButton status={status} errorMessage={errorMessageNotSent}>
        <StepButtons
          className={classes.fieldset}
          onPrevStepClick={goPrevStep}
          prevStepName={prevStep?.stepName}
          nextStepName={validationButtonLabel}
        />
      </LoadingButton>
    </Form>
  );
};
