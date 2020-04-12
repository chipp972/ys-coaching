import React from 'react';
import { colors } from '../../theme';
import { FormHelperText } from '@material-ui/core';

type ErrorMessageProps = {
  hasError: boolean;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, hasError }) =>
  hasError && <FormHelperText color={colors.error}>{children}</FormHelperText>;

export const HelperText: React.FC = ({ children }) =>
  <FormHelperText color={colors.info}>{children}</FormHelperText>;
