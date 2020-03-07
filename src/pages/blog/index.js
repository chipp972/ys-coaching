import React from 'react';

import { Page } from '../../common/layout';
import { BlogRoll } from '../../features/blog/components/BlogRoll';

const BlogIndexPage = ({ location }) => (
  <Page pathname={location.pathname}>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: "url('/img/blog-index.jpg')"
      }}>
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem'
        }}>
        Latest Stories
      </h1>
    </div>
    <section className="section">
      <div className="container">
        <div className="content">
          <BlogRoll />
        </div>
      </div>
    </section>
  </Page>
);

export default BlogIndexPage;
