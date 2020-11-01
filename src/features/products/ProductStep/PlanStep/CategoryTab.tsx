import { css } from '@emotion/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { SubSection } from '../../../../common/layout';
import { mediaQueries } from '../../../../common/theme';
import { Plan } from '../../products.context';
import { getSelectedPlan } from '../../state/products.selector';
import { ServiceCard } from './ServiceCard/ServiceCard';

type Props = {
  plans: Plan[];
  categoryId: string;
  categoryDescription: string;
  onClick: (cardId: string) => void;
};

export const CategoryTab: React.FC<Props> = ({ plans, categoryId, categoryDescription, onClick }) => {
  const currentPlan = useSelector(getSelectedPlan);
  return (
    <SubSection>
      <p dangerouslySetInnerHTML={{ __html: categoryDescription }} />
      <div
        css={css`
          display: flex;
          flex-flow: column nowrap;
          align-items: center;

          ${mediaQueries.fromTablet} {
            justify-content: flex-start;
            flex-flow: row wrap;
            align-items: stretch;
          }
        `}>
        {plans
          .filter((plan) => plan.category.id === categoryId)
          .map((planData) => (
            <ServiceCard
              key={planData.id}
              {...planData}
              onClick={onClick}
              isSelected={currentPlan === planData.id}
            />
          ))}
      </div>
    </SubSection>
  );
};
