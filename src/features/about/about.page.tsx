import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { RedirectLink } from '../../common/components/Button';
import { Content, ContentProps, PageContent, Section } from '../../common/layout';
import { AboutContext } from './about.context';

const useStyles = makeStyles({
  redirectLink: {
    width: '100%'
  }
});

type Props = {
  ContentComponent?: React.FC<ContentProps>;
};

export const AboutPage: React.FC<Props> = ({ ContentComponent = Content }) => {
  const { redirectLink, content } = React.useContext(AboutContext);
  const classes = useStyles();

  return (
    <PageContent>
      <Section>
        <ContentComponent content={content} />
        <RedirectLink className={classes.redirectLink} {...redirectLink} />
      </Section>
    </PageContent>
  );
};
