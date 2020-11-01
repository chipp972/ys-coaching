import { css } from '@emotion/core';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { LocalizedField } from '../../custom';
import { Footer } from '../components/Footer/Footer';
import { HeadlineBanner } from '../components/HeadlineBanner/HeadlineBanner';
import { Navbar } from '../components/Navbar/Navbar';
import { GatsbyImage } from '../helpers/gatsby';
import { useSiteMetadata } from '../hook/use-site-metadata';
import { mediaQueries, theme } from '../theme';
import { footerHeight, navbarHeight } from './layout.constant';
import { Meta } from './Meta';
import { useI18n } from './Multilanguage';

type Props = {
  pathname: string;
  hasHeadlineBanner?: boolean;
  image?: GatsbyImage;
  _allTitleLocales?: LocalizedField[];
  _allSubtitleLocales?: LocalizedField[];
};

export const Page: React.FC<Props> = ({
  children,
  pathname,
  hasHeadlineBanner,
  _allTitleLocales,
  _allSubtitleLocales,
  image
}) => {
  const { title: siteTitle, description } = useSiteMetadata();
  const { getLocalizedContent } = useI18n();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Meta title={siteTitle} description={description} />
        <Navbar pathname={pathname} />
        <div
          css={css`
            margin-top: ${navbarHeight.mobile};
            overflow: hidden;
            min-height: calc(100vh - ${footerHeight.mobile} - ${navbarHeight.mobile});

            ${mediaQueries.fromTablet} {
              margin-top: ${navbarHeight.fromTablet};
              min-height: calc(100vh - ${footerHeight.fromTablet} - ${navbarHeight.fromTablet});
            }
          `}>
          {hasHeadlineBanner && (
            <HeadlineBanner
              title={getLocalizedContent(_allTitleLocales)}
              subtitle={getLocalizedContent(_allSubtitleLocales)}
              image={image}
            />
          )}
          {children}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
