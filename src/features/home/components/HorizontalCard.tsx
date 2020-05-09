import { Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { PreviewCompatibleImage } from '../../../common/components/ImageContainer';
import { mediaQueries } from '../../../common/theme';
import { Card } from '../home.context';

const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 0,
    flexShrink: 0,
    width: 300,
    padding: theme.spacing(1),
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
    },
    [mediaQueries.fromDesktop]: {
      width: '55rem'
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

export const HorizontalCard: React.FC<Partial<Card>> = ({ image, title, text, alt }) => {
  const { cardContainer, cardTitle, cardTextContainer, cardImage } = useStyles();
  return (
    <Paper className={cardContainer} variant="outlined">
      <div className={cardImage}>
        <PreviewCompatibleImage imageInfo={{ image, alt }} />
      </div>
      <div className={cardTextContainer}>
        <Typography className={cardTitle} variant="h6">
          {title}
        </Typography>
        <Typography variant="body2">
          {text}
        </Typography>
      </div>
    </Paper>
  );
};