import { css } from '@emotion/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Instagram, Youtube } from 'react-feather';
import { useSiteMetadata } from '../hook/use-site-metadata';
import { colors } from '../theme';

const SocialLink = ({ href, label, icon: Icon, ...props }) => {
  const theme = useTheme();
  return (
    <a
      aria-label={label}
      className="navbar-item social-icon"
      css={css`
        :hover {
          .social-icon {
            stroke: ${theme.palette.secondary.main};
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
};

export const SocialLinks: React.FC = () => {
  const { instagramUrl, youtubeUrl } = useSiteMetadata();
  return (
    <>
      <SocialLink href={instagramUrl} label="Y's coaching Instagram" icon={Instagram} />
      <SocialLink
        style={{ transform: 'scale(1.2)' }}
        href={youtubeUrl}
        label="Y's coaching Youtube channel"
        icon={Youtube}
      />
    </>
  );
};
