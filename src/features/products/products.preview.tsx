import React from 'react';
import { Provider } from 'react-redux';
import { HeadlineBanner } from '../../common/components/HeadlineBanner/HeadlineBanner';
import { PreviewProps } from '../../common/helpers/gatsby';
import { MakePreviewStore } from '../../store/create-store';
import { ProductsContext } from './products.context';
import { getProductPageContextData } from './products.data';
import { ProductsPage } from './products.page';

export const ProductPagePreview: React.FC<PreviewProps> = ({
  entry,
  fieldsMetaData
}) => {
  const data = entry.getIn(['data']).toJS();
  const { title, subtitle, image } = data;

  return (
    <Provider store={MakePreviewStore()}>
      <ProductsContext.Provider value={getProductPageContextData(data, fieldsMetaData.toJS())}>
        <HeadlineBanner title={title} subtitle={subtitle} image={image} />
        <ProductsPage />
      </ProductsContext.Provider>
    </Provider>
  );
};
