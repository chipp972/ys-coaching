import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { colors } from '../colors';
import { mediaQueries } from '../mediaqueries';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    textAlign: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  title: {
    color: colors.white
  },
  subtitle: {
    color: colors.white
  }
});

const Title = styled.h1`
  color: ${colors.white};
  font-size: 34px;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 2px;
  text-transform: uppercase;

  ${mediaQueries.fromTablet} {
    font-size: 38px;
  }
`;

const SubTitle = styled.h2`
  color: ${colors.white};
  font-size: 28px;
  font-weight: 100;
  line-height: 1.1;
  letter-spacing: 2px;
  text-transform: uppercase;

  ${mediaQueries.fromTablet} {
    font-size: 32px;
  }
`;

type Props = {
  title: string;
  subtitle?: string;
};

export const PageTitle: React.FC<Props> = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h2" component="h1">
        {title}
      </Typography>
      {subtitle && (
        <Typography className={classes.subtitle} variant="h4" component="h2">
          {subtitle}
        </Typography>
      )}
    </div>
  );
};
