import * as R from 'ramda';
import React from 'react';
import ReactSwipe from 'react-swipe';
import { PlanChoice } from './components/Steps/PlanChoice';
import { Breadcrumb } from '../../common/components/Breadcrumb/Breadcrumb';
import { css } from '@emotion/core';
import { colors } from '../../common/theme';
import { useDispatch } from 'react-redux';
import { setPlan, goNextStep, jumpToStep } from './state/products.action';

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
  dateTimeScreen: StepData;
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
  const selectPlan = R.pipe(setPlan, dispatch, nextStep);

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
      <ReactSwipe
        css={css`
          background-color: ${colors.black01dp};
        `}
        ref={swipeRef}
        swipeOptions={{ continuous: false, speed: 500 }}>
        <div>
          <PlanChoice
            heading={packages.heading}
            description={packages.description}
            tabsData={tabsData}
            onChoice={selectPlan}
          />
        </div>
        <div>
          <PlanChoice
            heading={packages.heading}
            description={packages.description}
            tabsData={tabsData}
            onChoice={selectPlan}
          />
        </div>
        <div>
          <PlanChoice
            heading={packages.heading}
            description={packages.description}
            tabsData={tabsData}
            onChoice={selectPlan}
          />
        </div>
      </ReactSwipe>
    </div>
  );
};
