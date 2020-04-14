import React from 'react';
import { css } from '@emotion/core';
import { colors, mediaQueries } from '../../theme';
import { callOnEnterOrSpaceKey } from '@chipp972/accessibility';

type Props = {
  label: string;
  selectTab: () => void;
  isSelected: boolean;
};

export const TabItem: React.FC<Props> = ({ label, selectTab, isSelected }) => (
  <li
    tabIndex={isSelected ? -1 : 0}
    css={css`
      position: relative;
      padding-bottom: 1rem;
      margin-right: 1rem;
      text-align: center;
      cursor: pointer;
      outline: none;

      :hover,
      :focus {
        :after {
          transition: width 0.15s ease;
          width: 100%;
        }
      }
      :after {
        content: '';
        position: absolute;
        height: 1px;
        width: 0;
        background-color: ${colors.gray50};
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
      }

      ${mediaQueries.fromTablet} {
        padding-bottom: 2.5rem;
        margin-right: 5rem;
      }

      ${mediaQueries.fromDesktop} {
        outline: initial;
      }

      :last-of-type {
        margin-right: 0;
      }

      ${isSelected &&
        `
      color: ${colors.crimson200};

      :after {
        width: 100%;
        background-color: ${colors.crimson200};
      }
    `}
    `}
    onKeyDown={callOnEnterOrSpaceKey(selectTab)}
    onClick={selectTab}>
    {label}
  </li>
);
