import { css } from '@emotion/core';
import { IconButton } from '@material-ui/core';
import React from 'react';
import { Instagram, Youtube } from 'react-feather';
import { useSiteMetadata } from '../hook/use-site-metadata';

const SocialLink = ({ href, label, icon: Icon, ...props }) => (
    <IconButton
      {...props}
      aria-label={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      <Icon
        aria-hidden="true"
        css={css`
          width: 2.5rem;
          height: auto;
        `}
      />
    </IconButton>
  );

export const SocialLinks: React.FC<React.HTMLAttributes<HTMLAnchorElement>> = (props) => {
  const { instagramUrl, youtubeUrl } = useSiteMetadata();
  return (
    <>
      <SocialLink
        {...props}
        href={instagramUrl}
        label="Y's coaching Instagram"
        icon={Instagram}
      />
      <SocialLink
        {...props}
        href={youtubeUrl}
        label="Y's coaching Youtube channel"
        icon={Youtube}
      />
    </>
  );
};
