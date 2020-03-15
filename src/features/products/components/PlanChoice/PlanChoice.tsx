import * as R from 'ramda';
import React from 'react';
import { Tabs } from '../../../../common/components/Tabs/Tabs';
import { StepContainer } from '../StepContainer';
import { Pricing, Plan } from './Pricing';

type Props = {
  heading: string;
  description: string;
  tabsData: {
    label: string;
    value: string;
    description: string;
    packageList: Plan[];
  }[];
  onChoice: (plan: string) => void;
};

export const PlanChoice: React.FC<Props> = ({
  heading,
  description,
  tabsData,
  onChoice
}) => {
  const labels: string[] = React.useMemo(() => tabsData.map(R.prop('label')), [
    tabsData
  ]);
  return (
    <StepContainer heading={heading} description={description}>
      {tabsData.length > 0 && (
        <Tabs labels={labels}>
          {tabsData.map(({ value, packageList, description: categoryDescription }) => (
            <Pricing
              key={value}
              description={categoryDescription}
              data={packageList}
              onClick={onChoice}
            />
          ))}
        </Tabs>
      )}
    </StepContainer>
  );
};
