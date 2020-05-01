import styled from '@emotion/styled';
import { mediaQueries } from '../theme';

/**
 * Section without side padding for content that should be displayed accross
 * the full screen like images.
 */
export const FullWidthSection = styled.section`
  padding: 0;
  margin: 0;
  width: 100vw;
`;

/**
 * Section of content with standardized padding.
 */
export const Section = styled.section`
  padding: 0 0.5rem;

  ${mediaQueries.fromTablet} {
    padding: 0 2rem;
  }

  ${mediaQueries.fromDesktop} {
    padding: 0 6rem;
  }
`;

/**
 * Section with less top and bottom padding.
 */
export const SubSection = styled.section`
  padding: 1.5rem 0.5rem;

  ${mediaQueries.fromTablet} {
    padding: 2rem 2rem;
  }

  ${mediaQueries.fromDesktop} {
    padding: 3rem 3rem;
  }
`;
