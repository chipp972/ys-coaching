import { Form } from '@chipp972/form-validation';
import { CircularProgress } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { Case } from 'react-case-when';
import { PrimaryButton, RedirectLink } from '../../common/components/Button';
import { getReCaptchaToken, ReCaptchaAction, useReCaptcha } from '../../common/helpers/recaptcha';
import { Content, ContentProps, PageContent, Section, SubSection } from '../../common/layout';
import { ContactFormFields } from './contact-form-fields';
import { contactRequestEndPoint } from './contact.constants';
import { ContactContext } from './contact.context';

enum MailSendingStatus {
  NOT_STARTED = 'NOT_STARTED',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

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

const handleSubmit = (updateStatus: (status: MailSendingStatus) => void) =>
  async (formData) => {
    try {
      updateStatus(MailSendingStatus.PENDING);

      const recaptchaToken = await getReCaptchaToken(ReCaptchaAction.SUBMIT_CONTACT);
    
      const response = await fetch(contactRequestEndPoint, {
        method: 'POST',
        body: JSON.stringify({ ...formData, recaptchaToken })
      });

      const result = await response.json();

      if (!response.ok || result.response?.Messages?.[0].Status !== 'success') {
        throw new Error();
      }
      updateStatus(MailSendingStatus.SUCCESS);
    } catch (error) {
      updateStatus(MailSendingStatus.ERROR);
    }
  };

export const ContactPage: React.FC<Props> = ({ ContentComponent = Content }) => {
  const { redirectLink, contribution, body } = React.useContext(ContactContext);
  const [status, updateStatus] = React.useState(MailSendingStatus.NOT_STARTED);
  const classes = useStyles();
  useReCaptcha();

  return (
    <PageContent>
      <Section>
        <SubSection>
          <ContentComponent content={body} />
        </SubSection>

        <SubSection>
          <Form className={classes.form} onValidationSuccess={handleSubmit(updateStatus)}>
            <ContactFormFields />
            <div className={classes.sendButtonContainer}>
              <Case when={[MailSendingStatus.NOT_STARTED, MailSendingStatus.ERROR].includes(status)}>
                <PrimaryButton
                  variant="contained"
                  className={classes.sendButton}
                  type="submit">
                  {contribution.validationButtonLabel}
                </PrimaryButton>
              </Case>

              <Case when={status === MailSendingStatus.PENDING}>
                <CircularProgress color="primary" />
              </Case>

              <Case when={status === MailSendingStatus.SUCCESS}>
                <Alert variant="filled" severity="success">
                  {contribution.successMessageSent}
                </Alert>
              </Case>

              <Case when={status === MailSendingStatus.ERROR}>
                <Alert className={classes.sendButtonContainer} variant="filled" severity="error">
                  {contribution.errorMessageNotSent}
                </Alert>
              </Case>
            </div>

          </Form>
        </SubSection>

        {redirectLink?.url && <RedirectLink {...redirectLink} />}
      </Section>
    </PageContent>
  );
};
