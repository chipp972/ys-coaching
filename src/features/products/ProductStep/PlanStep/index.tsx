import { graphql, useStaticQuery } from 'gatsby';
import * as R from 'ramda';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Tabs } from '../../../../common/components/Tabs/Tabs';
import { useReCaptcha } from '../../../../common/helpers/recaptcha';
import { defaultLocale, useI18n } from '../../../../common/layout/Multilanguage';
import { DatoCmsPlanStep } from '../../products.context';
import { useProductsContext } from '../../products.hook';
import { setPlan } from '../../state/products.action';
import { CategoryTab } from './CategoryTab';

type ProductCategory = {
  id: string;
  productsTabPosition: number;
  locale: string;
  title: string;
  description?: string;
};

const useProductCategories = (): ProductCategory[] => {
  const { currentLanguage } = useI18n();
  const { categories: { edges } } = useStaticQuery(graphql`
    query ProductCategoriesQuery {
      categories: allDatoCmsProductCategory {
        edges {
          node {
            id
            productsTabPosition
            description
            locale
            title
          }
        }
      }
    }`);
  const productCategories = edges
    .map(({ node }) => node)
    .filter(({ locale }: ProductCategory) => currentLanguage
      ? currentLanguage.includes(locale)
      : locale === defaultLocale);

  return R.sortBy(R.prop('productsTabPosition'), productCategories);
};

export const PlanStep: React.FC<DatoCmsPlanStep> = ({ plans }) => {
  const { goNextStep } = useProductsContext();
  const productCategories = useProductCategories();

  const dispatch = useDispatch();
  const selectPlan: (plan: string) => void = R.pipe(setPlan, dispatch, goNextStep);

  useReCaptcha();

  return productCategories.length > 0 && (
    <Tabs labels={productCategories.map(R.prop('title'))}>
      {productCategories.map(({ id, description }) => (
        <CategoryTab
          key={id}
          categoryId={id}
          categoryDescription={description}
          plans={plans}
          onClick={selectPlan}
        />
      ))}
    </Tabs>
  );
};
