import React from 'react';
import { Page } from '../../common/layout';

export default ({ location }) => (
  <Page pathname={location.pathname}>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>This is a custom thank you page for form submissions</p>
        </div>
      </div>
    </section>
  </Page>
);
