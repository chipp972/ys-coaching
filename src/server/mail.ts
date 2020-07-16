import { Email as Mailjet } from 'node-mailjet';
export const isSandboxMode = process.env.MAILJET_SANDBOX === '1';

export const emailSendApiVersion = 'v3.1';
export const emailApiVersion = 'v3';

enum EmailType {
  transactional = 'transactional',
  bulk = 'bulk',
  unknown = 'unknown'
}

enum EmailStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Deleted = 'Deleted'
}

type MailSender = {
  ID: number;
  Name: string;
  Email: string;
  EmailType: EmailType;
  Status: EmailStatus;
  IsDefaultSender: boolean;
};

type MailTemplate = {
  ID: number;
  Name: string;
};

export const getMailSender = async ({ isBulk, mailjet }: {isBulk: boolean; mailjet: Mailjet.Client}) => {
  const sender = await mailjet.get('sender', { version: emailApiVersion }).request();
  const { Email, Name } = (sender.body.Data as MailSender[])
    .find(({ Status, EmailType: Type }) => Status === EmailStatus.Active && isBulk
      ? Type === EmailType.bulk
      : Type === EmailType.transactional);

  return { Email, Name };
};

export const getTemplateId = async ({ templateName, mailjet }: {templateName: string; mailjet: Mailjet.Client}) => {
  const template = await mailjet.get('template', { version: emailApiVersion }).request();
  const { ID } = (template.body.Data as MailTemplate[])
    .find(({ Name }) => Name === templateName);

  return ID;
};
