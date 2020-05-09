import { css } from '@emotion/core';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { RedirectLink } from '../../../common/components/Button';
import { PreviewCompatibleImage } from '../../../common/components/ImageContainer';
import { Content, ContentProps, PageContent, Section, SubSection } from '../../../common/layout';
import { lightTheme, theme as darkTheme } from '../../../common/theme';
import { HomeSection as Props } from '../home.context';
import { FeatureCard } from './FeatureCard';
import { HomePageSectionTitle } from './HomePageSectionTitle';

const useStyles = makeStyles((theme: Theme) => ({
  subSection: {
    display: 'flex',
    flexFlow: 'column nowrap',
    marginBottom: theme.spacing(2)
  },
  markdownContent: (isDark: boolean) => ({
    color: isDark ? theme.palette.text.primary : lightTheme.palette.text.primary
  })
}));

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
  const classes = useStyles(isDarkTheme);
  return (
    <ThemeProvider key={title} theme={isDarkTheme ? darkTheme : lightTheme}>
      <HomePageSectionTitle title={title} isTitleVisible={isTitleVisible} />
      <PageContent>
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
          {cards.length > 0 && <SubSection css={css`
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: stretch;
            width: 100%;
            `}>
            {cards.map(({ title: cardTitle, ...card }) => (
              <FeatureCard key={cardTitle} title={cardTitle} {...card} />
            ))}
          </SubSection>}
          {cta?.url && <RedirectLink {...cta} />}
        </Section>
        <Section>
          {backgroundImage && <PreviewCompatibleImage image={{ image: backgroundImage }} />}
        </Section>
      </PageContent>
    </ThemeProvider>
  );
};
