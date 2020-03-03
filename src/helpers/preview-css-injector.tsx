/* eslint-disable fp/no-class, fp/no-mutation */
import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/core';

export class CSSInjector extends React.Component {
  cache: EmotionCache;

  constructor (props) {
    super(props);
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHead = iframe.contentDocument.head;
    this.cache = createCache({ container: iframeHead });
  }

  render () {
    const { children } = this.props;
    return (
      <CacheProvider value={this.cache}>
        {children}
      </CacheProvider>
    );
  }
}
