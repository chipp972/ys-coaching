import React from 'react';
import { CtaProps } from '../../common/components/Button';
import { LocalizedField } from '../../custom';

export const ContactContext = React.createContext({
  _allContentLocales: [] as LocalizedField[],
  messageLabel: '',
  messagePlaceholder: '',
  requiredFieldErrorMessage: '',
  successMessageSent: '',
  validationButtonLabel: '',
  lastnameLabel: '',
  lastnamePlaceholder: '',
  firstnamePlaceholder: '',
  firstnameLabel: '',
  errorMessageNotSent: '',
  emailPlaceholder: '',
  emailLabel: '',
  mailCta: {} as CtaProps,
  successCta: {} as CtaProps
});
