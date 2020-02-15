import * as R from 'ramda';

export const getImageSrc = image => R.pathOr(image, ['childImageSharp', 'fluid', 'src'], image);