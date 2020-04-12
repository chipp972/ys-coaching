import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { Meta } from './Meta';
import { HeadlineBanner } from '../components/HeadlineBanner/HeadlineBanner';
import { useSiteMetadata } from '../hook/use-site-metadata';
import { mediaQueries, theme } from '../theme';
import { navbarHeight, footerHeight } from './layout.constant';
import { css } from '@emotion/core';
import { GatsbyImage } from '../helpers/gatsby';
import { ThemeProvider } from '@material-ui/core/styles';

type Props = {
  pathname: string;
  hasHeadlineBanner?: boolean;
  image?: GatsbyImage;
  title?: string;
  subtitle?: string;
};

export const Page: React.FC<Props> = ({ children, pathname, hasHeadlineBanner, title, subtitle, image }) => {
  const { title: siteTitle, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Meta title={siteTitle} description={description} />
        <Navbar pathname={pathname} />
        <div
          css={css`
            margin-top: ${navbarHeight.mobile};
            overflow-x: hidden;
            min-height: calc(100vh - ${footerHeight} - ${navbarHeight.mobile});

            ${mediaQueries.fromTablet} {
              margin-top: ${navbarHeight.fromTablet};
              min-height: calc(
                100vh - ${footerHeight} - ${navbarHeight.fromTablet}
              );
            }
          `}>
          {hasHeadlineBanner && <HeadlineBanner title={title} subtitle={subtitle} image={image} />}
          {children}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
