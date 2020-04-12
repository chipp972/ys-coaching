import React from 'react';
import { Instagram as InstagramIcon } from 'react-feather';
import { useSiteMetadata } from '../../hook/use-site-metadata';
import { colors } from '../../theme';
import { css } from '@emotion/core';

export const NavbarLinks: React.FC = () => {
  const { instagramUrl } = useSiteMetadata();
  return (
    <div className="navbar-end has-text-centered">
      <a
        className="navbar-item social-icon"
        css={css`
          :hover {
            .instagram-icon {
              stroke: ${colors.crimson200};
            }
          }
        `}
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer">
        <InstagramIcon
          className="instagram-icon"
          css={css`
            fill: ${colors.transparent};
            width: 2.5rem;
            height: auto;
          `}
        />
      </a>
    </div>
  );
};
