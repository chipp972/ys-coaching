import * as R from 'ramda';
import React from 'react';
import { Provider } from 'react-redux';
import { MakePreviewStore } from '../../store/create-store';
import { ProductsPage } from './products.page';
import { makeTabsData } from './products.data';
import { PreviewProps } from '../../common/helpers/gatsby';

export const ProductPagePreview: React.FC<PreviewProps> = ({
  entry,
  fieldsMetaData
}) => {
  const data = entry.getIn(['data']).toJS();

  const tabsData = R.pipe(
    R.path(['packages', 'plans', 'category', 'product-categories']),
    R.values,
    R.map(({ title, description, position }) => ({
      label: title,
      value: title,
      description,
      position
    })),
    makeTabsData(data.packages)
  )(fieldsMetaData.toJS());

  return (
    <Provider store={MakePreviewStore()}>
      <ProductsPage {...data} tabsData={tabsData} />
    </Provider>
  );
};
