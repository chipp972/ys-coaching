import React from 'react';
import { AboutPage } from './about.page';
import { PreviewProps } from '../../helpers/gatsby';

export const AboutPagePreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => (
  <AboutPage
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    mainImage={entry.getIn(['data', 'mainImage'])}
    content={widgetFor('part1')}
  />
);
