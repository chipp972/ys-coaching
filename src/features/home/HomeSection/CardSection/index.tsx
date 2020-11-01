import { css } from '@emotion/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import React from 'react';
import { RedirectLink } from '../../../../common/components/Button';
import { HTMLContent, PageContent, Section, SubSection } from '../../../../common/layout';
import { lightTheme, mediaQueries } from '../../../../common/theme';
import { Card, CardSectionData, CardType, ImagePosition } from '../../home.context';
import { HorizontalCard } from './HorizontalCard';
import { VerticalCard } from './VerticalCard';

const FeatureCard: React.FC<Card> = ({ cardType, ...props }) => cardType === CardType.vertical
  ? <VerticalCard {...props} />
  : <HorizontalCard {...props} />;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    position: 'relative'
  },
  imageContainer: {
    width: '100%',
    [mediaQueries.fromWidescreen]: {
      width: '50%'
    }
  },
  subSection: {
    display: 'flex',
    flexFlow: 'column nowrap',
    marginBottom: theme.spacing(2)
  },
  markdownContent: ({ isDarkTheme }: { isDarkTheme: boolean }) => ({
    color: isDarkTheme ? theme.palette.text.primary : lightTheme.palette.text.primary
  })
}));

export const CardSection: React.FC<CardSectionData> = ({ cards, cta, image, imagePosition, text }) => {
  const classes = useStyles({ isDarkTheme: false });
  return (
    <PageContent className={classes.container}>
      <Section>
        <SubSection css={css`
          text-align: center;
        `}>
          <HTMLContent content={text} />
        </SubSection>
        <div
          css={css`
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;

            ${mediaQueries.fromWidescreen} {
              flex-flow: ${imagePosition === ImagePosition.right ? 'row' : 'row-reverse'} wrap;
            }
          `}>
          {cards.length > 0 && (
            <SubSection
              css={css`
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: stretch;
                width: 100%;

                ${mediaQueries.fromWidescreen} {
                  width: ${[ImagePosition.left, ImagePosition.right].includes(imagePosition) ? '50%' : '100%'};
                }
              `}>
              {cards.map((cardData) => (
                <FeatureCard key={cardData.id} {...cardData} />
              ))}
            </SubSection>
          )}
          <SubSection className={classes.imageContainer}>
            {!!image && <Img {...image} />}
          </SubSection>
        </div>
        <RedirectLink {...cta} />
      </Section>
    </PageContent>
  );
};
