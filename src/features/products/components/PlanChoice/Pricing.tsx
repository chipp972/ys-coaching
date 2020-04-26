import { css } from '@emotion/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { GatsbyImage } from '../../../../common/helpers/gatsby';
import { SubSection } from '../../../../common/layout';
import { mediaQueries } from '../../../../common/theme';
import { getSelectedPlan } from '../../state/products.selector';
import { ServiceCard } from './ServiceCard/ServiceCard';

export type Plan = {
  plan: string;
  image: GatsbyImage;
  price: string | number;
  frequency?: string;
  description: string;
  benefits: string[];
};

type Props = {
  data: Plan[];
  description: string;
  onClick: (cardId: string) => void;
};

export const Pricing: React.FC<Props> = ({ data, description, onClick }) => {
  const currentPlan = useSelector(getSelectedPlan);
  return (
    <SubSection>
      <p>{description}</p>
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
          <ServiceCard
            key={planData.plan}
            {...planData}
            onClick={onClick}
            isSelected={currentPlan === planData.plan}
          />
        ))}
      </div>
    </SubSection>
  );
};
