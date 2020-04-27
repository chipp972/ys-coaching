import { graphql, useStaticQuery } from 'gatsby';

type Route = {
  name: string;
  to: string;
};

export type SiteMetadata = {
  title: string;
  description: string;
  routes: Route[];
  instagramUrl: string;
  youtubeUrl: string;
};

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            routes {
              name
              to
            }
            instagramUrl
            youtubeUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
