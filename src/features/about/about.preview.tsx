import React from 'react';
import { PreviewProps } from '../../common/helpers/gatsby';
import { AboutContext } from './about.context';
import { AboutPage } from './about.page';

export const AboutPagePreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => {
  const raw = entry.getIn(['data']).toJS();
  const context = {
    content: widgetFor('body'),
    ...raw
  };
  return (
    <AboutContext.Provider value={context}>
      <AboutPage />
    </AboutContext.Provider>
  );
};
