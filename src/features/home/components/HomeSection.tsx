import { css } from '@emotion/core';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { RedirectLink } from '../../../common/components/Button';
import { PreviewCompatibleImage, useFullWidthImageStyle } from '../../../common/components/ImageContainer';
import { HTMLContent, PageContent, Section, SubSection } from '../../../common/layout';
import { lightTheme, mediaQueries, theme as darkTheme } from '../../../common/theme';
import { CardSectionData, HomeSectionData, TextSectionData, TitleSectionData } from '../home.context';
import { FeatureCard } from './FeatureCard';
import { TitleSection } from './TitleSection';

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

const CardSection: React.FC<CardSectionData> = ({ cards, cta, image, imagePosition, text }) => {
  const classes = useStyles({ isDarkTheme: false });
  return (
    <Section>
      {text}
    <div
      css={css`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;

        ${mediaQueries.fromWidescreen} {
          flex-flow: ${imagePosition === 'right' ? 'row' : 'row-reverse'} wrap;
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
              width: ${['left', 'right'].includes(imagePosition) ? '50%' : '100%'};
            }
          `}>
          {cards.map((cardData) => (
            <FeatureCard key={cardData.id} {...cardData} />
          ))}
        </SubSection>
      )}
      <SubSection className={classes.imageContainer}>
        {!!image && <PreviewCompatibleImage imageInfo={image} />}
      </SubSection>
    </div>
    <RedirectLink {...cta} />
    </Section>
  );
};

// eslint-disable-next-line complexity
const TextSection: React.FC<TextSectionData> = ({ text, theme, cta, ctaPosition, image, imagePosition, maxImageHeight, textPosition }) => {
  const isDarkTheme = theme === 'dark';
  const backgroundImage = imagePosition === 'background' && image;
  const { fullWidthImageContainer } = useFullWidthImageStyle({
    image: backgroundImage,
    hasText: true,
    height: maxImageHeight
  });
  const classes = useStyles({ isDarkTheme, textPosition, backgroundImage, height: maxImageHeight });
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <PageContent
        className={clsx(classes.container, {
          [fullWidthImageContainer]: imagePosition === 'background'
        })}>
        <Section
          css={css`
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            ${{
              right: 'width: 50%; margin-left: auto;',
              left: 'width: 50%; margin-right: auto;',
              center: 'text-align: center;'
            }[textPosition] || ''}
          `}>
          {!!text && (
            <SubSection>
              <HTMLContent content={text} className={classes.markdownContent} />
            </SubSection>
          )}
          <RedirectLink {...cta} />
        </Section>
      </PageContent>
    </ThemeProvider>
  );
};

export const NewHomeSection: React.FC<HomeSectionData> = (sectionData) => {
  const { model } = sectionData;
  switch(model.apiKey) {
    case 'title_section':
      return <TitleSection {...sectionData as TitleSectionData} />;
    case 'card_section':
      return <CardSection {...sectionData as CardSectionData} />;
    case 'text_section':
      return <TextSection {...sectionData as TextSectionData} />;
    default:
      return null;
  }
};
