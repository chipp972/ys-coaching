import { Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { PreviewCompatibleImage } from '../../../common/components/ImageContainer';
import { GatsbyImage } from '../../../common/helpers/gatsby';

export type FeatureCardProps = {
  image: GatsbyImage;
  title: string;
  text: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 300,
    maxWidth: 400,
    padding: theme.spacing(1),
    margin: theme.spacing(3)
  },
  cardImage: {
    display: 'block',
    position: 'relative',
    width: '20%',
    height: 'auto',
    left: '40%',
    paddingTop: theme.spacing(1)
  },
  cardContent: {
    padding: theme.spacing(4)
  },
  cardTitle: {
    textTransform: 'uppercase',
    textAlign: 'center',
    display: 'block',
    marginTop: theme.spacing(2)
  }
}));

export const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, text }) => { 
  const { cardContainer, cardTitle, cardContent, cardImage } = useStyles();
  return (
  <Paper className={cardContainer} elevation={3}>
    <div className={cardImage}>
      <PreviewCompatibleImage imageInfo={{ image }} />
    </div>
    <Typography className={cardTitle} variant="h6" >{title}</Typography>
    <Typography className={cardContent} variant="body2">{text}</Typography>
  </Paper>
  );
 };
