import { css } from '@emotion/core';
import React from 'react';
import { colors, mediaQueries, MediumText } from '../../theme';
import { borderSize, stepSize } from './Breadcrumb.constant';
import { BreadcrumbStep } from './BreadcrumbStep';

const MobileLabel = ({ label }) => (
  <MediumText
    css={css`
      text-align: center;
      font-weight: 500;
      margin-bottom: 15px;

      ${mediaQueries.fromTablet} {
        display: none;
      }
    `}>
    {label}
  </MediumText>
);

const BreadcrumbStepList: React.FC = ({ children }) => (
  <div
    aria-label="Breadcrumb"
    css={css`
      display: flex;
      flex: 0 0 100%;
      flex-flow: row nowrap;
      position: relative;

      ${mediaQueries.fromTablet} {
        align-items: baseline;
      }

      &:before {
        content: '';
        background-color: ${colors.white};
        top: calc((${stepSize.mobile} / 2) - ${borderSize.mobile} / 2);
        height: ${borderSize.mobile};
        left: 12%;
        position: absolute;
        width: 76%;

        ${mediaQueries.fromTablet} {
          height: ${borderSize.fromTablet};
          top: calc(
            (${stepSize.fromTablet} / 2) - ${borderSize.fromTablet} / 2
          );
        }
      }
    `}>
    {children}
  </div>
);

type Props = {
  labelList: string[];
  currentStepIndex?: number;
  onClick?: (stepIndex: number) => void;
};

export const Breadcrumb: React.FC<Props> = ({
  labelList,
  currentStepIndex = 0
}) => (
  <div
    css={css`
      background-color: ${colors.transparent};
      display: flex;
      flex-flow: column nowrap;
      min-height: 100px;
      padding: 50px 20px;
      position: relative;

      ${mediaQueries.fromTablet} {
        flex-direction: row;
        min-height: 100px;
      }
    `}>
    <MobileLabel aria-label="Current step" label={labelList[currentStepIndex]} />
    <BreadcrumbStepList>
      {labelList.map((label, index) => (
        <BreadcrumbStep
          key={index}
          label={label}
          stepIndex={index}
          currentStepIndex={currentStepIndex}
        />
      ))}
    </BreadcrumbStepList>
  </div>
);
