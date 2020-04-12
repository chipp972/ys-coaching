import React from 'react';
import { toKebabCase } from '../../common/helpers/to-kebab-case';
import { Link } from 'gatsby';
import { Content, ContentProps } from '../../common/layout';

type Props = {
  content: string;
  ContentComponent?: React.FC<ContentProps>;
  description: string;
  title: string;
  helmet?: any;
  tags: string[];
}

export const BlogPost: React.FC<Props> = ({
  content,
  ContentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = ContentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: '6.4rem' }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={`${tag}tag`}>
                      <Link to={`/tags/${toKebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
