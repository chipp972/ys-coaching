import React from 'react';
import { css } from '@emotion/core';
import parseISO from 'date-fns/fp/parseISO';
import format from 'date-fns/fp/format';
import { MediumText, colors, mediaQueries } from '../../../../common/theme';

type Props = {
  dateList: string[];
};

export const TimeslotListHeader: React.FC<Props> = ({ dateList }) => {
  const parsedDateList = dateList.map(parseISO);
  return (
    <thead css={css`
      border-bottom: 1px solid ${colors.gray900};
    `}>
      <tr>
        {parsedDateList.map((date, index) => (
          <td key={dateList[index]} align="center" css={css`
            color: ${colors.gray300};
          `}>
            <MediumText color={colors.gray400} css={css`
              color: ${colors.gray900};
              ${mediaQueries.fromTablet} {
                display: none;
              }
            `}>{format('iii', date)}</MediumText>
            <MediumText css={css`
              display: none;
              color: ${colors.gray900};

              ${mediaQueries.fromTablet} {
                display: block;
              }
            `}>{format('iiii', date)}</MediumText>
          </td>
        ))}
      </tr>
      <tr>
        {parsedDateList.map((date, index) => (
          <td key={dateList[index]} align="center">
            <MediumText css={css`
              color: ${colors.gray900};
              margin-bottom: 10px;
            `}>{format('dd/MM', date)}</MediumText>
          </td>
        ))}
      </tr>
    </thead>
  );
};
