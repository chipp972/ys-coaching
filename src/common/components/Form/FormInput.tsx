import React from 'react';
import { css } from '@emotion/core';
import { useForm, InputProps } from '@chipp972/form-validation';
import { FormControl, TextField, TextFieldProps } from '@material-ui/core';

type Props = TextFieldProps & InputProps;

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
      <TextField
        {...props}
        error={hasError}
        id={name}
        name={name}
        label={label}
        variant={variant}
        disabled={disabled}
        required={required}
        helperText={hasError && errorMessage}
        rows={rows}
      />
    </FormControl>
  );
};
