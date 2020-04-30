/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { mediaQueries } from '../theme';

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
        h3 {
          ${theme.typography.h3}
          margin: ${theme.spacing(5)} 0;
        }
        img {
          margin-bottom: ${theme.spacing(2)};
          object-fit: cover;
          max-height: 40rem;
          max-width: 100%;
        }
        img[src$='#left'] {
          float: left;
        }
        img[src$='#right'] {
          float: right;
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
      `}
    />
  );
};

export const HTMLContent: React.FC<ContentProps> = ({ content, className }) => (
  <>
    <MarkdownStyle />
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  </>
);

export const Content: React.FC<ContentProps> = ({ content, className }) => (
  <>
    <MarkdownStyle />
    <div className={className}>{content}</div>
  </>
);
