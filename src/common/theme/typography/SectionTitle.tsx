import styled from '@emotion/styled';
import { fontFamilies } from './variables';
import { mediaQueries } from '../mediaqueries';
import { colors } from '../colors';

export const SectionTitle = styled.h3`
  font-size: 32px;
  font-family: ${fontFamilies.notoSans};
  font-weight: 100;
  line-height: 1.05;
  letter-spacing: 2px;
  color: ${colors.white};
  text-transform: uppercase;
  margin-bottom: 2rem;

  ${mediaQueries.fromTablet} {
    font-size: 36px;
  }
`;
