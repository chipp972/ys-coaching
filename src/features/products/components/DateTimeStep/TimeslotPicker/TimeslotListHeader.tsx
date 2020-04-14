import React from 'react';
import { css } from '@emotion/core';
import parseISO from 'date-fns/fp/parseISO';
import format from 'date-fns/fp/format';
import { MediumText, colors, mediaQueries } from '../../../../../common/theme';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
              <MediumText>{format('iiii', date)}</MediumText>
              <MediumText>{format('dd/MM', date)}</MediumText>
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
