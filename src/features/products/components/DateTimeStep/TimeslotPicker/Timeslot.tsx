import React from 'react';
import { css } from '@emotion/core';
import format from 'date-fns/fp/format';
import { MediumText, colors, mediaQueries } from '../../../../../common/theme';

const formatHours = format('HH:mm');

type Props = {
  value: Date;
  onClick: (date: Date) => void;
};

export const Timeslot: React.FC<Props> = ({ value, onClick }) => (
  <button onClick={() => onClick(value)} css={css`
    border: none;
    outline: none;
    background-color: ${colors.crimson50};
    cursor: pointer;
    padding: 15px 25px;
    border-radius: 20px;

    ${mediaQueries.fromTablet} {
      padding: 20px 30px;
    }

    :hover {
      background-color: ${colors.crimson100};
    }

    :focus {
      background-color: ${colors.crimson200};
    }
  `}>
    <MediumText css={css`
      color: ${colors.black};
      font-weight: 600;
    `}>{formatHours(value)}</MediumText>
  </button>
);
