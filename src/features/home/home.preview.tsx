import React from 'react';
import { HomePage } from './home.page';
import { PreviewProps } from '../../common/helpers/gatsby';

export const IndexPagePreview: React.FC<PreviewProps> = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <HomePage
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    );
  }
  return <div>Loading...</div>;
};
