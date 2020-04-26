import { useCarousel } from '@chipp972/carousel';
import React from 'react';
import { ProductsContext } from './products.context';

export const useProductsContext = () => {
  const {
    carouselId,
    packages,
    dateTimeScreen,
    locationScreen,
    confirmationScreen,
    thankYouScreen,
    productCategories
  } = React.useContext(ProductsContext);

  const { currentStepIndex, goPrevStep, goNextStep } = useCarousel(carouselId);
  const stepList = [packages, dateTimeScreen, locationScreen, confirmationScreen, thankYouScreen];
  const breadcrumbLabels = stepList.slice(0, -1).map((step) => step.stepName);

  const currentStep = stepList[currentStepIndex];
  const prevStep = currentStepIndex > 0 ? stepList[currentStepIndex - 1] : null;
  const nextStep = currentStepIndex < stepList.length - 1 ? stepList[currentStepIndex + 1] : null;
  return {
    currentStepIndex,
    currentStep,
    prevStep,
    nextStep,
    goPrevStep,
    goNextStep,
    breadcrumbLabels,
    packages,
    dateTimeScreen,
    locationScreen,
    confirmationScreen,
    thankYouScreen,
    productCategories
  };
};
