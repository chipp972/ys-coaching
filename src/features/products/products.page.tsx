import * as R from 'ramda';
import React from 'react';
import ReactSwipe from 'react-swipe';
import { PlanChoice } from './components/Steps/PlanChoice';
import { Breadcrumb } from '../../common/components/Breadcrumb/Breadcrumb';
import { css } from '@emotion/core';
import { colors } from '../../common/theme';
import { useDispatch } from 'react-redux';
import { setPlan, goNextStep, jumpToStep } from './state/products.action';
import { HeadlineBanner } from '../../common/components/HeadlineBanner/HeadlineBanner';
import { GatsbyImage } from '../../common/helpers/gatsby';

// TODO: Pass into contrib
const productJourneyLabels = [
  'Choose a program',
  'Date and time',
  'Location',
  'Confirmation'
];

export type Props = {
  heading: string;
  description: string;
  image: GatsbyImage;
  subheading: string;
  tabsData: {
    label: string;
    value: string;
    content: JSX.Element;
  };
};

// eslint-disable-next-line
export const ProductsPage = ({
  heading,
  description,
  tabsData,
  image,
  subheading
}) => {
  const swipeRef = React.useRef(null);
  const dispatch = useDispatch();

  const nextStep = R.pipe(
    R.pathOr(R.identity, ['current', 'next'], swipeRef),
    goNextStep,
    dispatch
  );

  const jumpStep = (stepIndex: number) => {
    swipeRef.current.slide(stepIndex);
    dispatch(jumpToStep(stepIndex));
  };

  // const prevStep = R.pipe(R.path(['current', 'prev'], swipeRef), goPrevStep, dispatch);
  const selectPlan = R.pipe(
    setPlan,
    dispatch,
    nextStep
  );

  // TODO: be able to pass onChoice to tabsData content
  return (
    <div className="container">
      <HeadlineBanner image={image} title={heading} subtitle={subheading} />
      <Breadcrumb
        currentStepIndex={3}
        labelList={productJourneyLabels}
        onClick={jumpStep}
      />
      <ReactSwipe
        css={css`
          background-color: ${colors.black01dp};
        `}
        ref={swipeRef}
        swipeOptions={{ continuous: false, speed: 500 }}>
        <div>
          <PlanChoice
            heading={heading}
            description={description}
            tabsData={tabsData}
            onChoice={selectPlan}
          />
        </div>
        <div>
          <PlanChoice
            heading={heading}
            description={description}
            tabsData={tabsData}
            onChoice={selectPlan}
          />
        </div>
        <div>
          <PlanChoice
            heading={heading}
            description={description}
            tabsData={tabsData}
            onChoice={selectPlan}
          />
        </div>
      </ReactSwipe>
    </div>
  );
};
