import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../colors';
import { mediaQueries } from '../mediaqueries';

const Title = styled.h1`
  color: ${colors.white};
  font-size: 34px;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: 2px;
  text-transform: uppercase;

  ${mediaQueries.fromTablet} {
    font-size: 38px;
  }
`;

const SubTitle = styled.h2`
  color: ${colors.white};
  font-size: 28px;
  font-weight: 100;
  line-height: 1.1;
  letter-spacing: 2px;
  text-transform: uppercase;

  ${mediaQueries.fromTablet} {
    font-size: 32px;
  }
`;

type Props = {
  title: string;
  subtitle?: string;
};

export const PageTitle: React.FC<Props> = ({ title, subtitle }) => (
  <div
    css={css`
      display: flex;
      flex-flow: column nowrap;
      text-align: center;
      align-items: center;
      z-index: 1;
    `}>
    <Title>{title}</Title>
    {subtitle && <SubTitle>{subtitle}</SubTitle>}
  </div>
);
