import * as R from 'ramda';
import React from 'react';
import { PlanChoice, DateTimeStep, ThankYouStep } from './components';
import { Breadcrumb } from '../../common/components/Breadcrumb/Breadcrumb';
import { css } from '@emotion/core';
import { colors } from '../../common/theme';
import { useDispatch } from 'react-redux';
import {
  setPlan,
  setDateTime
} from './state/products.action';
import { Carousel, useCarousel } from '@chipp972/carousel';
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

const carouselId = 'products';

// eslint-disable-next-line
export const ProductsPage = ({
  packages,
  tabsData,
  dateTimeScreen,
  locationScreen,
  confirmationScreen,
  thankYouScreen
}) => {
  const { currentStepIndex, goNextStep, goPrevStep, jumpToStep } = useCarousel(carouselId);
  const dispatch = useDispatch();
  const breadcrumbLabels: string[] = [
    packages,
    dateTimeScreen,
    locationScreen,
    confirmationScreen
  ].map(R.prop('stepName'));

  const selectPlan = R.pipe(setPlan, dispatch, goNextStep);
  const selectDate = R.pipe(setDateTime, dispatch, goNextStep);

  return (
    <div className="container">
      <Breadcrumb
        currentStepIndex={currentStepIndex}
        labelList={breadcrumbLabels}
        onClick={jumpToStep}
      />
      <Carousel
        carouselId={carouselId}
        css={css`
          background-color: ${colors.black01dp};
        `}
        isScrollToTop
        isSwipeDisabled>
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
          goNextStep={goNextStep}
          goPrevStep={goPrevStep}
          prevStepName={dateTimeScreen.stepName}
          nextStepName={confirmationScreen.stepName}
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
