import { Carousel } from '@chipp972/carousel';
import { css } from '@emotion/core';
import React from 'react';
import { Breadcrumb } from '../../common/components/Breadcrumb/Breadcrumb';
import { PageContent } from '../../common/layout';
import { colors } from '../../common/theme';
import { useProductsContext } from './products.hook';
import { ProductStep } from './ProductStep';
import { reducerKey as carouselId } from './state/products.constant';

export const ProductsPage = () => {
  const { breadcrumbLabels, currentStepIndex, steps } = useProductsContext();

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
        {steps.map((step) => <ProductStep key={step.id} {...step} />)}
      </Carousel>
    </PageContent>
  );
};
