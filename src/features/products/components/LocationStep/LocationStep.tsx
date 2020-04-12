import React from 'react';
import { StepContainer } from '../StepContainer';
import { FormInput, FormRadioGroup } from '../../../../common/components/Form';
import { Form } from '@chipp972/form-validation';
import { setLocation } from '../../state/products.action';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { StepButtons } from '../../../../common/components/Button';

// TODO: Make this contribuable
const labelsToContribute = {
  ownPlaceLabel: 'At your place',
  locationChoiceLabel: 'Your preferred place',
  locationChoiceErrorMessage: 'Please select a place to meet or provide your own place',
  customerPlaceLabel: 'Choose a place',
  customerPlacePlaceholder: '1 rue du général Leclerc ...',
  customerPlaceErrorMessage: 'We are missing an address to meet'
};

type Location = {
  label: React.ReactNode;
  address: string;
};

type Props = {
  heading: string;
  description?: string;
  availableLocations: Location[];
  goNextStep: () => void;
  goPrevStep: () => void;
  nextStepName: string;
  prevStepName: string;
};

const ownPlaceOption = {
  label: labelsToContribute.ownPlaceLabel,
  address: 'own-place'
};

const useStyles = makeStyles((theme: Theme) => ({
  fieldset: {
    marginBottom: theme.spacing(2)
  }
}));

// eslint-disable-next-line max-lines-per-function
export const LocationStep: React.FC<Props> = ({
  heading,
  description,
  availableLocations,
  goNextStep,
  goPrevStep,
  nextStepName,
  prevStepName
}) => {
  const dispatch = useDispatch();
  const [isCustomLocationChecked, setIsCustomLocationChecked] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const classes = useStyles();

  const locationList = availableLocations
    .concat([ownPlaceOption])
    .map(({ label, address }) => ({ label, value: address }));
  return (
    <StepContainer heading={heading} description={description}>
      <Form
        css={css`
          display: flex;
          flex-direction: column;
        `}
        onValidationSuccess={({ location, homeAddress }) => {
          const selectedLocation = location === ownPlaceOption.address ? homeAddress : location;
          dispatch(setLocation(selectedLocation));
          goNextStep();
        }}>
        <FormRadioGroup
          className={classes.fieldset}
          options={locationList}
          label={labelsToContribute.locationChoiceLabel}
          errorMessage={labelsToContribute.locationChoiceErrorMessage}
          name="location"
          value={currentLocation}
          onFieldReset={() => setCurrentLocation(null)}
          onChange={(event) => {
            const { value } = event.target;
            setCurrentLocation(value);
            setIsCustomLocationChecked(value === ownPlaceOption.address);
          }}
        />
        <FormInput
          className={classes.fieldset}
          label={labelsToContribute.customerPlaceLabel}
          name="homeAddress"
          placeholder={labelsToContribute.customerPlacePlaceholder}
          errorMessage={labelsToContribute.customerPlaceErrorMessage}
          required={isCustomLocationChecked}
          margin="dense"
        />
        <StepButtons
          onPrevStepClick={goPrevStep}
          prevStepName={prevStepName}
          nextStepName={nextStepName}
        />
      </Form>
    </StepContainer>
  );
};
