import { useCarousel } from '@chipp972/carousel';
import * as R from 'ramda';
import React from 'react';
import { useI18n } from '../../common/layout/Multilanguage';
import { ProductsContext, StepContent } from './products.context';

export type LocalizedProductStep<Content = StepContent> = {
  id: string;
  position: number;
  stepName: string;
  title: string;
  description: string;
  content: Content;
};

export const useProductsContext = () => {
  const { carouselId, steps } = React.useContext(ProductsContext);
  const { getLocalizedContent } = useI18n();
  const { currentStepIndex, goPrevStep, goNextStep } = useCarousel(carouselId);

  const localizedSteps: LocalizedProductStep[] = steps.map(({
    _allTitleLocales,
    _allNameLocales,
    _allDescriptionLocales,
    _allContentLocales,
    ...data
  }) => ({
    ...data,
    title: getLocalizedContent(_allTitleLocales),
    stepName: getLocalizedContent(_allNameLocales),
    description: getLocalizedContent(_allDescriptionLocales),
    content: getLocalizedContent(_allContentLocales)[0]
  }));

  // Remove the last step from the breadcrumb labels
  const breadcrumbLabels: string[] = localizedSteps
    .slice(0, -1)
    .map(R.pathOr('', ['stepName']));

  const currentStep = localizedSteps[currentStepIndex];
  const prevStep = currentStepIndex > 0 ? localizedSteps[currentStepIndex - 1] : null;
  const nextStep = currentStepIndex < localizedSteps.length - 1 ? localizedSteps[currentStepIndex + 1] : null;

  return {
    steps: localizedSteps,
    currentStepIndex,
    currentStep,
    prevStep,
    nextStep,
    goPrevStep,
    goNextStep,
    breadcrumbLabels
  };
};
