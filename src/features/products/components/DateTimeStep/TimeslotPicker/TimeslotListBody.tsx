import React from 'react';
import { css } from '@emotion/core';
import { mediaQueries } from '../../../../../common/theme';
import { Timeslot } from './Timeslot';

type Props = {
  timeslots: {
    [dateKey: string]: Date[];
  };
  onClick: (date: Date) => void;
};

export const TimeslotListBody: React.FC<Props> = ({ timeslots, onClick }) => (
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
              <Timeslot value={date} onClick={onClick} />
            </div>
          ))}
        </td>
      ))}
    </tr>
  </tbody>
);
