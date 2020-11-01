import { Form } from '@chipp972/form-validation';
import { css } from '@emotion/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { StepButtons } from '../../../common/components/Button';
import { FormInput, FormRadioGroup } from '../../../common/components/Form';
import { DatoCmsLocationStep } from '../products.context';
import { useProductsContext } from '../products.hook';
import { setLocation } from '../state/products.action';
import { Fieldnames } from '../state/products.constant';

const useStyles = makeStyles((theme: Theme) => ({
  fieldset: {
    marginBottom: theme.spacing(4)
  }
}));

// eslint-disable-next-line max-lines-per-function
export const LocationStep: React.FC<DatoCmsLocationStep> = ({
  customPlaceError,
  customPlaceLabel,
  customPlacePlaceholder,
  locationChoiceCustomPlaceLabel,
  locationChoiceError,
  locationChoiceLabel,
  locations
}) => {
  const dispatch = useDispatch();
  const [isCustomLocationChecked, setIsCustomLocationChecked] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const classes = useStyles();
  const { goNextStep, goPrevStep, nextStep, prevStep } = useProductsContext();

  const customPlaceOption = {
    label: customPlaceLabel,
    value: 'own-place',
    geolocation: null
  };

  const locationList = React.useMemo(() => locations
    .map(({ id, label, geolocation }) => ({ label, value: id, geolocation }))
    .concat([customPlaceOption]), []);

  return (
    <Form
      css={css`
        display: flex;
        flex-direction: column;
      `}
      onValidationSuccess={({ location, homeAddress }) => {
        const selectedLocation = location === customPlaceOption.value
          ? homeAddress
          : locationList.find(({ value }) => location === value)?.label;
        dispatch(setLocation(selectedLocation));
        goNextStep();
      }}>
      <FormRadioGroup
        className={classes.fieldset}
        options={locationList}
        label={locationChoiceLabel}
        errorMessage={locationChoiceError}
        name={Fieldnames.location}
        value={currentLocation}
        onFieldReset={() => setCurrentLocation(null)}
        onChange={(event) => {
          const { value } = event.target;
          setCurrentLocation(value);
          setIsCustomLocationChecked(value === customPlaceOption.value);
        }}
      />
      <FormInput
        className={classes.fieldset}
        label={locationChoiceCustomPlaceLabel}
        name={Fieldnames.homeAddress}
        placeholder={customPlacePlaceholder}
        errorMessage={customPlaceError}
        required={isCustomLocationChecked}
        margin="dense"
      />
      <StepButtons
        className={classes.fieldset}
        onPrevStepClick={goPrevStep}
        prevStepName={prevStep?.stepName}
        nextStepName={nextStep?.stepName}
      />
    </Form>
  );
};
