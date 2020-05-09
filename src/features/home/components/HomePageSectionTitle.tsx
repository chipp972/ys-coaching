import { Container, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

type Props = {
  title: string;
  isTitleVisible: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: `${theme.spacing(10)} 0`,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText
  }
}));

/**
 * Section without side padding for content that should be displayed accross
 * the full screen like images.
 */
export const HomePageSectionTitle: React.FC<Props> = ({ title, isTitleVisible }) => {
  const { container } = useStyles();
  return isTitleVisible ? (
    <Container className={container} disableGutters maxWidth={false}>
      <Typography variant="h2" align="center">{title}</Typography>
    </Container>
  ) : null;
};
