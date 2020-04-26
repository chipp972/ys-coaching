import isValid from 'date-fns/fp/isValid';
import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedDate } from '../../state/products.selector';
import { StepContainer } from '../StepContainer';
import { TimeSlotPicker } from './TimeslotPicker/TimeslotPicker';

type Props = {
  heading: string;
  description: string;
  availabilityTimeslots: { start: string; end: string }[];
  selectDate: (date: Date) => void;
  goPrevStep: () => void;
  prevStepName: string;
};

export const DateTimeStep: React.FC<Props> = ({
  heading,
  description,
  selectDate,
  availabilityTimeslots,
  goPrevStep,
  prevStepName
}) => {
  const currentTimeslot = useSelector(getSelectedDate);
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
    <StepContainer
      heading={heading}
      description={description}
      goPrevStep={goPrevStep}
      prevStepName={prevStepName}>
      <TimeSlotPicker
        currentSelection={currentTimeslot}
        availabilityList={availabilityList}
        onTimeslotSelection={selectDate}
      />
    </StepContainer>
  );
};
