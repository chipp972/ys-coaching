import React from 'react';
import styled from '@emotion/styled';
import { mediaQueries } from '../theme';

/**
 * Section without side padding for content that should be displayed accross
 * the full screen like images.
 */
export const FullWidthSection: React.FC = styled.section`
  padding: 30px 0;

  ${mediaQueries.fromTablet} {
    padding: 50px 0;
  }
`;

/**
 * Section of content with standardized padding.
 */
export const Section: React.FC = styled.section`
  padding: 3rem 0.5rem;

  ${mediaQueries.fromTablet} {
    padding: 5rem 2rem;
  }

  ${mediaQueries.fromDesktop} {
    padding: 3rem 6rem;
  }
`;

/**
 * Section with less top and bottom padding.
 */
export const SubSection: React.FC = styled.section`
  padding: 15px 5px;

  ${mediaQueries.fromTablet} {
    padding: 20px 20px;
  }

  ${mediaQueries.fromDesktop} {
    padding: 30px 30px;
  }
`;
