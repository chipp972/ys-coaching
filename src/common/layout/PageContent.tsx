/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { mediaQueries } from '../theme';

const markdownClassName = 'ys-md-content';

export const PageContainer = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;

  ${mediaQueries.fromDesktop} {
    max-width: 960px;
  }

  ${mediaQueries.fromWidescreen} {
    max-width: 1152px;
  }

  ${mediaQueries.fromFullhd} {
    max-width: 1344px;
  }
`;

export const PageContent: React.FC<{className?: string}> = ({ children, className }) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={css`
        padding: ${theme.spacing(2)} 0;
        background-color: ${theme.palette.background.default};
      `}>
      <PageContainer>{children}</PageContainer>
    </div>
  );
};

export type ContentProps = {
  content: string;
  className?: string;
};

// eslint-disable-next-line max-lines-per-function
const MarkdownStyle = () => {
  const theme = useTheme();
  return (
    <Global
      // @ts-ignore
      styles={css`
        .${markdownClassName} {
          h1 {
            ${theme.typography.h1}
          }
          h2 {
            ${theme.typography.h2}
          }
          h3 {
            ${theme.typography.h3}
          }
          h4 {
            ${theme.typography.h4}
          }
          h5 {
            ${theme.typography.h5}
          }
          h6 {
            ${theme.typography.h6}
          }
          img {
            padding-bottom: ${theme.spacing(4)};
            object-fit: cover;
            max-height: 40rem;
            max-width: 100%;
          }
          img.left {
            width: 100vw;

            ${mediaQueries.fromTablet} {
              padding-right: ${theme.spacing(4)};
              width: auto;
              float: left;
            }
          }
          img.right {
            width: 100vw;

            ${mediaQueries.fromTablet} {
              padding-left: ${theme.spacing(4)};
              width: auto;
              float: right;
            }
          }
          img.center {
            padding-left: auto;
            padding-right: auto;
            display: block;
          }
          img.fullwidth {
            width: 100vw;
          }
          img.fullheight {
            height: 100vh;
            max-height: 100vh;
          }
          p {
            margin-bottom: ${theme.spacing(4)};
          }
          li {
            margin-bottom: ${theme.spacing(3)};
            :last-child {
              margin-bottom: ${theme.spacing(4)};
            }
          }
          ${theme.typography.body1}
        }
      `}
    />
  );
};

export const HTMLContent: React.FC<ContentProps> = ({ content, className, children }) => (
  <div className={clsx(markdownClassName, className)}>
    <MarkdownStyle />
    {children}
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);
