import { Container, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { mediaQueries } from '../../../common/theme';

type Props = {
  title: string;
  isTitleVisible: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: `${theme.spacing(7)} 0`,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    position: 'relative',
    boxShadow: `${theme.shadows[24]}, ${theme.shadows[4]}`,
    zIndex: theme.zIndex.mobileStepper,
    [mediaQueries.fromTablet]: {
      padding: `${theme.spacing(10)} 0`
    }
  },
  text: {
    margin: 'auto',
    maxWidth: '95%',
    [mediaQueries.fromTablet]: {
      maxWidth: '80%'
    }
  }
}));

/**
 * Section without side padding for content that should be displayed accross
 * the full screen like images.
 */
export const HomePageSectionTitle: React.FC<Props> = ({ title, isTitleVisible }) => {
  const { container, text } = useStyles();
  return isTitleVisible ? (
    <Container className={container} disableGutters maxWidth={false}>
      <Typography className={text} variant="h2" align="center">{title}</Typography>
    </Container>
  ) : null;
};
