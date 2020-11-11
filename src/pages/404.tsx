import { css } from '@emotion/core';
import { graphql, PageProps } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React from 'react';
import { CtaProps, RedirectLink } from '../common/components/Button';
import { HTMLContent, Page, PageContent, Section } from '../common/layout';
import { useI18n } from '../common/layout/Multilanguage';
import { LocalizedField, PageData } from '../custom';

type NotFoundPage = {
  _allContentLocales: LocalizedField[];
  cta: CtaProps;
};

const NotFoundPage: React.FC<PageProps<PageData<NotFoundPage>>> = ({ data, location }) => { 
  const { getLocalizedContent } = useI18n();
  const content = getLocalizedContent(data.page._allContentLocales);

  return (
    <Page pathname={location.pathname}>
    <HelmetDatoCms seo={data.page.seoMetaTags} />
      <PageContent>
        <Section css={css`
          text-align: center;
          margin-top: 50px;
        `}>
          <HTMLContent content={content}></HTMLContent>
          <RedirectLink {...data.page.cta} />
        </Section>
      </PageContent>
    </Page>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPageTemplate {
    page: datoCmsNotFoundPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      _allContentLocales {
        locale
        value
      }
      cta {
        ...CtaContent
      }
    }
  }
`;
