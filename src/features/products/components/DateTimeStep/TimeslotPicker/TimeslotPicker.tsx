import { Paper, Table, TableContainer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import addMinutes from 'date-fns/fp/addMinutes';
import format from 'date-fns/fp/format';
import isAfter from 'date-fns/fp/isAfter';
import isSameHour from 'date-fns/fp/isSameHour';
import startOfHour from 'date-fns/fp/startOfHour';
import * as R from 'ramda';
import React from 'react';
import { TimeslotListBody } from './TimeslotListBody';
import { TimeslotListHeader } from './TimeslotListHeader';

const groupByDay = R.groupBy(format('yyyy-MM-dd'));

const generateAllTimeslotsBetwwen = ({ start, end }: { start: Date; end: Date }) => {
  if (isAfter(end, start)) {
    return generateAllTimeslotsBetwwen({ start: end, end: start });
  }
  const result = [startOfHour(start)];
  let lastIndex = 0;
  const isDateBPassed = isAfter(end);
  const addHalfHour = addMinutes(30);

  // eslint-disable-next-line fp/no-loops
  while (
    !isDateBPassed(result[lastIndex]) &&
    !isSameHour(result[lastIndex], end)
  ) {
    result.push(addHalfHour(result[lastIndex]));
    lastIndex++;
  }
  return result;
};

const generateTimeslots = R.pipe(
  R.map(generateAllTimeslotsBetwwen),
  R.flatten,
  groupByDay
);

export type Availability = {
  start: Date;
  end: Date;
};

type Props = {
  currentSelection?: Date;
  availabilityList: Availability[];
  onTimeslotSelection: (date: Date) => void;
};

const useStyles = makeStyles({
  table: {
    minWidth: 300
  }
});

export const TimeSlotPicker: React.FC<Props> = ({ onTimeslotSelection, availabilityList, currentSelection }) => {
  const timeslots = generateTimeslots(availabilityList);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="Timeslot table">
        <TimeslotListHeader dateList={Object.keys(timeslots)} />
        <TimeslotListBody timeslots={timeslots} currentSelection={currentSelection} onClick={onTimeslotSelection} />
      </Table>
    </TableContainer>
  );
};
