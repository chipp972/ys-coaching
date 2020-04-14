import React from 'react';
import { css } from '@emotion/core';
import { mediaQueries } from '../../../../../common/theme';
import { Timeslot } from './Timeslot';
import isEqual from 'date-fns/isEqual';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  timeslots: {
    [dateKey: string]: Date[];
  };
  currentSelection?: Date;
  onClick: (date: Date) => void;
};

const useStyles = makeStyles({
  cell: {
    verticalAlign: 'baseline'
  }
});

export const TimeslotListBody: React.FC<Props> = ({ timeslots, currentSelection, onClick }) => {
  const classes = useStyles();
  return (
    <TableBody>
      <TableRow>
        {Object.entries(timeslots).map(([dateKey, timeslotList]) => (
          <TableCell className={classes.cell} key={dateKey} align="center">
            {timeslotList.map((date, index) => (
              <div
                key={`${dateKey}.${index}`}
                css={css`
                  margin: 5px;
                  ${mediaQueries.fromTablet} {
                    margin: 20px;
                  }
                `}>
                <Timeslot
                  value={date}
                  onClick={onClick}
                  isSelected={isEqual(currentSelection, date)}
                />
              </div>
            ))}
          </TableCell>
        ))}
      </TableRow>
    </TableBody>
  );
};
