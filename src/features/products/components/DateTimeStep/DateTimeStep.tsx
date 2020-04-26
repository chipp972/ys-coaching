import isValid from 'date-fns/fp/isValid';
import * as R from 'ramda';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useProductsContext } from '../../products.hook';
import { setDateTime } from '../../state/products.action';
import { getSelectedDate } from '../../state/products.selector';
import { StepContainer } from '../StepContainer';
import { TimeSlotPicker } from './TimeslotPicker/TimeslotPicker';

export const DateTimeStep: React.FC = () => {
  const currentTimeslot = useSelector(getSelectedDate);
  const { goNextStep, dateTimeScreen } = useProductsContext();
  const dispatch = useDispatch();
  const selectDate: (date: Date) => void = R.pipe(setDateTime, dispatch, goNextStep);

  const availabilityList = React.useMemo(
    () =>
      dateTimeScreen.availableTimeslots
        .map(({ start, end }) => ({
          start: new Date(start),
          end: new Date(end)
        }))
        .filter(({ start, end }) => isValid(start) && isValid(end)),
    []
  );
  return (
    <StepContainer>
      <TimeSlotPicker
        currentSelection={currentTimeslot}
        availabilityList={availabilityList}
        onTimeslotSelection={selectDate}
      />
    </StepContainer>
  );
};
