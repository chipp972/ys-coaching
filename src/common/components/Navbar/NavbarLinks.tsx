import { css } from '@emotion/core';
import React from 'react';
import { Instagram, Youtube } from 'react-feather';
import { useSiteMetadata } from '../../hook/use-site-metadata';
import { colors } from '../../theme';

const SocialLink = ({ href, label, icon: Icon, ...props }) => (
  <a
    aria-label={label}
    className="navbar-item social-icon"
    css={css`
      :hover {
        .social-icon {
          stroke: ${colors.crimson200};
        }
      }
    `}
    href={href}
    target="_blank"
    rel="noopener noreferrer">
    <Icon
      {...props}
      aria-hidden="true"
      className="social-icon"
      css={css`
        fill: ${colors.transparent};
        width: 2.5rem;
        height: auto;
      `}
    />
  </a>
);

export const NavbarLinks: React.FC = () => {
  const { instagramUrl, youtubeUrl } = useSiteMetadata();
  return (
    <div className="navbar-end has-text-centered">
      <SocialLink
        href={instagramUrl}
        label="Y's coaching Instagram"
        icon={Instagram}
      />
      <SocialLink
        style={{ transform: 'scale(1.2)' }}
        href={youtubeUrl}
        label="Y's coaching Youtube channel"
        icon={Youtube}
      />
    </div>
  );
};
