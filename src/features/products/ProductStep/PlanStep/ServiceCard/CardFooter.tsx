import { css } from '@emotion/core';
import React from 'react';
import { colors } from '../../../../../common/theme';

type Props = {
  frequency?: string;
  price: string | number;
};

export const CardFooter: React.FC<Props> = ({ frequency, price }) => (
  <section
    css={css`
      margin-top: auto;
      background-color: ${colors.gray100};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 10px;
      border-radius: 0 0 5px 5px;
    `}>
    <span
      css={css`
        text-align: center;
        font-size: 4.8rem;
        font-weight: 800;
        color: ${colors.black};
      `}>
      {price}€
    </span>
    {frequency && (
      <span
        css={css`
          color: ${colors.black};
          margin-left: 1.6rem;
        `}>
        / {frequency}
      </span>
    )}
  </section>
);
