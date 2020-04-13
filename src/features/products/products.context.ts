import React from 'react';

export const ProductsContext = React.createContext({
  contribution: {
    locationChoiceCustomPlaceLabel: 'At your place',
    locationChoiceLabel: 'Your preferred place',
    locationChoiceError: 'Please select a place to meet or provide your own place',
    customerPlaceLabel: 'Choose a place',
    customerPlacePlaceholder: '1 rue du général Leclerc ...',
    customerPlaceError: 'We are missing an address to meet'
  }
});
