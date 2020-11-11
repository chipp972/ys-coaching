import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { FormInput } from '../../common/components/Form';
import { Fieldnames } from './contact.constants';
import { ContactContext } from './contact.context';

const useStyles = makeStyles((theme: Theme) => ({
  fieldset: {
    flexGrow: 1,
    marginTop: theme.spacing(2)
  },
  leftFieldset: {
    marginRight: theme.spacing(2)
  },
  twoFieldContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

// eslint-disable-next-line max-lines-per-function
export const ContactFormFields = () => {
  const {
    emailLabel,
    emailPlaceholder,
    requiredFieldErrorMessage,
    firstnameLabel,
    firstnamePlaceholder,
    lastnameLabel,
    lastnamePlaceholder,
    messageLabel,
    messagePlaceholder
  } = React.useContext(ContactContext);
  const classes = useStyles();
  return (
    <>
      <FormInput
        className={classes.fieldset}
        label={emailLabel}
        placeholder={emailPlaceholder}
        errorMessage={requiredFieldErrorMessage}
        name={Fieldnames.email}
        type="email"
        margin="dense"
        required
      />

      <div className={classes.twoFieldContainer}>
        <FormInput
          className={clsx(classes.fieldset, classes.leftFieldset)}
          label={firstnameLabel}
          placeholder={firstnamePlaceholder}
          errorMessage={requiredFieldErrorMessage}
          name={Fieldnames.firstName}
          margin="dense"
          required
        />

        <FormInput
          className={classes.fieldset}
          label={lastnameLabel}
          placeholder={lastnamePlaceholder}
          errorMessage={requiredFieldErrorMessage}
          name={Fieldnames.lastName}
          margin="dense"
          required
        />
      </div>

      <FormInput
        className={classes.fieldset}
        label={messageLabel}
        placeholder={messagePlaceholder}
        errorMessage={requiredFieldErrorMessage}
        name={Fieldnames.message}
        margin="dense"
        multiline
        required
      />
    </>
  );
};
