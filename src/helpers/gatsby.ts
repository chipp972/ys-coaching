import * as R from 'ramda';

export type GatsbyImage =
  | { childImageSharp: { fluid: { src: string } } }
  | string;

export const getImageSrc = (image: GatsbyImage) =>
  R.pathOr(image, ['childImageSharp', 'fluid', 'src'], image);
