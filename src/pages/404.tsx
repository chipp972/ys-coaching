import React from 'react';
import { Page, PageContent } from '../common/layout';

const NotFoundPage = () => (
  <Page pathname="/404">
    <PageContent>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </PageContent>
  </Page>
);

export default NotFoundPage;
