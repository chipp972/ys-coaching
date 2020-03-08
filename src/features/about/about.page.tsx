import React from 'react';
import { Content, ContentProps } from '../../common/layout';
import { PageTitle, mediaQueries } from '../../common/theme';
import { css } from '@emotion/core';
import { getImageSrc, GatsbyImage } from '../../common/helpers/gatsby';

type Props = {
  title: string;
  subtitle: string;
  mainImage: GatsbyImage;
  content?: string;
  ContentComponent?: React.FC<ContentProps>;
}

export const AboutPage: React.FC<Props> = ({
  title,
  subtitle,
  mainImage,
  content,
  ContentComponent
}) => {
  const PageContent = ContentComponent || Content;

  return (
    <section className="section section--gradient">
      <PageTitle title={title} subtitle={subtitle} />
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div
              css={css`
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                margin-top: 3rem;

                ${mediaQueries.fromTablet} {
                  flex-direction: row-reverse;
                  align-items: flex-start;
                }
              `}>
              <img
                css={css`
                  max-width: 500px;
                `}
                src={getImageSrc(mainImage)}
                alt="Yuto"
              />
              <PageContent
                className="content"
                css={css`
                  margin-right: 1rem;
                `}
                content={content}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
