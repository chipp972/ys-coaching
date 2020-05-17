import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { GatsbyImage, getImageSrc } from '../../helpers/gatsby';
import { colors, mediaQueries } from '../../theme';

export const defaultHeight = '40rem';

export type FullWidthImageStyleProps = {
  image: GatsbyImage;
  hasText?: boolean;
  height?: number | string;
  mobileHeight?: number | string;
  overlayColor?: string;
};

export const useFullWidthImageStyle = makeStyles({
  fullWidthImageContainer: ({
    image,
    hasText,
    height = defaultHeight,
    mobileHeight = defaultHeight,
    overlayColor = colors.overlay
  }: FullWidthImageStyleProps) => ({
    backgroundImage: `url(${getImageSrc(image)})`,
    width: '100vw',
    height: mobileHeight,
    position: 'relative',
    left: '50%',
    right: '50%',
    margin: '0 -50vw',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&::before': {
      content: hasText ? '""' : 'none',
      backgroundColor: overlayColor,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    [mediaQueries.fromTablet]: {
      height
    }
  })
});

type Props = {
  image: GatsbyImage;
  overlayColor?: string;
  height?: string;
  mobileHeight?: string;
  className?: string;
};

export const FullWidthImage: React.FC<Props> = ({
  image,
  overlayColor,
  children,
  mobileHeight,
  height,
  className
}) => {
  const { fullWidthImageContainer } = useFullWidthImageStyle({
    image,
    hasText: React.Children.count(children) > 0,
    mobileHeight,
    height,
    overlayColor
  });
  return (
    <div className={clsx(className, fullWidthImageContainer)}>
      {children}
    </div>
  );
};
