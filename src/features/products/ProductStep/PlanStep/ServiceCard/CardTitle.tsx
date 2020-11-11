import { css } from '@emotion/core';
import React from 'react';
import { colors } from '../../../../../common/theme';

type Props = {
  title: string;
};

export const CardTitle: React.FC<Props> = ({ title }) => (
  <div
    css={css`
      padding: 30px;
      position: relative;
      text-align: center;
    `}>
    <span
      css={css`
        color: ${colors.gray100};
        font-family: Noto Sans JP;
        padding-bottom: 30px;
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        width: 100%;

        :after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          width: 80%;
          height: 3px;
          background-color: ${colors.gray100};
        }
      `}>
      {title}
    </span>
  </div>
);
