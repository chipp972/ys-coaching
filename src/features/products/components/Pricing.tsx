import * as R from 'ramda';
import React from 'react';
import { css } from '@emotion/core';
import { ServiceCard } from './ServiceCard/ServiceCard';
import { mediaQueries } from '../../../common/theme';
import { GatsbyImage } from '../../../common/helpers/gatsby';
import { useSelector } from 'react-redux';
import { reducerKey } from '../state/products.constant';

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
  const currentPlan = useSelector(R.path([reducerKey, 'plan']));
  return (
    <div className="columns">
      <div className="column is-10 is-offset-1">
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
      </div>
    </div>
  );
};
