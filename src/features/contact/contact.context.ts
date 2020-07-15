import * as R from 'ramda';
import React from 'react';
import { CtaProps } from '../../common/components/Button';
import { GatsbyImage } from '../../common/helpers/gatsby';

export const ContactContext = React.createContext({
  title: '',
  subtitle: '',
  image: {} as GatsbyImage,
  contribution: {
    validationButtonLabel: '',
    emailLabel: '',
    emailPlaceholder: '',
    firstNameLabel: '',
    firstNamePlaceholder: '',
    lastNameLabel: '',
    lastNamePlaceholder: '',
    messageLabel: '',
    messagePlaceholder: '',
    requiredErrorMessage: '',
    successMessageSent: '',
    errorMessageNotSent: ''
  },
  redirectLink: {} as CtaProps,
  body: ''
});

export const getContactPageContextData = (data: PageData) => {
  const isPreview = !R.hasPath(['markdownRemark', 'frontmatter'], data);
  const contribution = isPreview ? data : R.path(['markdownRemark', 'frontmatter'], data);
  return {
    ...contribution,
    body: data.markdownRemark?.html
  };
};
