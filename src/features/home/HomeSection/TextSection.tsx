import { css } from '@emotion/core';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { RedirectLink } from '../../../common/components/Button';
import { useFullWidthImageStyle } from '../../../common/components/ImageContainer';
import { HTMLContent, PageContent, Section, SubSection } from '../../../common/layout';
import { lightTheme, mediaQueries, theme as darkTheme } from '../../../common/theme';
import { ImagePosition, Position, TextSectionData } from '../home.context';

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
  }),
  cta: ({ ctaPosition }: { ctaPosition: string }) => {
    if (ctaPosition === Position.left) {
      return { marginRight: 'auto' };
    }
    return ctaPosition === Position.right
      ? { marginLeft: 'auto' }
      : {};
  }
}));

// eslint-disable-next-line complexity
export const TextSection: React.FC<TextSectionData> = ({ text, theme, cta, ctaPosition, image, imagePosition, maxImageHeight, textPosition }) => {
  const isDarkTheme = theme === 'dark';
  const backgroundImage = imagePosition === ImagePosition.background && image;
  const { fullWidthImageContainer } = useFullWidthImageStyle({
    image: backgroundImage,
    hasText: true,
    height: maxImageHeight
  });
  const classes = useStyles({ isDarkTheme, textPosition, backgroundImage, height: maxImageHeight, ctaPosition });
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <PageContent
        className={clsx(classes.container, {
          [fullWidthImageContainer]: image && imagePosition === ImagePosition.background
        })}>
        <Section
          css={css`
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            ${!!image
              ? {
                right: 'width: 50%; margin-left: auto;',
                left: 'width: 50%; margin-right: auto;',
                center: 'text-align: center;'
              }[textPosition] : ''}
          `}>
          <SubSection>
            <HTMLContent content={text} className={classes.markdownContent} />
          </SubSection>
          <RedirectLink className={classes.cta} {...cta} />
        </Section>
      </PageContent>
    </ThemeProvider>
  );
};
