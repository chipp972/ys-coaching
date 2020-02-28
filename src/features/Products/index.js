import * as R from 'ramda';
import React from 'react';
import { createActionCreator, createReducer } from '@chipp972/redux-helpers';
import ReactSwipe from 'react-swipe';
import { PackageChoice } from './Steps/PackageChoice';
import { Breadcrumbs } from './Breadcrumbs';
import { css } from '@emotion/core';
import { colors } from '../../components/theme';

const actions = {
  PRODUCTS_SET_PACKAGE: 'PRODUCTS_SET_PACKAGE',
  PRODUCTS_SET_DATE_TIME: 'PRODUCTS_SET_DATE_TIME',
  PRODUCTS_SET_LOCATION: 'PRODUCTS_SET_LOCATION',
  PRODUCTS_SET_EMAIL: 'PRODUCTS_SET_EMAIL',
  PRODUCTS_SET_FIRSTNAME: 'PRODUCTS_SET_FIRSTNAME',
  PRODUCTS_SET_LASTNAME: 'PRODUCTS_SET_LASTNAME',
  PRODUCTS_SET_COMMENT: 'PRODUCTS_SET_COMMENT'
};

const initialState = {
  plan: null,
  date: null,
  time: null,
  location: null,
  email: null,
  firstName: null,
  lastName: null,
  comment: null
};

const setPackage = createActionCreator(actions.PRODUCTS_SET_PACKAGE);

export const productsReducer = createReducer(
  {
    [actions.PRODUCTS_SET_PLAN]: (state, { plan }) => ({
      ...state,
      plan
    }),
    [actions.PRODUCTS_SET_DATE_TIME]: (state, { date, time }) => ({
      ...state,
      date,
      time
    }),
    [actions.PRODUCTS_SET_LOCATION]: (state, { location }) => ({
      ...state,
      location
    }),
    [actions.PRODUCTS_SET_EMAIL]: (state, { email }) => ({
      ...state,
      email
    })
  },
  initialState
);

export const Products = () => {
  const [state, dispatch] = React.useReducer(initialState);
  const swipeRef = React.useRef(null);
  const selectPackage = R.pipe(
    setPackage,
    dispatch
  );
  const goNextStep = R.path(['current', 'next'], swipeRef);
  const goPrevStep = R.path(['current', 'prev'], swipeRef);

  return (
    <div>
      <Breadcrumbs />
      <ReactSwipe
        css={css`
          background-color: ${colors.black01dp};
        `}
        ref={swipeRef}
        swipeOptions={{ continuous: false, speed: 500 }}>
        <PackageChoice
          selectPackage={selectPackage}
          goNextStep={goNextStep}
          goPrevStep={goPrevStep}
        />
        {state}
      </ReactSwipe>
    </div>
  );
};
