import * as R from 'ramda';
import React from 'react';
import LeftArrow from '../../../../../img/icon/arrow-left-circle.inline.svg';
import { css } from '@emotion/core';
import { colors } from '../../../../../common/theme';
import addMinutes from 'date-fns/fp/addMinutes';
import isAfter from 'date-fns/fp/isAfter';
import startOfHour from 'date-fns/fp/startOfHour';
import isSameHour from 'date-fns/fp/isSameHour';
import { TimeslotListHeader } from './TimeslotListHeader';
import format from 'date-fns/fp/format';
import { TimeslotListBody } from './TimeslotListBody';

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
  availabilityList: Availability[];
  onTimeslotSelection: (date: Date) => void;
};

export const TimeSlotPicker: React.FC<Props> = ({ onTimeslotSelection, availabilityList }) => {
  const timeslots = generateTimeslots(availabilityList);
  const [currentPage, setPage] = React.useState(0);
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        margin: auto;
      `}>
      <LeftArrow
        css={css`
          width: 40px;
          height: auto;
          stroke: ${colors.white};
          cursor: pointer;
          flex-shrink: 0;
        `}
      />
      {/* TODO: calculate height */}
      <div css={css`
        position: relative;
        width: 80vw;
        height: 500px;
        overflow: scroll;
        background-color: ${colors.black};
      `}>
        <table css={css`
          position: absolute;
          top: 0;
          left: calc(${currentPage} * 80vw);
        `}>
          <TimeslotListHeader dateList={Object.keys(timeslots)} />
          <TimeslotListBody timeslots={timeslots} onClick={onTimeslotSelection} />
        </table>
      </div>
      <LeftArrow
        css={css`
          width: 40px;
          height: auto;
          stroke: ${colors.white};
          cursor: pointer;
          transform: rotate(180deg);
          flex-shrink: 0;
        `}
      />
    </div>
  );
};
