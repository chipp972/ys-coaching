import React from 'react';
import { css } from '@emotion/core';
import { mediaQueries } from '../../../../../common/theme';
import { Timeslot } from './Timeslot';
import isEqual from 'date-fns/isEqual';

type Props = {
  timeslots: {
    [dateKey: string]: Date[];
  };
  currentSelection?: Date;
  onClick: (date: Date) => void;
};

export const TimeslotListBody: React.FC<Props> = ({ timeslots, currentSelection, onClick }) => (
  <tbody>
    <tr>
      {Object.entries(timeslots).map(([dateKey, timeslotList]) => (
        <td key={dateKey}>
          {timeslotList.map((date, index) => (
            <div
              key={`${dateKey}.${index}`}
              css={css`
                margin: 15px 5px;
                ${mediaQueries.fromTablet} {
                  margin: 20px 20px;
                }
              `}>
              <Timeslot value={date} onClick={onClick} isSelected={isEqual(currentSelection, date)} />
            </div>
          ))}
        </td>
      ))}
    </tr>
  </tbody>
);
