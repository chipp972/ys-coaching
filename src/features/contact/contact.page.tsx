import { Form } from '@chipp972/form-validation';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { LoadingButton, LoadingStatus, PrimaryButton, RedirectLink } from '../../common/components/Button';
import { handleFormSubmitWithRecaptcha } from '../../common/helpers/form-submit';
import { ReCaptchaAction, useReCaptcha } from '../../common/helpers/recaptcha';
import { HTMLContent, PageContent, Section, SubSection } from '../../common/layout';
import { useI18n } from '../../common/layout/Multilanguage';
import { ContactFormData } from '../../server/data.type';
import { ContactFormFields } from './contact-form-fields';
import { contactRequestEndPoint } from './contact.constants';
import { ContactContext } from './contact.context';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  sendButtonContainer: {
    margin: `${theme.spacing(4)} auto`,
    textAlign: 'center'
  },
  sendButton: {
    maxWidth: '30rem'
  }
}));

export const ContactPage: React.FC = () => {
  const {
    successCta,
    mailCta,
    errorMessageNotSent,
    successMessageSent,
    _allContentLocales,
    validationButtonLabel
  } = React.useContext(ContactContext);
  const [status, updateStatus] = React.useState(LoadingStatus.NOT_STARTED);
  const classes = useStyles();
  useReCaptcha();
  const { getLocalizedContent } = useI18n();

  return (
    <PageContent>
      <Section>
        <SubSection>
          <HTMLContent content={getLocalizedContent(_allContentLocales)} />
        </SubSection>

        <SubSection>
          <Form className={classes.form} onValidationSuccess={async (contactFormData: ContactFormData) => {
            updateStatus(LoadingStatus.PENDING);
            const newStatus = await handleFormSubmitWithRecaptcha({
              action: ReCaptchaAction.SUBMIT_CONTACT,
              endpoint: contactRequestEndPoint
            })(contactFormData);
            updateStatus(newStatus);
          }}>
            <ContactFormFields />

            <div className={classes.sendButtonContainer}>
              <LoadingButton
                status={status}
                errorMessage={errorMessageNotSent}
                successMessage={successMessageSent}
                successRedirectLink={successCta}>

                <PrimaryButton
                  variant="contained"
                  className={classes.sendButton}
                  type="submit">
                  {validationButtonLabel}
                </PrimaryButton>

              </LoadingButton>
            </div>

          </Form>
        </SubSection>

        <RedirectLink {...mailCta} />
      </Section>
    </PageContent>
  );
};
