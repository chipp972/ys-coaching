import * as R from 'ramda';
import React from 'react';
import { PlanChoice, DateTimeStep, ThankYouStep } from './components';
import { Breadcrumb } from '../../common/components/Breadcrumb/Breadcrumb';
import { css } from '@emotion/core';
import { colors } from '../../common/theme';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPlan,
  setDateTime,
  goNextStep,
  jumpToStep
} from './state/products.action';
import { getCurrentStepIndex } from './state/products.selector';
import { Carousel } from '../../common/components/Carousel/Carousel';
import { LocationStep } from './components/LocationStep/LocationStep';

type StepData = {
  stepName: string;
  heading: string;
  description?: string;
};

export type Props = {
  packages: StepData;
  dateTimeScreen: StepData & {
    availableTimeslots: { start: string; end: string }[];
  };
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
  const currentStepIndex = useSelector(getCurrentStepIndex);
  const breadcrumbLabels: string[] = [
    packages,
    dateTimeScreen,
    locationScreen,
    confirmationScreen
  ].map(R.prop('stepName'));

  const nextStep = R.pipe(goNextStep, dispatch);

  const jumpStep = (stepIndex: number) => {
    dispatch(jumpToStep(stepIndex));
  };

  // const prevStep = R.pipe(R.path(['current', 'prev'], swipeRef), goPrevStep, dispatch);
  const selectPlan = R.pipe(setPlan, dispatch, nextStep);
  const selectDate = R.pipe(setDateTime, dispatch, nextStep);

  return (
    <div className="container">
      <Breadcrumb
        currentStepIndex={currentStepIndex}
        labelList={breadcrumbLabels}
        onClick={jumpStep}
      />
      <Carousel
        css={css`
          background-color: ${colors.black01dp};
        `}
        isSwipeDisabled
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
        <LocationStep
          heading={locationScreen.heading}
          description={locationScreen.description}
          availableLocations={locationScreen.availableLocations}
        />
        <PlanChoice
          heading={confirmationScreen.heading}
          description={confirmationScreen.description}
          tabsData={tabsData}
          onChoice={selectPlan}
        />
        <ThankYouStep
          heading={thankYouScreen.heading}
          description={thankYouScreen.description}
          content={thankYouScreen.content}
          image={thankYouScreen.image}
        />
      </Carousel>
    </div>
  );
};
