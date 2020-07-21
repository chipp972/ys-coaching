import { Carousel } from '@chipp972/carousel';
import { css } from '@emotion/core';
import React from 'react';
import { Breadcrumb } from '../../common/components/Breadcrumb/Breadcrumb';
import { PageContent } from '../../common/layout';
import { colors } from '../../common/theme';
import { ConfirmationStep, DateTimeStep, PlanChoice, ThankYouStep } from './components';
import { LocationStep } from './components/LocationStep/LocationStep';
import { useProductsContext } from './products.hook';
import { reducerKey as carouselId } from './state/products.constant';

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

export const ProductsPage = () => {
  const { breadcrumbLabels, currentStepIndex } = useProductsContext();

  return (
    <PageContent>
      <Breadcrumb
        currentStepIndex={currentStepIndex}
        labelList={breadcrumbLabels}
      />
      <Carousel
        carouselId={carouselId}
        css={css`
          background-color: ${colors.black01dp};
        `}
        isScrollToTop
        isSwipeDisabled>
        <PlanChoice />
        <DateTimeStep />
        <LocationStep />
        <ConfirmationStep />
        <ThankYouStep />
      </Carousel>
    </PageContent>
  );
};
