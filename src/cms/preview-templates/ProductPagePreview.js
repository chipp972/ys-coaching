import React from 'react';
import PropTypes from 'prop-types';
import { ProductPageTemplate } from '../../templates/product-page';

const ProductPagePreview = ({ entry, getAsset }) => {

  const entryPricingPlans = entry.getIn(['data', 'packages', 'plans']);
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

  return (
    <ProductPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      description={entry.getIn(['data', 'description'])}
      packages={{
        heading: entry.getIn(['data', 'packages', 'heading']),
        description: entry.getIn(['data', 'packages', 'description']),
        plans: pricingPlans
      }}
    />
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProductPagePreview;
