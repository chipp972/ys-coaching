import './all.sass';
import './global.sass';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer, footerHeight } from '../components/Footer/Footer';
import { Navbar, navbarHeight } from './Navbar/Navbar';
import { useSiteMetadata } from './SiteMetadata';
import { withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import { colors } from './theme';
import { css } from '@emotion/core';

const TemplateWrapper = ({ children, pathname }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color={colors.gray500}
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar pathname={pathname} />
      <div css={css`
        margin-top: ${navbarHeight};
        overflow-x: hidden;
        min-height: calc(100vh - ${footerHeight} - ${navbarHeight});
      `}>{children}</div>
      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = {
  pathname: PropTypes.string
};

export default TemplateWrapper;
