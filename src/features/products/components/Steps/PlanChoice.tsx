import React from 'react';
import { Tabs, TabItemData } from '../../../../common/components/Tabs/Tabs';
import { SectionTitle } from '../../../../common/theme';

type Props = {
  heading: string;
  description: string;
  tabsData: TabItemData[];
  onChoice?: (plan: string) => void;
};

export const PlanChoice: React.FC<Props> = ({ heading, description, tabsData }) => (
  <div className="section">
    <div className="columns">
      <SectionTitle className="column is-10 is-offset-1">
        {heading}
      </SectionTitle>
    </div>
    {description && <p>{description}</p>}
    {tabsData.length > 0 && (
      <div className="columns">
        <Tabs className="column is-10 is-offset-1" items={tabsData} />
      </div>
    )}
  </div>
);
