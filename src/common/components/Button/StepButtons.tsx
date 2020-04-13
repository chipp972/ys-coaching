import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { ChevronRight, ChevronLeft } from 'react-feather';
import { css } from '@emotion/core';
import { mediaQueries } from '../../theme';

const NextStepButton: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <Button
    {...props}
    variant="contained"
    color="secondary"
    className={className}
    size="large"
    endIcon={<ChevronRight />}>
    {children}
  </Button>
);

const PrevStepButton: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <Button
    {...props}
    variant="outlined"
    color="secondary"
    className={className}
    size="large"
    startIcon={<ChevronLeft />}>
    {children}
  </Button>
);

type Props = {
  className?: string;
  prevStepName: React.ReactNode;
  nextStepName: React.ReactNode;
  prevStepClassName?: string;
  nextStepClassName?: string;
  onNextStepClick?: () => void;
  onPrevStepClick?: () => void;
};

export const StepButtons: React.FC<Props> = ({
  className,
  prevStepClassName,
  nextStepClassName,
  prevStepName,
  nextStepName,
  onNextStepClick,
  onPrevStepClick
}) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={css`
        display: flex;
        flex-flow: column nowrap;

        ${mediaQueries.fromTablet} {
          flex-flow: row-reverse nowrap;
          justify-content: space-between;
        }
      `}>
      <NextStepButton
        type="submit"
        style={{ marginBottom: theme.spacing(1) }}
        className={nextStepClassName}
        onClick={onNextStepClick}>
        {nextStepName}
      </NextStepButton>
      <PrevStepButton
        type="reset"
        style={{ marginBottom: theme.spacing(1) }}
        className={prevStepClassName}
        onClick={onPrevStepClick}>
        {prevStepName}
      </PrevStepButton>
    </div>
  );
};
