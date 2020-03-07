import React from 'react';
import { css } from '@emotion/core';
import { colors, mediaQueries, ExtraSmallText } from '../../theme';
import DoneIcon from '../../../img/icon/check.inline.svg';
import CurrentStepIcon from '../../../img/icon/refresh-cw.inline.svg';
import { stepSize, borderSize } from './Breadcrumb.constant';

const getIconStyle = ({
  isLightBackground
}: {
  isLightBackground: boolean;
}) => css`
  width: calc(${stepSize.mobile} / 2);
  height: calc(${stepSize.mobile} / 2);
  position: absolute;
  top: calc(50% - ${stepSize.mobile} / 4);
  left: calc(50% - ${stepSize.mobile} / 4);
  stroke: ${isLightBackground ? colors.black : colors.white};
  stroke-width: ${borderSize.fromTablet};

  ${mediaQueries.fromTablet} {
    width: calc(${stepSize.fromTablet} / 2);
    height: calc(${stepSize.fromTablet} / 2);
    top: calc(50% - ${stepSize.fromTablet} / 4);
    left: calc(50% - ${stepSize.fromTablet} / 4);
  }
`;

type SharedProps = {
  isCurrentStep: boolean;
  isClickable: boolean;
  onClick?: () => void;
};

const DesktopLabel: React.FC<SharedProps & { label: string }> = ({
  label,
  isCurrentStep,
  isClickable,
  onClick
}) => (
  <ExtraSmallText
    onClick={onClick}
    css={css`
      display: none;
      font-weight: ${isCurrentStep ? '500' : '400'};
      text-align: center;
      margin-top: 10px;
      cursor: ${isClickable ? 'pointer' : 'auto'};

      ${mediaQueries.fromTablet} {
        display: block;
      }
    `}>
    {label}
  </ExtraSmallText>
);

const CircleStep: React.FC<SharedProps> = ({
  isCurrentStep,
  isClickable,
  onClick
}) => (
  <span
    onClick={onClick}
    css={css`
      background-color: ${isCurrentStep ? colors.white : colors.black};
      border: ${borderSize.mobile} solid ${colors.white};
      border-radius: 50%;
      color: ${colors.white};
      width: ${stepSize.mobile};
      height: ${stepSize.mobile};
      position: relative;
      cursor: ${isClickable ? 'pointer' : 'auto'};

      ${mediaQueries.fromTablet} {
        border-width: ${borderSize.fromTablet};
        width: ${stepSize.fromTablet};
        height: ${stepSize.fromTablet};
      }
    `}>
    {isClickable && (
      <DoneIcon css={getIconStyle({ isLightBackground: false })} />
    )}
    {isCurrentStep && (
      <CurrentStepIcon css={getIconStyle({ isLightBackground: true })} />
    )}
  </span>
);

type Props = {
  label: string;
  currentStepIndex: number;
  stepIndex: number;
  onClick?: (stepIndex: number) => void;
};

export const BreadcrumbStep: React.FC<Props> = ({
  label,
  currentStepIndex,
  stepIndex,
  onClick
}) => {
  const isClickable = currentStepIndex > stepIndex;
  const sharedProps = {
    isClickable,
    isCurrentStep: currentStepIndex === stepIndex,
    onClick: () => isClickable && onClick && onClick(stepIndex)
  };
  return (
    <div
      css={css`
        align-items: center;
        display: flex;
        flex: 1;
        flex-flow: column nowrap;
        justify-content: flex-end;
        margin-right: 10px;
        position: relative;
      `}>
      <CircleStep {...sharedProps} />
      <DesktopLabel label={label} {...sharedProps} />
    </div>
  );
};
