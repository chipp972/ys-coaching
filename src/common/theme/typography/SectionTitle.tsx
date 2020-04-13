import styled from '@emotion/styled';
import { fontFamilies } from './variables';
import { mediaQueries } from '../mediaqueries';
import { colors } from '../colors';

export const SectionTitle = styled.h3`
  font-size: 3.2rem;
  font-family: ${fontFamilies.notoSans};
  font-weight: 100;
  line-height: 1.05;
  letter-spacing: 2px;
  color: ${colors.white};
  text-transform: uppercase;
  margin-bottom: 3rem;
  text-align: center;

  ${mediaQueries.fromTablet} {
    font-size: 3.6rem;
    text-align: left;
  }
`;
