import { css } from '@emotion/core';
import { Button, Typography } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import React from 'react';
import logoDarkSrc from '../../../img/logo-dark.svg';
import { useSiteMetadata } from '../../hook/use-site-metadata';
import { footerHeight, logoSize } from '../../layout';
import { colors, lightTheme, mediaQueries } from '../../theme';
import { BackToTopButton } from '../Button/BackToTopButton';
import { SocialLinks } from '../SocialLinks';

const FooterRouteLinks: React.FC = () => {
  const theme = useTheme();
  const { routes } = useSiteMetadata();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        ${mediaQueries.fromTablet} {
          margin-right: ${theme.spacing(4)};
        }
      `}>
      {routes.map(({ name, to }) => (
        <Button
          key={to}
          css={css`
            margin-bottom: ${theme.spacing(2)};
          `}
          component={Link}
          to={to}>
          {name}
        </Button>
      ))}
    </div>
  );
};

const SecondColumn: React.FC = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}>
    <div css={css`margin-bottom: 1rem;`}>
      <SocialLinks />
    </div>
    <div css={css`
      ${mediaQueries.fromTablet} {
        position: absolute;
        right: 50%;
        top: 2rem;
        transform: translateX(50%);
      }
    `}>
      <BackToTopButton />
    </div>
  </div>
);

const AdditionalLinks: React.FC = () => (
  <div
    css={css`
      background-color: ${colors.gray500};
      text-align: center;
    `}>
    <Typography
      variant="caption"
      css={css`
        color: ${colors.black};
      `}>
      © Yuto Coaching 2019-2021 - Mentions Légales - CGV
    </Typography>
  </div>
);

export const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={lightTheme}>
      <footer
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: ${colors.gray50};
          height: ${footerHeight.mobile};
          position: relative;

          ${mediaQueries.fromTablet} {
            flex-direction: row;
            height: ${footerHeight.fromTablet};
          }
        `}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin-top: ${theme.spacing(2)};

            ${mediaQueries.fromTablet} {
              flex-direction: row;
            }
          `}>
          <FooterRouteLinks />
          <SecondColumn />
        </div>
        <img
          src={logoDarkSrc}
          alt="Ys coaching logo"
          css={css`
            height: auto;
            width: ${logoSize.footer};
          `}
        />
      </footer>
      <AdditionalLinks />
    </ThemeProvider>
  );
};
