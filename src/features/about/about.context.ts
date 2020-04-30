import React from 'react';

export const AboutContext = React.createContext({
  redirectLink: {
    label: '',
    url: '',
    isInternal: true
  },
  content: ''
});
