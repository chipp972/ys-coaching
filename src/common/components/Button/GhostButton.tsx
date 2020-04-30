import { Button, ButtonProps, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';

type Props = {
  type?: 'reset' | 'button' | 'submit';
  className?: string;
  isInternal?: boolean;
  url?: string;
} & ButtonProps;

const useStyles = makeStyles((theme: Theme) => ({
  primaryButton: {
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}));

const getProps = ({ url, isInternal }) => {
  if (isInternal) {
    return {
      component: Link,
      to: url
    };
  }
  if (!!url && !isInternal) {
    return {
      component: 'a',
      href: url,
      target: '_blank'
    };
  }
  return 'button';
};

export const PrimaryButton: React.FC<Props> = ({ url, isInternal, className, children, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      {...getProps({ url, isInternal })}
      variant="outlined"
      color="primary"
      className={clsx(classes.primaryButton, className)}
      size="large"
      {...props}>
      {children}
    </Button>
  );
};
