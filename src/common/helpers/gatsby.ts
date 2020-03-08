import * as R from 'ramda';
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

export const getImageSrc = (image: GatsbyImage) =>
  R.pathOr(image, ['childImageSharp', 'fluid', 'src'], image);
