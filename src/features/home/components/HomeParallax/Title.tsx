import React from 'react';
import { fontFamilies, mediaQueries, colors } from '../../../../common/theme';
import styled from '@emotion/styled';

export const Title: React.FC = styled.h1`
  font-family: Cinzel, ${fontFamilies.notoSans};
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 2rem;
  padding: 1rem;
  letter-spacing: 3px;
  line-height: 1.2;
  color: ${colors.white};
  text-transform: uppercase;
  text-align: center;
  background-color: ${colors.shadow};

  ${mediaQueries.fromTablet} {
    font-size: 58px;
    line-height: 1.5
  }
`;
