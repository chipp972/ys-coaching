import React from 'react';
import { BlogPost } from './blog.page';
import { PreviewProps } from '../../helpers/gatsby';

export const BlogPostPreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => (
  <BlogPost
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);
