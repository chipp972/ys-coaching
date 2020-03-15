import React from 'react';
import { SectionTitle } from '../../../../common/theme';

type Props = {
  heading: string;
  description: string;
};

export const StepContainer: React.FC<Props> = ({ heading, description, children }) => (
  <div className="section">
    <div className="columns">
      <SectionTitle className="column is-10 is-offset-1">
        {heading}
      </SectionTitle>
    </div>
    {description && <p>{description}</p>}
    {children}
  </div>
);
