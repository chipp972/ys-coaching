import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { RedirectLink } from '../../common/components/Button';
import { HTMLContent, PageContent, Section } from '../../common/layout';
import { useI18n } from '../../common/layout/Multilanguage';
import { AboutContext, AboutSection } from './about.context';

const useStyles = makeStyles({
  cta: {
    width: '100%'
  }
});

export const AboutPage: React.FC = () => {
  const { cta, _allContentLocales } = React.useContext(AboutContext);
  const classes = useStyles();
  const { getLocalizedContent } = useI18n();
  const content: AboutSection[] = getLocalizedContent(_allContentLocales);

  return (
    <PageContent>
      <Section>
        {content.map(({ id, image, imagePosition, title, text }) => (
          <div key={id}>
            <Typography variant="h3" component="h3">{title}</Typography>
            <HTMLContent content={text}>
              {image && <img className={imagePosition} src={image.fluid.src} alt={image.alt} />}
            </HTMLContent>
          </div>
        ))}
        <RedirectLink className={classes.cta} {...cta} />
      </Section>
    </PageContent>
  );
};
