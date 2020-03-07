import * as R from 'ramda';
import { FluidObject } from 'gatsby-image';

export type GatsbyImage =
  | { childImageSharp: { fluid: FluidObject } }
  | string;

export const getImageSrc = (image: GatsbyImage) =>
  R.pathOr(image, ['childImageSharp', 'fluid', 'src'], image);
