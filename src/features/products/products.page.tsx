import * as R from 'ramda';
import React from 'react';
import ReactSwipe from 'react-swipe';
import { PlanChoice } from './components/Steps/PlanChoice';
import { Breadcrumbs } from './components/Breadcrumbs';
import { css } from '@emotion/core';
import { colors } from '../../components/theme';
import { useDispatch } from 'react-redux';
import { setPlan, goNextStep } from './state/products.action';
import { HeadlineBanner } from '../../components/HeadlineBanner/HeadlineBanner';

export type NetlifyCmsImage =
  | string
  | { childImageSharp: { fluid: { src: string } } };

export type Props = {
  heading: string;
  description: string;
  image: NetlifyCmsImage;
  subheading: string;
  tabsData: {
    label: string;
    value: string;
    content: JSX.Element;
  };
};

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
  // const prevStep = R.pipe(R.path(['current', 'prev'], swipeRef), goPrevStep, dispatch);
  const selectPlan = R.pipe(
    setPlan,
    nextStep
  );

  // TODO: be able to pass onChoice to tabsData content
  return (
    <div className="container">
      <HeadlineBanner image={image} title={heading} subtitle={subheading} />
      <Breadcrumbs />
      <ReactSwipe
        css={css`
          background-color: ${colors.black01dp};
        `}
        ref={swipeRef}
        swipeOptions={{ continuous: false, speed: 500 }}>
        <PlanChoice
          heading={heading}
          description={description}
          tabsData={tabsData}
          onChoice={selectPlan}
        />
        <PlanChoice
          heading={heading}
          description={description}
          tabsData={tabsData}
          onChoice={selectPlan}
        />
      </ReactSwipe>
    </div>
  );
};
