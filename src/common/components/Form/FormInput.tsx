import { InputProps, useForm } from '@chipp972/form-validation';
import { css } from '@emotion/core';
import { FormControl, FormLabel, TextField, TextFieldProps } from '@material-ui/core';
import React from 'react';

type Props = TextFieldProps & InputProps & { hasBigLabel?: boolean };

export const FormInput: React.FC<Props> = ({
  label,
  name,
  validate,
  errorMessage,
  onFieldReset,
  onFieldValidated,
  variant = 'outlined',
  rows = 5,
  disabled,
  required,
  className,
  hasBigLabel = false,
  ...props
}) => {
  const { hasError } = useForm({ name, validate, errorMessage, onFieldReset, onFieldValidated });
  return (
    <FormControl
      className={className}
      component="fieldset"
      error={hasError}
      disabled={disabled}
      required={required}
      css={css`
        display: flex;
        flex-direction: column;
      `}>
      {hasBigLabel && <FormLabel htmlFor={name}>
        {label}
      </FormLabel>}
      <TextField
        {...props}
        error={hasError}
        id={name}
        name={name}
        label={!hasBigLabel && label}
        variant={variant}
        disabled={disabled}
        required={required}
        helperText={hasError && errorMessage}
        rows={rows}
      />
    </FormControl>
  );
};
