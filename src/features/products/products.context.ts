import { FluidObject } from 'gatsby-image';
import React from 'react';
import { CtaProps } from '../../common/components/Button';
import { LocalizedField } from '../../custom';

export type Plan = {
  id: string;
  title: string;
  description: string;
  category: {
    id: string;
  };
  image: {
    alt: string;
    fluid: FluidObject;
  };
  price: number;
  frequency?: string;
  // string array to JSON.parse
  benefits?: string;
};

export type DatoCmsPlanStep = {
  id: string;
  model: {
    apiKey: 'plan_step';
  };
  plans: Plan[];
};

export type Timeslot = {
  id: string;
  startDate: string;
  endDate: string;
};

export type DatoCmsDateTimeStep = {
  id: string;
  model: {
    apiKey: 'date_time_step';
  };
  timeslots: Timeslot[];
};

export type Location = {
  id: string;
  label: string;
  geolocation: {
    latitude: number;
    longitude: number;
  };
};

export type DatoCmsLocationStep = {
  id: string;
  model: {
    apiKey: 'location_step';
  };
  customPlaceError: string;
  customPlaceLabel: string;
  customPlacePlaceholder: string;
  locationChoiceCustomPlaceLabel: string;
  locationChoiceError: string;
  locationChoiceLabel: string;
  locations: Location[];
};

export type DatoCmsConfirmationStep = {
  id: string;
  model: {
    apiKey: 'confirmation_step';
  };
  dateChoiceLabel: string;
  emailLabel: string;
  emailPlaceholder: string;
  errorMessageNotSent: string;
  firstnamePlaceholder: string;
  firstnameLabel: string;
  lastnameLabel: string;
  lastnamePlaceholder: string;
  locationChoiceLabel: string;
  messageLabel: string;
  messagePlacholder: string;
  planChoiceLabel: string;
  requiredFieldErrorMessage: string;
  validationButtonLabel: string;
};

export type DatoCmsThankYouStep = {
  id: string;
  model: {
    apiKey: 'thank_you_step';
  };
  image: {
    alt: string;
    fluid: FluidObject;
  };
  redirectLink: CtaProps;
};

export type StepContent =
  | DatoCmsPlanStep
  | DatoCmsDateTimeStep
  | DatoCmsLocationStep
  | DatoCmsConfirmationStep
  | DatoCmsThankYouStep;

export type ProductStep<Content = StepContent> = {
  id: string;
  position: number;
  _allNameLocales: LocalizedField[];
  _allTitleLocales: LocalizedField[];
  _allDescriptionLocales: LocalizedField[];
  _allContentLocales: LocalizedField<Content>[];
};

export const ProductsContext = React.createContext({
  carouselId: 'products',
  steps: [] as [
    ProductStep<DatoCmsPlanStep>,
    ProductStep<DatoCmsDateTimeStep>,
    ProductStep<DatoCmsLocationStep>,
    ProductStep<DatoCmsConfirmationStep>,
    ProductStep<DatoCmsThankYouStep>
  ]
});
