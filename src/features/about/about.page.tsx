import React from 'react';
import { RedirectLink } from '../../common/components/Button';
import { Content, ContentProps, PageContent, Section } from '../../common/layout';
import { AboutContext } from './about.context';

type Props = {
  ContentComponent?: React.FC<ContentProps>;
};

export const AboutPage: React.FC<Props> = ({ ContentComponent = Content }) => {
  const { redirectLink, content } = React.useContext(AboutContext);

  return (
    <PageContent>
      <Section>
        <ContentComponent content={content} />
        <RedirectLink variant="contained" {...redirectLink} />
      </Section>
    </PageContent>
  );
};
