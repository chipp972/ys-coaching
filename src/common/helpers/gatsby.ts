import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { Collection } from 'immutable';

export type GatsbyImage =
  | { childImageSharp: { fluid: FluidObject } }
  | string;

export type PreviewProps = {
  entry: Collection<string, any>;
  fieldsMetaData: Collection<string, any>;
  getAsset: () => any;
  widgetFor: (widgetName: string) => any;
};

export const getImageSrc = (image: any) => image?.fluid?.src || image?.src || image;

export const datoCmsHeaderFragment = graphql`
  fragment HeaderContent on DatoCmsHeader {
    _allTitleLocales {
      locale
      value
    }
    _allSubtitleLocales {
      locale
      value
    }
    image {
      fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
        ...GatsbyDatoCmsSizes
      }
    }
  }`;

export const datoCmsCtaFragment = graphql`
  fragment CtaContent on DatoCmsCta {
    url
    _allLabelLocales {
      locale
      value
    }
    isInternal
  }`;
