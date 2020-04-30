import { css } from '@emotion/core';
import { Typography } from '@material-ui/core';
import React from 'react';
import { Check as DoneIcon, RefreshCw as CurrentStepIcon } from 'react-feather';
import { animation, colors, mediaQueries } from '../../theme';
import { borderSize, stepSize } from './Breadcrumb.constant';

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
  ${isCurrentStep &&
  css`
    animation: ${animation.spin} 2s ease infinite;
  `}

  ${mediaQueries.fromTablet} {
    width: calc(${stepSize.fromTablet} / 2);
    height: calc(${stepSize.fromTablet} / 2);
    top: calc(50% - ${stepSize.fromTablet} / 4);
    left: calc(50% - ${stepSize.fromTablet} / 4);
  }
`;

type SharedProps = {
  isCurrentStep: boolean;
  isDoneStep: boolean;
};

const DesktopLabel: React.FC<SharedProps & { label: string }> = ({
  label,
  isCurrentStep,
  isDoneStep
}) => (
  <Typography
    variant="body2"
    aria-label={isCurrentStep ? 'Current step' : 'Step'}
    className="desktop-label"
    css={css`
      display: none;
      font-weight: ${isCurrentStep ? '500' : '400'};
      text-align: center;
      margin-top: 1rem;
      opacity: ${!isDoneStep && !isCurrentStep ? 0.5 : 1};

      ${mediaQueries.fromTablet} {
        display: block;
      }
    `}>
    {label}
  </Typography>
);

const BreadcrumbIcon: React.FC<SharedProps> = ({ isCurrentStep, isDoneStep }) => {
  if (isCurrentStep) {
    return (
      <CurrentStepIcon
        aria-hidden="true"
        className="step-icon"
        css={getIconStyle({ isCurrentStep: true })}
      />
    );
  }
  if (isDoneStep) {
    return <DoneIcon aria-hidden="true" className="step-icon" css={getIconStyle()} />;
  }
  return null;
};

const BreadcrumbStepIconContainer: React.FC<SharedProps> = (props) => (
  <span
    aria-hidden="true"
    className="circle-step"
    css={css`
      background-color: ${colors.black};
      border: ${borderSize.mobile} solid ${colors.white};
      border-radius: 50%;
      color: ${colors.white};
      width: ${stepSize.mobile};
      height: ${stepSize.mobile};
      position: relative;

      ${mediaQueries.fromTablet} {
        border-width: ${borderSize.fromTablet};
        width: ${stepSize.fromTablet};
        height: ${stepSize.fromTablet};
      }
    `}>
    {}
    <BreadcrumbIcon {...props} />
  </span>
);

type Props = {
  label: string;
  currentStepIndex: number;
  stepIndex: number;
};

export const BreadcrumbStep: React.FC<Props> = ({ label, currentStepIndex, stepIndex }) => {
  const isDoneStep = currentStepIndex > stepIndex;
  const sharedProps = {
    isDoneStep,
    isCurrentStep: currentStepIndex === stepIndex
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
      <BreadcrumbStepIconContainer {...sharedProps} />
      <DesktopLabel label={label} {...sharedProps} />
    </div>
  );
};
