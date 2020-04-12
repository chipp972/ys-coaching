import React from 'react';
import {
  useForm,
  InputProps
} from '@chipp972/form-validation';
import { ErrorMessage } from './FormMessages';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  RadioGroupProps
} from '@material-ui/core';

type Option = {
  label: React.ReactNode;
  value: string;
};

type Props = {
  label: string;
  options: Option[];
} & RadioGroupProps & InputProps;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(1)
  }
}));

export const FormRadioGroup: React.FC<Props> = ({
  label,
  name,
  errorMessage,
  validate,
  onFieldReset,
  onFieldValidated,
  required,
  disabled,
  options,
  className,
  ...props
}) => {
  const classes = useStyles();

  const { hasError } = useForm({
    name,
    validate,
    errorMessage,
    onFieldReset,
    onFieldValidated
  });

  return (
    <FormControl
      className={className}
      component="fieldset"
      error={hasError}
      required={required}
      disabled={disabled}>
      <FormLabel
        className={classes.root}
        id={name}
        component="label">{label}</FormLabel>
      <RadioGroup {...props} aria-label={label} id={name} name={name}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            label={option.label}
            control={<Radio required color="primary" />}
          />
        ))}
      </RadioGroup>
      <ErrorMessage hasError={hasError}>{errorMessage}</ErrorMessage>
    </FormControl>
  );
};
