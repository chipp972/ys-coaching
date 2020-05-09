import { css } from '@emotion/core';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { RedirectLink } from '../../../common/components/Button';
import { FullWidthImage, PreviewCompatibleImage } from '../../../common/components/ImageContainer';
import { Content, ContentProps, PageContent, Section, SubSection } from '../../../common/layout';
import { lightTheme, mediaQueries, theme as darkTheme } from '../../../common/theme';
import { HomeSection as Props } from '../home.context';
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

// eslint-disable-next-line max-lines-per-function, complexity
export const HomeSection: React.FC<Props & { ContentComponent: React.FC<ContentProps> }> = ({
  title,
  theme,
  isTitleVisible,
  sectionImage,
  cards,
  markdownContent,
  cta,
  ContentComponent = Content
}) => {
  const isDarkTheme = theme === 'dark';
  const classes = useStyles({ isDarkTheme });
  return (
    <ThemeProvider key={title} theme={isDarkTheme ? darkTheme : lightTheme}>
      <HomePageSectionTitle title={title} isTitleVisible={isTitleVisible} />
      <PageContent className={classes.container}>
        <Section
          css={css`
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
          `}>
          {!!markdownContent && <SubSection>
            <ContentComponent content={markdownContent} className={classes.markdownContent} />
          </SubSection>}
          {(cards.length > 0 || sectionImage?.image) && <div css={css`
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;

            ${mediaQueries.fromWidescreen} {
              flex-flow: ${sectionImage?.position === 'right' ? 'row' : 'row-reverse'} wrap;
            }
            `}>
            {cards.length > 0 && <SubSection css={css`
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
            </SubSection>}
            <SubSection className={classes.imageContainer}>
              {sectionImage?.image && <PreviewCompatibleImage imageInfo={{ image: sectionImage.image, alt: sectionImage.alt }} />}
            </SubSection>
          </div>}
          {cta?.url && <RedirectLink {...cta} />}
          {sectionImage?.position === 'background' && <FullWidthImage image={sectionImage.image} />}
        </Section>
      </PageContent>
    </ThemeProvider>
  );
};
