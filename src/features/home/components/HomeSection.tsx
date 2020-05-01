import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { SubSection } from '../../../common/layout';

const useStyles = makeStyles((theme: Theme) => ({
  subSection: {
    display: 'flex',
    flexFlow: 'column nowrap',
    marginBottom: theme.spacing(2)
  }
}));


export const HomeSection = ({ title, content }) => {
  const { subSection } = useStyles();
  return (
    <SubSection className={subSection}>
      <Typography variant="h3">
        {title}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </SubSection>
  );
};
