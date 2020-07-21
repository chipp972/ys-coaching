import React from 'react';

type ProductCategory = {
  label: string;
  value: string;
  position: number;
  description?: string;
};

type Location = {
  label: React.ReactNode;
  address: string;
};

export const ProductsContext = React.createContext({
  carouselId: 'products',
  title: 'Coaching services',
  subtitle: 'Let\'s work together',
  image: null,
  productCategories: [] as ProductCategory[],
  packages: {
    stepName: 'Choose a program',
    heading: 'How do you want us to work together ?',
    description: '',
    plans: []
  },
  dateTimeScreen: {
    stepName: 'Date and time',
    heading: 'When are you available ?',
    description: '',
    availableTimeslots: []
  },
  locationScreen: {
    stepName: 'Location',
    heading: 'Where do you prefer to train ?',
    description: '',
    contribution: {
      locationChoiceCustomPlaceLabel: 'At your place',
      locationChoiceLabel: 'Your preferred place',
      locationChoiceError: 'Please select a place to meet or provide your own place',
      customerPlaceLabel: 'Choose a place',
      customerPlacePlaceholder: '1 rue du général Leclerc ...',
      customerPlaceError: 'We are missing an address to meet'
    },
    availableLocations: [] as Location[]
  },
  confirmationScreen: {
    stepName: 'Confirmation',
    heading: 'IS EVERYTHING OK FOR YOU ?',
    description: '',
    contribution: {
      planChoiceLabel: '',
      dateChoiceLabel: '',
      locationChoiceLabel: '',
      validationButtonLabel: '',
      emailLabel: '',
      emailPlaceholder: '',
      firstNameLabel: '',
      firstNamePlaceholder: '',
      lastNameLabel: '',
      lastNamePlaceholder: '',
      additionalInfoLabel: '',
      additionalInfoPlaceholder: '',
      requiredErrorMessage: '',
      errorMessageNotSent: ''
    }
  },
  thankYouScreen: {
    stepName: 'Schedule our meeting',
    heading: 'Thank you',
    description: '',
    content: '',
    image: null,
    redirectLink: {
      label: '',
      url: '',
      isInternal: true
    }
  }
});
