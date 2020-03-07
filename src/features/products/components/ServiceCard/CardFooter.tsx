import React from 'react';
import { css } from '@emotion/core';
import { colors, fontFamilies } from '../../../../common/theme';

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
        font-size: 3rem;
        font-weight: 800;
        color: ${colors.black};
        font-family: ${fontFamilies.notoSans};
      `}>
      {price}€
    </span>
    {frequency && (
      <span
        css={css`
          color: ${colors.black};
          margin-left: 1rem;
        `}>
        / {frequency}
      </span>
    )}
  </section>
);
