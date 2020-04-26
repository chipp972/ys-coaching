import { Form } from '@chipp972/form-validation';
import { css } from '@emotion/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { StepButtons } from '../../../../common/components/Button';
import { FormInput, FormRadioGroup } from '../../../../common/components/Form';
import { useProductsContext } from '../../products.hook';
import { setLocation } from '../../state/products.action';
import { StepContainer } from '../StepContainer';

const useStyles = makeStyles((theme: Theme) => ({
  fieldset: {
    marginBottom: theme.spacing(4)
  }
}));

// eslint-disable-next-line max-lines-per-function
export const LocationStep: React.FC = () => {
  const dispatch = useDispatch();
  const [isCustomLocationChecked, setIsCustomLocationChecked] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const classes = useStyles();
  const { locationScreen, goNextStep, goPrevStep, nextStep, prevStep } = useProductsContext();

  const customPlaceOption = {
    label: locationScreen.contribution.locationChoiceCustomPlaceLabel,
    address: 'own-place'
  };

  const locationList = locationScreen.availableLocations
    .concat([customPlaceOption])
    .map(({ label, address }) => ({ label, value: address }));
  return (
    <StepContainer>
      <Form
        css={css`
          display: flex;
          flex-direction: column;
        `}
        onValidationSuccess={({ location, homeAddress }) => {
          const selectedLocation = location === customPlaceOption.address ? homeAddress : location;
          dispatch(setLocation(selectedLocation));
          goNextStep();
        }}>
        <FormRadioGroup
          className={classes.fieldset}
          options={locationList}
          label={locationScreen.contribution.locationChoiceLabel}
          errorMessage={locationScreen.contribution.locationChoiceError}
          name="location"
          value={currentLocation}
          onFieldReset={() => setCurrentLocation(null)}
          onChange={(event) => {
            const { value } = event.target;
            setCurrentLocation(value);
            setIsCustomLocationChecked(value === customPlaceOption.address);
          }}
        />
        <FormInput
          className={classes.fieldset}
          label={locationScreen.contribution.customerPlaceLabel}
          name="homeAddress"
          placeholder={locationScreen.contribution.customerPlacePlaceholder}
          errorMessage={locationScreen.contribution.customerPlaceError}
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
    </StepContainer>
  );
};
