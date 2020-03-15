import React from 'react';
import { css } from '@emotion/core';
import { ActiveText, MediumText, mediaQueries } from '../../theme';
import { colors } from '../../theme/colors';

type Props = {
  label: React.ReactNode;
  name: string;
  value?: string;
  isDisabled?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({
  label,
  name,
  isDisabled,
  value,
  ...props
}) => (
  <>
    <label
      css={css`
        margin-bottom: 10px;
        cursor: pointer;

        ${mediaQueries.fromTablet} {
          margin-bottom: 20px;
        }
      `}
      htmlFor={name}>
      <ActiveText>{label}</ActiveText>
    </label>
    {isDisabled ? (
      <MediumText>{value}</MediumText>
    ) : (
      <input
        css={css`
          border: none;
          border-radius: 5px;
          padding: 15px;

          ::placeholder {
            color: ${colors.gray700};
          }

          ${mediaQueries.fromTablet} {
            padding: 20px;
            width: 400px;
          }
        `}
        {...props}
        disabled={isDisabled}
        name={name}
        id={name}
      />
    )}
  </>
);
