import { Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby';
import React from 'react';

type Props = {
  type?: 'reset' | 'button' | 'submit';
  theme?: 'crimson' | 'light';
  size?: 'medium' | 'big';
  className?: string;
  to?: string;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

const useStyles = makeStyles((theme: Theme) => ({
  primaryButton: {
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}));

export const PrimaryButton: React.FC<Props> = ({ to, className = '', children, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      component={!!to ? Link : 'button'}
      to={to}
      variant="outlined"
      color="primary"
      className={`${classes.primaryButton} ${className}`}
      size="large">
      {children}
    </Button>
  );
};
