import { callOnEnterKey } from '@chipp972/accessibility';
import { css } from '@emotion/core';
import { Button, ButtonProps } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { mediaQueries } from '../../theme';

export const NextStepButton: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <Button
    variant="contained"
    color="secondary"
    className={className}
    size="large"
    endIcon={<ChevronRight aria-hidden="true" />}
    {...props}>
    {children}
  </Button>
);

export const PrevStepButton: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <Button
    variant="outlined"
    color="secondary"
    className={className}
    size="large"
    startIcon={<ChevronLeft aria-hidden="true" />}
    {...props}>
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
  prevStepName = '',
  nextStepName = '',
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
        onKeyDown={callOnEnterKey(onNextStepClick)}
        onClick={onNextStepClick}>
        {nextStepName}
      </NextStepButton>
      <PrevStepButton
        type="reset"
        style={{ marginBottom: theme.spacing(1) }}
        className={prevStepClassName}
        onKeyDown={callOnEnterKey(onPrevStepClick)}
        onClick={onPrevStepClick}>
        {prevStepName}
      </PrevStepButton>
    </div>
  );
};
