import { Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import React from 'react';
import { HTMLContent } from '../../../../common/layout';
import { useI18n } from '../../../../common/layout/Multilanguage';
import { Card } from '../../home.context';

const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 300,
    maxWidth: 300,
    padding: theme.spacing(1),
    margin: theme.spacing(3)
  },
  cardImage: {
    display: 'block',
    position: 'relative',
    width: '50%',
    height: 'auto',
    left: '25%',
    paddingTop: theme.spacing(3)
  },
  cardContent: {
    padding: theme.spacing(4),
    textAlign: 'center'
  },
  cardTitle: {
    textTransform: 'uppercase',
    fontWeight: 900,
    display: 'block',
    marginBottom: theme.spacing(2)
  }
}));

export const VerticalCard: React.FC<Partial<Card>> = ({ image, _allTextLocales, _allTitleLocales }) => {
  const { cardContainer, cardTitle, cardContent, cardImage } = useStyles();
  const { getLocalizedContent } = useI18n();
  const title = getLocalizedContent(_allTitleLocales);
  const text = getLocalizedContent(_allTextLocales);

  return (
    <Paper className={cardContainer} elevation={3} variant="elevation">
      <div className={cardImage}>
        <Img {...image} />
      </div>
      <div className={cardContent}>
        <Typography className={cardTitle} variant="h6" align="center">
          {title}
        </Typography>
        <HTMLContent content={text} />
      </div>
    </Paper>
  );
};
