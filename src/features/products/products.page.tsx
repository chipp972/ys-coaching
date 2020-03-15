import * as R from 'ramda';
import React from 'react';
import { PlanChoice, DateTimeStep } from './components/Steps';
import { Breadcrumb } from '../../common/components/Breadcrumb/Breadcrumb';
import { css } from '@emotion/core';
import { colors } from '../../common/theme';
import { useDispatch, useSelector } from 'react-redux';
import { setPlan, setDateTime, goNextStep, jumpToStep } from './state/products.action';
import { reducerKey, steps, orderedStepList } from './state/products.constant';
import { Carousel } from '../../common/components/Carousel/Carousel';

const ProductsBreadcrumb: React.FC<{
  stepDataList: StepData[];
  jumpStep: (stepIndex: number) => void;
}> = ({ stepDataList, jumpStep }) => {
  const labels: string[] = stepDataList.map(R.prop('stepName'));
  return (
    <Breadcrumb currentStepIndex={2} labelList={labels} onClick={jumpStep} />
  );
};

type StepData = {
  stepName: string;
  heading: string;
  description?: string;
};

export type Props = {
  packages: StepData;
  dateTimeScreen: StepData & { availableTimeslots: {start: string; end: string}[]};
  locationScreen: StepData;
  confirmationScreen: StepData;
  thankYouScreen: StepData;
  tabsData: {
    label: string;
    value: string;
    content: JSX.Element;
  };
};

// eslint-disable-next-line
export const ProductsPage = ({
  packages,
  tabsData,
  dateTimeScreen,
  locationScreen,
  confirmationScreen,
  thankYouScreen
}) => {
  const dispatch = useDispatch();
  const currentStep = useSelector(R.pathOr(steps.PLAN_CHOICE, [reducerKey, 'currentStep']));
  const currentStepIndex = orderedStepList.findIndex(R.equals(currentStep));

  const nextStep = R.pipe(
    goNextStep,
    dispatch
  );

  const jumpStep = (stepIndex: number) => {
    dispatch(jumpToStep(stepIndex));
  };

  // const prevStep = R.pipe(R.path(['current', 'prev'], swipeRef), goPrevStep, dispatch);
  const selectPlan = R.pipe(setPlan, dispatch, nextStep);
  const selectDate = R.pipe(setDateTime, dispatch, nextStep);

  // TODO: be able to pass onChoice to tabsData content
  return (
    <div className="container">
      <ProductsBreadcrumb
        jumpStep={jumpStep}
        stepDataList={[
          packages,
          dateTimeScreen,
          locationScreen,
          confirmationScreen
        ]}
      />
      <Carousel
        css={css`background-color: ${colors.black01dp};`}
        currentStepIndex={currentStepIndex}>
        <PlanChoice
          heading={packages.heading}
          description={packages.description}
          tabsData={tabsData}
          onChoice={selectPlan}
        />
        <DateTimeStep
          heading={dateTimeScreen.heading}
          description={dateTimeScreen.description}
          availabilityTimeslots={dateTimeScreen.availableTimeslots}
          selectDate={selectDate}
        />
        <PlanChoice
          heading={packages.heading}
          description={packages.description}
          tabsData={tabsData}
          onChoice={selectPlan}
        />
      </Carousel>
    </div>
  );
};
