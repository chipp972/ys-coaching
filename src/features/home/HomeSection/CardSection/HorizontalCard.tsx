import { Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import React from 'react';
import { HTMLContent } from '../../../../common/layout';
import { useI18n } from '../../../../common/layout/Multilanguage';
import { mediaQueries } from '../../../../common/theme';
import { Card } from '../../home.context';

const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 0,
    flexShrink: 0,
    width: 300,
    maxWidth: '55rem',
    padding: `${theme.spacing(3)} ${theme.spacing(1)}`,
    margin: theme.spacing(3),
    [mediaQueries.fromTablet]: {
      flexDirection: 'row',
      width: '100%',
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      }
    }
  },
  cardImage: {
    display: 'flex',
    position: 'relative',
    width: '50%',
    height: 'auto',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    [mediaQueries.fromTablet]: {
      marginLeft: theme.spacing(2)
    }
  },
  cardTextContainer: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    padding: theme.spacing(4)
  },
  cardTitle: {
    textTransform: 'uppercase',
    fontWeight: 900,
    display: 'block',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    [mediaQueries.fromTablet]: {
      textAlign: 'left'
    }
  }
}));

export const HorizontalCard: React.FC<Partial<Card>> = ({ image, _allTextLocales, _allTitleLocales }) => {
  const { cardContainer, cardTitle, cardTextContainer, cardImage } = useStyles();
  const { getLocalizedContent } = useI18n();
  const title = getLocalizedContent(_allTitleLocales);
  const text = getLocalizedContent(_allTextLocales);
  return (
    <Paper className={cardContainer} variant="outlined">
      <div className={cardImage}>
        <Img {...image} />
      </div>
      <div className={cardTextContainer}>
        <Typography className={cardTitle} variant="h6">
          {title}
        </Typography>
        <HTMLContent content={text} />
      </div>
    </Paper>
  );
};
