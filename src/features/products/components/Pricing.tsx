import React from 'react';
import { css } from '@emotion/core';
import { ServiceCard } from './ServiceCard/ServiceCard';
import { mediaQueries } from '../../../common/theme';
import { GatsbyImage } from '../../../helpers/gatsby';

type Plan = {
  plan: string;
  image: GatsbyImage;
  price: string | number;
  frequency?: string;
  description: string;
  benefits: string[];
};

type Props = {
  data: Plan[];
};

export const Pricing: React.FC<Props> = ({ data }) => (
  <div
    css={css`
      display: flex;
      flex-flow: column wrap;
      align-items: center;

      ${mediaQueries.fromTablet} {
        justify-content: flex-start;
        flex-flow: row wrap;
        align-items: stretch;
      }
    `}>
    {data.map((planData) => (
      <ServiceCard key={planData.plan} {...planData} />
    ))}
  </div>
);
