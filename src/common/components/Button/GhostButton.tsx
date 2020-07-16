import { Button, ButtonProps, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import { fadeInAnimation } from '../../theme/animations';

type Props = {
  type?: 'reset' | 'button' | 'submit';
  className?: string;
  isInternal?: boolean;
  url?: string;
} & ButtonProps;

const useStyles = makeStyles((theme: Theme) => ({
  '@keyframes fadeIn': fadeInAnimation,
  primaryButton: {
    animation: '$fadeIn 1s ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}));

const getProps = ({ url, isInternal, type }: Partial<Props>) => {
  if (isInternal) {
    return {
      component: Link,
      to: url.startsWith('/') ? url : `/${url}`
    };
  }
  if (!!url && !isInternal) {
    return {
      component: 'a',
      href: url,
      target: '_blank'
    };
  }
  return {
    component: 'button',
    type
  };
};

export const PrimaryButton: React.FC<Props> = ({ url, isInternal, className, children, type = 'button', ...props }) => {
  const classes = useStyles();
  return (
    <Button
      {...getProps({ url, isInternal, type })}
      variant="outlined"
      color="primary"
      className={clsx(classes.primaryButton, className)}
      size="large"
      {...props}>
      {children}
    </Button>
  );
};
