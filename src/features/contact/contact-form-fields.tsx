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

export const ContactFormFields = () => {
  const { contribution } = React.useContext(ContactContext);
  const classes = useStyles();
  return (
    <>
      <FormInput
        className={classes.fieldset}
        label={contribution.emailLabel}
        placeholder={contribution.emailPlaceholder}
        errorMessage={contribution.requiredErrorMessage}
        name={Fieldnames.email}
        type="email"
        margin="dense"
        required
      />

      <div className={classes.twoFieldContainer}>
        <FormInput
          className={clsx(classes.fieldset, classes.leftFieldset)}
          label={contribution.firstNameLabel}
          placeholder={contribution.firstNamePlaceholder}
          errorMessage={contribution.requiredErrorMessage}
          name={Fieldnames.firstName}
          margin="dense"
          required
        />

        <FormInput
          className={classes.fieldset}
          label={contribution.lastNameLabel}
          placeholder={contribution.lastNamePlaceholder}
          errorMessage={contribution.requiredErrorMessage}
          name={Fieldnames.lastName}
          margin="dense"
          required
        />
      </div>

      <FormInput
        className={classes.fieldset}
        label={contribution.messageLabel}
        placeholder={contribution.messagePlaceholder}
        errorMessage={contribution.requiredErrorMessage}
        name={Fieldnames.message}
        margin="dense"
        multiline
        required
      />
    </>
  );
};
