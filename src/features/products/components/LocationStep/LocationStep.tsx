import React from 'react';
import { StepContainer } from '../StepContainer';
import { Input } from '../../../../common/components/Form/Input';

type Location = {
  label: string;
  address: string;
};

type Props = {
  heading: string;
  description?: string;
  availableLocations: Location[];
};

export const LocationStep: React.FC<Props> = ({
  heading,
  description,
  availableLocations
}) => (
  <StepContainer heading={heading} description={description}>
    {console.log({availableLocations})}
    <Input
      name="home-address"
      placeholder="1 rue du général Leclerc ..."
      label="At your place"
    />
  </StepContainer>
);
