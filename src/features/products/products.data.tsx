import React from 'react';
import * as R from 'ramda';
import { Pricing } from './components/Pricing';

export const makeTabsData = (packages) =>
  R.pipe(
    R.map((edge) => ({
      label: R.path(['node', 'frontmatter', 'title'], edge),
      value: R.path(['node', 'fields', 'slug'], edge),
      position: R.path(['node', 'frontmatter', 'position'], edge),
      description: R.path(['node', 'frontmatter', 'description'], edge)
    })),
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
  const { frontmatter } = data.markdownRemark;
  const { edges } = data.allMarkdownRemark;
  const packages = R.prop('packages', frontmatter);

  const tabsData = makeTabsData(packages)(edges);

  return {
    tabsData,
    title: frontmatter.title,
    image: frontmatter.image,
    heading: frontmatter.heading,
    subheading: frontmatter.subheading,
    description: frontmatter.description,
    plans: frontmatter.packages
  };
};
