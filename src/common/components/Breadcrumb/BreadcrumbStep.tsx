import React from 'react';
import { css } from '@emotion/core';
import { colors, mediaQueries, ExtraSmallText, animation } from '../../theme';
import { Check as DoneIcon, RefreshCw as CurrentStepIcon } from 'react-feather';
import { stepSize, borderSize } from './Breadcrumb.constant';

const getIconStyle = ({
  isLightBackground = false,
  isCurrentStep = false
}: {
  isLightBackground?: boolean;
  isCurrentStep?: boolean;
} = {}) => css`
  width: calc(${stepSize.mobile} / 2);
  height: calc(${stepSize.mobile} / 2);
  position: absolute;
  top: calc(50% - ${stepSize.mobile} / 4);
  left: calc(50% - ${stepSize.mobile} / 4);
  stroke: ${isLightBackground ? colors.black : colors.white};
  stroke-width: ${borderSize.fromTablet};
  ${isCurrentStep && css`animation: ${animation.spin} 2s ease infinite;`}

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
    className="desktop-label"
    css={css`
      display: none;
      font-weight: ${isCurrentStep ? '500' : '400'};
      text-align: center;
      margin-top: 1rem;
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
    tabIndex={isClickable ? 0 : -1}
    onClick={onClick}
    className="circle-step"
    css={css`
      background-color: ${colors.black};
      border: ${borderSize.mobile} solid ${colors.white};
      border-radius: 50%;
      color: ${colors.white};
      width: ${stepSize.mobile};
      height: ${stepSize.mobile};
      position: relative;
      cursor: ${isClickable ? 'pointer' : 'auto'};
      outline: none;

      ${mediaQueries.fromTablet} {
        border-width: ${borderSize.fromTablet};
        width: ${stepSize.fromTablet};
        height: ${stepSize.fromTablet};
      }
      ${mediaQueries.fromDesktop} {
        outline: initial;
      }
    `}>
    {isClickable && (
      <DoneIcon className="step-icon" css={getIconStyle()} />
    )}
    {isCurrentStep && (
      <CurrentStepIcon className="step-icon" css={getIconStyle({ isCurrentStep: true })} />
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

        ${isClickable && `:hover {
          .circle-step {
            border-color: ${colors.crimson200};
          }

          .step-icon {
            stroke: ${colors.crimson200};
          }

          .desktop-label {
            color: ${colors.crimson200};
          }
        }`}
      `}>
      <CircleStep {...sharedProps} />
      <DesktopLabel label={label} {...sharedProps} />
    </div>
  );
};
