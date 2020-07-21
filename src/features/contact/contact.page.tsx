import { Form } from '@chipp972/form-validation';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { LoadingButton, LoadingStatus, PrimaryButton, RedirectLink } from '../../common/components/Button';
import { handleFormSubmitWithRecaptcha } from '../../common/helpers/form-submit';
import { ReCaptchaAction, useReCaptcha } from '../../common/helpers/recaptcha';
import { Content, ContentProps, PageContent, Section, SubSection } from '../../common/layout';
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

type Props = {
  ContentComponent?: React.FC<ContentProps>;
};

export const ContactPage: React.FC<Props> = ({ ContentComponent = Content }) => {
  const { successRedirectLink, redirectLink, contribution, body } = React.useContext(ContactContext);
  const [status, updateStatus] = React.useState(LoadingStatus.NOT_STARTED);
  const classes = useStyles();
  useReCaptcha();

  return (
    <PageContent>
      <Section>
        <SubSection>
          <ContentComponent content={body} />
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
                errorMessage={contribution.errorMessageNotSent}
                successMessage={contribution.successMessageSent}
                successRedirectLink={successRedirectLink}>

                <PrimaryButton
                  variant="contained"
                  className={classes.sendButton}
                  type="submit">
                  {contribution.validationButtonLabel}
                </PrimaryButton>

              </LoadingButton>
            </div>

          </Form>
        </SubSection>

        {redirectLink?.url && <RedirectLink {...redirectLink} />}
      </Section>
    </PageContent>
  );
};
