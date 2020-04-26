import { Form } from '@chipp972/form-validation';
import { css } from '@emotion/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { StepButtons } from '../../../../common/components/Button';
import { FormInput, FormRadioGroup } from '../../../../common/components/Form';
import { ProductsContext } from '../../products.context';
import { setLocation } from '../../state/products.action';
import { StepContainer } from '../StepContainer';

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

const useStyles = makeStyles((theme: Theme) => ({
  fieldset: {
    marginBottom: theme.spacing(4)
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
  const { contribution } = React.useContext(ProductsContext);
  const classes = useStyles();

  const customPlaceOption = {
    label: contribution.locationChoiceCustomPlaceLabel,
    address: 'own-place'
  };

  const locationList = availableLocations
    .concat([customPlaceOption])
    .map(({ label, address }) => ({ label, value: address }));
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
        onValidationSuccess={({ location, homeAddress }) => {
          const selectedLocation = location === customPlaceOption.address ? homeAddress : location;
          dispatch(setLocation(selectedLocation));
          goNextStep();
        }}>
        <FormRadioGroup
          className={classes.fieldset}
          options={locationList}
          label={contribution.locationChoiceLabel}
          errorMessage={contribution.locationChoiceError}
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
          label={contribution.customerPlaceLabel}
          name="homeAddress"
          placeholder={contribution.customerPlacePlaceholder}
          errorMessage={contribution.customerPlaceError}
          required={isCustomLocationChecked}
          margin="dense"
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
