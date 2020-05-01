/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { mediaQueries } from '../theme';

const markdownClassName = 'ys-md-content';

export const PageContent = styled.div`
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

export type ContentProps = {
  content: string;
  className?: string;
};

const MarkdownStyle = () => {
  const theme = useTheme();
  return (
    <Global
      // @ts-ignore
      styles={css`
        .${markdownClassName} {
          h3 {
            ${theme.typography.h3}
            margin: ${theme.spacing(5)} 0;
          }
          img {
            margin-bottom: ${theme.spacing(4)};
            object-fit: cover;
            max-height: 40rem;
            max-width: 100%;
          }
          img[src$='#left'] {
            width: 100vw;

            ${mediaQueries.fromTablet} {
              margin-right: ${theme.spacing(4)};
              width: auto;
              float: left;
            }
          }
          img[src$='#right'] {
            width: 100vw;

            ${mediaQueries.fromTablet} {
              margin-left: ${theme.spacing(4)};
              width: auto;
              float: right;
            }
          }
          img[src$='#center'] {
            margin-left: auto;
            margin-right: auto;
            display: block;
          }
          img[src$='#fullWidth'] {
            width: 100vw;
          }
          img[src$='#fullHeight'] {
            height: 100vh;
            max-height: 100vh;
          }
          ${theme.typography.body1}
        }
      `}
    />
  );
};

export const HTMLContent: React.FC<ContentProps> = ({ content, className }) => (
  <>
    <MarkdownStyle />
    <div className={clsx(markdownClassName, className)} dangerouslySetInnerHTML={{ __html: content }} />
  </>
);

export const Content: React.FC<ContentProps> = ({ content, className }) => (
  <>
    <MarkdownStyle />
    <div className={clsx(markdownClassName, className)}>{content}</div>
  </>
);
