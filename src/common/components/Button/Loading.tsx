import { CircularProgress } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import clsx from 'clsx';
import React from 'react';
import { Case, Switch } from 'react-case-when';
import { slideDownAnimation } from '../../theme/animations';
import { CtaProps, RedirectLink } from './RedirectLink';

export enum LoadingStatus {
  NOT_STARTED = 'NOT_STARTED',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

const useStyles = makeStyles((theme: Theme) => ({
  sendButtonContainer: {
    margin: `${theme.spacing(4)} auto`,
    textAlign: 'center'
  },
  '@keyframes slideDown': slideDownAnimation,
  alertContainer: {
    animation: '$slideDown 0.5s ease-out'
  }
}));

type Props = {
  status: LoadingStatus;
  errorMessage: string;
  successRedirectLink?: CtaProps;
  successMessage?: string;
};

export const LoadingButton: React.FC<Props> = ({
  children,
  status,
  successRedirectLink,
  successMessage,
  errorMessage
}) => {
  const classes = useStyles();
  return (
    <>
      <Case when={[LoadingStatus.NOT_STARTED, LoadingStatus.ERROR].includes(status)}>
        {children}
      </Case>

      <div className={clsx(classes.sendButtonContainer, classes.alertContainer)}>
        <Switch>
          <Case when={status === LoadingStatus.PENDING}>
            <CircularProgress color="primary" />
          </Case>

          <Case when={status === LoadingStatus.SUCCESS}>
            <Alert variant="filled" severity="success">
              {successMessage}
            </Alert>

            {successRedirectLink?.url && <RedirectLink {...successRedirectLink} />}
          </Case>

          <Case when={status === LoadingStatus.ERROR}>
            <Alert variant="filled" severity="error">
              {errorMessage}
            </Alert>
          </Case>
        </Switch>
      </div>
    </>
  );
};
