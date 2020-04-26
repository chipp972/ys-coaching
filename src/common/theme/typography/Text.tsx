import styled from '@emotion/styled';
import { colors } from '../colors';
import { mediaQueries } from '../mediaqueries';

export const ExtraSmallText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.white};

  ${mediaQueries.fromTablet} {
    font-size: 1.6rem;
  }
`;

export const SmallText = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.white};

  ${mediaQueries.fromTablet} {
    font-size: 1.8rem;
  }
`;

export const MediumText = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.white};

  ${mediaQueries.fromTablet} {
    font-size: 2rem;
  }
`;

export const BigText = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.white};

  ${mediaQueries.fromTablet} {
    font-size: 2.2rem;
  }
`;

export const ActiveText = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.white};

  ${mediaQueries.fromTablet} {
    font-size: 2.2rem;
  }
`;

export const InfoText = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.gray600};

  ${mediaQueries.fromTablet} {
    font-size: 2.4rem;
  }
`;
