import { css } from '@emotion/core';
import { TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import format from 'date-fns/fp/format';
import parseISO from 'date-fns/fp/parseISO';
import React from 'react';
import { colors } from '../../../../../common/theme';

type Props = {
  dateList: string[];
};

const useStyles = makeStyles({
  thead: {
    borderBottom: `1px solid ${colors.gray900}`
  },
  dayCell: {
    color: colors.gray300
  }
});

export const TimeslotListHeader: React.FC<Props> = ({ dateList }) => {
  const parsedDateList = dateList.map(parseISO);
  const classes = useStyles();
  return (
    <TableHead className={classes.thead}>
      <TableRow>
        {parsedDateList.map((date, index) => (
          <TableCell key={dateList[index]} align="center">
            <div css={css`
              display: flex;
              flex-flow: column nowrap;
              justify-content: center;
              text-align: center;
              color: ${colors.gray900};
            `}>
              <Typography variant="body2">{format('iiii', date)}</Typography>
              <Typography variant="body1">{format('dd/MM', date)}</Typography>
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
