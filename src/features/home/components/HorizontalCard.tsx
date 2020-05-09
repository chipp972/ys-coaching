import { Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { PreviewCompatibleImage } from '../../../common/components/ImageContainer';
import { Card } from '../home.context';

const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 550,
    maxWidth: 550,
    padding: theme.spacing(1),
    margin: theme.spacing(3)
  },
  cardImage: {
    display: 'flex',
    position: 'relative',
    width: '50%',
    height: 'auto',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    marginLeft: theme.spacing(2)
  },
  cardTextContainer: {
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: theme.spacing(4)
  },
  cardTitle: {
    textTransform: 'uppercase',
    fontWeight: 900,
    display: 'block',
    marginBottom: theme.spacing(2)
  }
}));

export const HorizontalCard: React.FC<Partial<Card>> = ({ image, title, text, alt }) => {
  const { cardContainer, cardTitle, cardTextContainer, cardImage } = useStyles();
  return (
    <Paper className={cardContainer} variant="outlined">
      <div className={cardImage}>
        <PreviewCompatibleImage imageInfo={{ image, alt }} />
      </div>
      <div className={cardTextContainer}>
        <Typography className={cardTitle} variant="h6" align="left">
          {title}
        </Typography>
        <Typography variant="body2">
          {text}
        </Typography>
      </div>
    </Paper>
  );
};
