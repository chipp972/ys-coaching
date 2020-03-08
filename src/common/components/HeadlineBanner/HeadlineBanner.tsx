import React from 'react';
import { FullWidthImage } from '../ImageContainer';
import { PageTitle } from '../../theme';
import { GatsbyImage } from '../../helpers/gatsby';
import { headlineBannerHeight } from '../../layout';

type Props = {
  image: GatsbyImage;
  title: string;
  subtitle?: string;
};

export const HeadlineBanner: React.FC<Props> = ({ image, title, subtitle }) => (
  <FullWidthImage
    image={image}
    mobileHeight={headlineBannerHeight.mobile}
    height={headlineBannerHeight.fromTablet}>
    <PageTitle title={title} subtitle={subtitle} />
  </FullWidthImage>
);
