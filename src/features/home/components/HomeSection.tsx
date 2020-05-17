import { css } from '@emotion/core';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { RedirectLink } from '../../../common/components/Button';
import { PreviewCompatibleImage, useFullWidthImageStyle } from '../../../common/components/ImageContainer';
import { Content, ContentProps, PageContent, Section, SubSection } from '../../../common/layout';
import { lightTheme, mediaQueries, theme as darkTheme } from '../../../common/theme';
import { Card, HomeSection as Props, SectionImage } from '../home.context';
import { FeatureCard } from './FeatureCard';
import { HomePageSectionTitle } from './HomePageSectionTitle';

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

type SubsectionProps = {
  cards: Card[];
  sectionImage?: SectionImage;
  hasSectionImage: boolean;
  isDarkTheme: boolean;
};

const HomePageSubsection: React.FC<SubsectionProps> = ({ cards = [], hasSectionImage, sectionImage, isDarkTheme }) => {
  const classes = useStyles({ isDarkTheme });
  return (
    <div
      css={css`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;

        ${mediaQueries.fromWidescreen} {
          flex-flow: ${sectionImage?.position === 'right' ? 'row' : 'row-reverse'} wrap;
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
              width: ${['left', 'right'].includes(sectionImage?.position) ? '50%' : '100%'};
            }
          `}>
          {cards.map(({ title: cardTitle, ...card }) => (
            <FeatureCard key={cardTitle} title={cardTitle} {...card} />
          ))}
        </SubSection>
      )}
      <SubSection className={classes.imageContainer}>
        {hasSectionImage && <PreviewCompatibleImage imageInfo={sectionImage} />}
      </SubSection>
    </div>
  );
};

// eslint-disable-next-line max-lines-per-function, complexity
export const HomeSection: React.FC<Props & { ContentComponent: React.FC<ContentProps> }> = ({
  title,
  theme,
  isTitleVisible,
  sectionImage,
  textPosition,
  cards,
  markdownContent,
  cta,
  ContentComponent = Content
}) => {
  const isDarkTheme = theme === 'dark';
  const backgroundImage = sectionImage?.position === 'background' && sectionImage?.image;
  const hasSectionImage = sectionImage?.position !== 'background' && !!sectionImage?.image;
  const height = sectionImage?.maxHeight;
  const { fullWidthImageContainer } = useFullWidthImageStyle({
    image: backgroundImage,
    hasText: true,
    height
  });
  const classes = useStyles({ isDarkTheme, textPosition, backgroundImage, height });
  return (
    <ThemeProvider key={title} theme={isDarkTheme ? darkTheme : lightTheme}>
      <HomePageSectionTitle title={title} isTitleVisible={isTitleVisible} />
      <PageContent
        className={clsx(classes.container, {
          [fullWidthImageContainer]: sectionImage?.position === 'background'
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
          {!!markdownContent && (
            <SubSection>
              <ContentComponent content={markdownContent} className={classes.markdownContent} />
            </SubSection>
          )}
          {(cards.length > 0 || hasSectionImage) && (
            <HomePageSubsection
              cards={cards}
              hasSectionImage={hasSectionImage}
              isDarkTheme={isDarkTheme}
              sectionImage={sectionImage}
            />
          )}
          {cta?.url && <RedirectLink {...cta} />}
        </Section>
      </PageContent>
    </ThemeProvider>
  );
};
