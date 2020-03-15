import React from 'react';
import { Tabs, TabItemData } from '../../../../common/components/Tabs/Tabs';
import { StepContainer } from './StepContainer';

type Props = {
  heading: string;
  description: string;
  tabsData: TabItemData[];
  onChoice?: (plan: string) => void;
};

export const PlanChoice: React.FC<Props> = ({ heading, description, tabsData }) => (
  <StepContainer
    heading={heading}
    description={description}>
    {tabsData.length > 0 && (
      <div className="columns">
        <Tabs className="column is-10 is-offset-1" items={tabsData} />
      </div>
    )}
  </StepContainer>
);
