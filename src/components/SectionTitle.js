import styled from '@emotion/styled';
import {colors, fontFamilies, mediaQueries} from './theme';

export const SectionTitle = styled.h3`
  font-size: 38px;
  font-family: ${fontFamilies.notoSans};
  font-weight: 100;
  line-height: 1.05;
  letter-spacing: 2px;
  color: ${colors.white};
  text-transform: uppercase;

  ${mediaQueries.fromTablet} {
    font-size: 44px;
  }
`;