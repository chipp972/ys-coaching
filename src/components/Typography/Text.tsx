import styled from '@emotion/styled';
import { colors, fontFamilies, mediaQueries } from '../theme';

export const ExtraSmallText = styled.span`
  font-size: 12px;
  font-family: ${fontFamilies.notoSans};
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.white};

  ${mediaQueries.fromTablet} {
    font-size: 16px;
  }
`;

export const SmallText = styled.span`
  font-size: 14px;
  font-family: ${fontFamilies.notoSans};
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.white};

  ${mediaQueries.fromTablet} {
    font-size: 18px;
  }
`;

export const MediumText = styled.span`
  font-size: 16px;
  font-family: ${fontFamilies.notoSans};
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.white};

  ${mediaQueries.fromTablet} {
    font-size: 20px;
  }
`;

export const BigText = styled.span`
  font-size: 18px;
  font-family: ${fontFamilies.notoSans};
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.white};

  ${mediaQueries.fromTablet} {
    font-size: 22px;
  }
`;
