import React from 'react';
import * as R from 'ramda';
import { Pricing } from './components/Pricing';

export const makeTabsData = (packages) =>
  R.pipe(
    R.sortBy(R.prop('position')),
    R.map(({ label, value, description }) => ({
      label,
      value,
      content: (
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p>{description}</p>
            <Pricing
              data={packages.plans.filter(({ category }) => category === label)}
            />
          </div>
        </div>
      )
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
