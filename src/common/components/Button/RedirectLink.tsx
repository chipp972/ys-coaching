import { ButtonProps } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { PrimaryButton } from './GhostButton';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: `${theme.spacing(8)} 0 ${theme.spacing(5)} 0`
  },
  cta: {
    fontSize: '3rem',
    borderWidth: '3px',
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

export const RedirectLink: React.FC<Props> = ({ url, isInternal, label, ...props }) => {
  const { container, cta } = useStyles();

  return (
    <div className={container}>
      <PrimaryButton {...props} className={cta} url={url} isInternal={isInternal}>
        {label}
      </PrimaryButton>
    </div>
  );
};
