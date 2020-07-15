import * as R from 'ramda';

const getProductCategories = R.pipe(
  R.path(['allMarkdownRemark', 'edges']),
  R.map((edge) => ({
    label: R.path(['node', 'frontmatter', 'title'], edge),
    value: R.path(['node', 'fields', 'slug'], edge),
    position: R.path(['node', 'frontmatter', 'position'], edge),
    description: R.path(['node', 'frontmatter', 'description'], edge)
  }))
);

const getPreviewProductCategories = R.pipe(
    R.path(['packages', 'plans', 'category', 'product-categories']),
    R.values,
    R.map(({ title: category, description, position }) => ({
      label: category,
      value: category,
      description,
      position
    }))
);

export const getProductPageContextData = (data: PageData, fieldsMetaData?: any) => {
  const isPreview = !R.hasPath(['markdownRemark', 'frontmatter'], data);
  const productCategories = isPreview
    ? getPreviewProductCategories(fieldsMetaData)
    : getProductCategories(data);
  const contribution = isPreview ? data : R.path(['markdownRemark', 'frontmatter'], data);

  return {
    carouselId: 'products',
    productCategories,
    ...contribution
  };
};
