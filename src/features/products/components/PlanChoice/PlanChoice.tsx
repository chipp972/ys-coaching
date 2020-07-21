import * as R from 'ramda';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Tabs } from '../../../../common/components/Tabs/Tabs';
import { useReCaptcha } from '../../../../common/helpers/recaptcha';
import { useProductsContext } from '../../products.hook';
import { setPlan } from '../../state/products.action';
import { StepContainer } from '../StepContainer';
import { Plan, Pricing } from './Pricing';

type TabData = {
  label: string;
  value: string;
  description?: string;
  packageList: Plan[];
};

const getPackageList = (label: string) => R.pipe(
  R.propOr([], 'plans'),
  R.filter(({ category }) => category === label)
);

export const makeTabsData = (packages = { plans: [] }) =>
  R.pipe(
    R.sortBy(R.prop('position')),
    R.map(({ label, value, description }) => ({
      label,
      value,
      description,
      packageList: getPackageList(label)(packages)
    }))
  );

export const PlanChoice: React.FC = () => {
  const { packages, goNextStep, productCategories } = useProductsContext();
  const tabsData: TabData[] = makeTabsData(packages)(productCategories);
  const dispatch = useDispatch();
  const selectPlan: (plan: string) => void = R.pipe(setPlan, dispatch, goNextStep);

  useReCaptcha();

  return (
    <StepContainer>
      {tabsData.length > 0 && (
        <Tabs labels={tabsData.map(R.prop('label'))}>
          {tabsData.map(({ value, packageList, description: categoryDescription }) => (
            <Pricing
              key={value}
              description={categoryDescription}
              data={packageList}
              onClick={selectPlan}
            />
          ))}
        </Tabs>
      )}
    </StepContainer>
  );
};
