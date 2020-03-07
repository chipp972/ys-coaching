import React from 'react';
import styled from '@emotion/styled';
import { mediaQueries } from '../theme';

export const PageContent: React.FC = styled.div`
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

export const HTMLContent: React.FC<ContentProps> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const Content: React.FC<ContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
);
