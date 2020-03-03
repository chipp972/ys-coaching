import React from 'react';
import { Tabs } from '../../../../components/Tabs/Tabs';
import { SectionTitle } from '../../../../components/Typography/SectionTitle';

export const PlanChoice = ({ heading, description, tabsData }) => (
  <div className="section">
    <div className="columns">
      <SectionTitle className="column is-10 is-offset-1">
        {heading}
      </SectionTitle>
    </div>
    {description && <p>{description}</p>}
    {tabsData.length > 0 && <div className="columns">
      <Tabs className="column is-10 is-offset-1" items={tabsData} />
    </div>}
  </div>
);
