import * as R from 'ramda';
import React from 'react';
import { css } from '@emotion/core';
import { colors } from '../../../../../common/theme';
import addMinutes from 'date-fns/fp/addMinutes';
import isAfter from 'date-fns/fp/isAfter';
import startOfHour from 'date-fns/fp/startOfHour';
import isSameHour from 'date-fns/fp/isSameHour';
import { TimeslotListHeader } from './TimeslotListHeader';
import format from 'date-fns/fp/format';
import { TimeslotListBody } from './TimeslotListBody';
import { TableContainer, Table, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxHeight: 440,
    [theme.breakpoints.up('sm')]: {
      maxHeight: 600
    },
    [theme.breakpoints.up('md')]: {
      maxHeight: 800
    }
  },
  table: {
    minWidth: 300
  }
}));

export const TimeSlotPicker: React.FC<Props> = ({ onTimeslotSelection, availabilityList, currentSelection }) => {
  const timeslots = generateTimeslots(availabilityList);
  const classes = useStyles();
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="Timeslot table">
        <TimeslotListHeader dateList={Object.keys(timeslots)} />
        <TimeslotListBody timeslots={timeslots} currentSelection={currentSelection} onClick={onTimeslotSelection} />
      </Table>
    </TableContainer>
  );
};
