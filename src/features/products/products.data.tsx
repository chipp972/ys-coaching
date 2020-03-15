import * as R from 'ramda';

export const makeTabsData = (packages) =>
  R.pipe(
    R.sortBy(R.prop('position')),
    R.map(({ label, value, description }) => ({
      label,
      value,
      description,
      packageList: packages.plans.filter(({ category }) => category === label)
    }))
  );

export const getProductsPageData = (data) => {
  const {
    packages,
    dateTimeScreen,
    locationScreen,
    confirmationScreen,
    thankYouScreen
  } = data.markdownRemark.frontmatter;
  const { edges } = data.allMarkdownRemark;

  const tabsData = R.pipe(
    R.map((edge) => ({
      label: R.path(['node', 'frontmatter', 'title'], edge),
      value: R.path(['node', 'fields', 'slug'], edge),
      position: R.path(['node', 'frontmatter', 'position'], edge),
      description: R.path(['node', 'frontmatter', 'description'], edge)
    })),
    makeTabsData(packages)
  )(edges);

  return {
    tabsData,
    packages,
    dateTimeScreen,
    locationScreen,
    confirmationScreen,
    thankYouScreen
  };
};
