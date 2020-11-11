import isValid from 'date-fns/fp/isValid';
// import { graphql, useStaticQuery } from 'gatsby';
import * as R from 'ramda';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DatoCmsDateTimeStep } from '../../products.context';
import { useProductsContext } from '../../products.hook';
import { setDateTime } from '../../state/products.action';
import { getSelectedDate } from '../../state/products.selector';
import { TimeSlotPicker } from './TimeslotPicker/TimeslotPicker';

export const DateTimeStep: React.FC<DatoCmsDateTimeStep> = ({ timeslots }) => {
  const currentTimeslot = useSelector(getSelectedDate);
  const { goNextStep } = useProductsContext();
  const dispatch = useDispatch();
  const selectDate: (date: Date) => void = R.pipe(setDateTime, dispatch, goNextStep);

  const availabilityList = React.useMemo(
    () =>
      timeslots.map(({ id, startDate, endDate }) => ({
          id,
          start: new Date(startDate),
          end: new Date(endDate)
        }))
        .filter(({ start, end }) => isValid(start) && isValid(end)),
    []
  );
  return (
    <TimeSlotPicker
      currentSelection={currentTimeslot}
      availabilityList={availabilityList}
      onTimeslotSelection={selectDate}
    />
  );
};
