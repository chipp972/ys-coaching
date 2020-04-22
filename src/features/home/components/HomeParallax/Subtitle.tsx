import styled from '@emotion/styled';
import React from 'react';
import { colors, fontFamilies, mediaQueries } from '../../../../common/theme';

export const Subtitle: React.FC = styled.h2`
  font-family: ${fontFamilies.notoSerif};
  font-size: 26px;
  font-weight: 100;
  line-height: 1.5;
  color: ${colors.gray50};
  text-align: center;
  background-color: ${colors.shadow};
  padding: 1.6rem;

  ${mediaQueries.fromTablet} {
    font-size: 34px;
  }
`;
