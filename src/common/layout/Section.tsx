import React from 'react';
import styled from '@emotion/styled';
import { mediaQueries } from '../theme';

export const FullWidthSection: React.FC = styled.section`
  padding: 30px 0;

  ${mediaQueries.fromTablet} {
    padding: 50px 0;
  }
`;

export const TextSection: React.FC = styled.section`
  padding: 30px 20px;

  ${mediaQueries.fromTablet} {
    padding: 50px 30px;
  }
`;
