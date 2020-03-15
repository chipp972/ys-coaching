import React from 'react';
import { StepContainer } from '../StepContainer';
import { TimeSlotPicker } from './TimeslotPicker/TimeslotPicker';
import isValid from 'date-fns/fp/isValid';
import { Section } from '../../../../common/layout';

type Props = {
  heading: string;
  description: string;
  availabilityTimeslots: { start: string; end: string }[];
  selectDate: (date: Date) => void;
};

export const DateTimeStep: React.FC<Props> = ({
  heading,
  description,
  selectDate,
  availabilityTimeslots
}) => {
  const availabilityList = React.useMemo(
    () =>
      availabilityTimeslots
        .map(({ start, end }) => ({
          start: new Date(start),
          end: new Date(end)
        }))
        .filter(({ start, end }) => isValid(start) && isValid(end)),
    [availabilityTimeslots]
  );
  return (
    <StepContainer heading={heading} description={description}>
      <Section>
        <TimeSlotPicker
          availabilityList={availabilityList}
          onTimeslotSelection={selectDate}
        />
      </Section>
    </StepContainer>
  );
};
