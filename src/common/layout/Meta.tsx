import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import { colors } from '../theme';

export const Meta = ({ title, description }) => (
  <Helmet>
    <html lang="en" />
    <title>{title}</title>
    <meta name="description" content={description} />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${withPrefix('/')}img/apple-touch-icon.png`}
    />
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
    <meta name="theme-color" content={colors.white} />

    <meta property="og:type" content="business.business" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="/" />
    <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
  </Helmet>
);
