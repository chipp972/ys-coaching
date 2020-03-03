import React from 'react';
import { Collection } from 'immutable';
import { Provider } from 'react-redux';
import { MakePreviewStore } from '../../store/create-store';
import { ProductsPage } from './products.page';

type PreviewProps = {
  entry: Collection<string, any>;
  getAsset: () => any;
};

export const ProductPagePreview: React.FC<PreviewProps> = ({
  entry
}) => {
  const data = entry.getIn(['data']).toJS();

  // TODO: To improve
  return (
    <Provider store={MakePreviewStore()}>
      <ProductsPage {...data} tabsData={[]} />
      {/* <PlanChoice
        tabsData={[]}
        description={data.description}
        heading={data.heading}
      /> */}
    </Provider>
  );
};
