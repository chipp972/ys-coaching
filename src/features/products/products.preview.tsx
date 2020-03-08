import * as R from 'ramda';
import React from 'react';
import { Provider } from 'react-redux';
import { MakePreviewStore } from '../../store/create-store';
import { ProductsPage } from './products.page';
import { makeTabsData } from './products.data';
import { PreviewProps } from '../../common/helpers/gatsby';
import { HeadlineBanner } from '../../common/components/HeadlineBanner/HeadlineBanner';

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
      <HeadlineBanner title={title} subtitle={subtitle} image={image} />
      <ProductsPage {...data} tabsData={tabsData} />
    </Provider>
  );
};
