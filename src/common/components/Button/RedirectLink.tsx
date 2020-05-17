import { ButtonProps } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { PrimaryButton } from './GhostButton';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing(8)} 0`
  },
  cta: {
    fontSize: '2rem',
    borderWidth: '3px',
    borderColor: theme.palette.primary.main,
    textAlign: 'center',
    wordSpacing: '0.5rem',
    '&:hover': {
      borderWidth: '3px'
    }
  }
}));

type Props = {
  url?: string;
  isInternal?: boolean;
  label?: string;
} & ButtonProps;

export const RedirectLink: React.FC<Props> = ({ className, url, isInternal, label, ...props }) => {
  const { container, cta } = useStyles();

  return (
    <div className={clsx(container, className)}>
      <PrimaryButton {...props} className={cta} url={url} isInternal={isInternal}>
        {label}
      </PrimaryButton>
    </div>
  );
};
