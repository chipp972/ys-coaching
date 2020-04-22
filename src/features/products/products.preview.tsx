import * as R from 'ramda';
import React from 'react';
import { Provider } from 'react-redux';
import { HeadlineBanner } from '../../common/components/HeadlineBanner/HeadlineBanner';
import { PreviewProps } from '../../common/helpers/gatsby';
import { MakePreviewStore } from '../../store/create-store';
import { ProductsContext } from './products.context';
import { getProductPageContextData, makeTabsData } from './products.data';
import { ProductsPage } from './products.page';

export const ProductPagePreview: React.FC<PreviewProps> = ({
  entry,
  fieldsMetaData
}) => {
  const data = entry.getIn(['data']).toJS();
  const { title, subtitle, image } = data;

  const tabsData = R.pipe(
    R.path(['packages', 'plans', 'category', 'product-categories']),
    R.values,
    R.map(({ title: category, description, position }) => ({
      label: category,
      value: category,
      description,
      position
    })),
    makeTabsData(data.packages)
  )(fieldsMetaData.toJS());

  return (
    <Provider store={MakePreviewStore()}>
      <ProductsContext.Provider value={getProductPageContextData(data)}>
        <HeadlineBanner title={title} subtitle={subtitle} image={image} />
        <ProductsPage {...data} tabsData={tabsData} />
      </ProductsContext.Provider>
    </Provider>
  );
};
