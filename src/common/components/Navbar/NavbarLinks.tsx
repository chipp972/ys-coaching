import React from 'react';
import InstagramIcon from '../../../img/social/instagram.inline.svg';
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
              fill: ${colors.crimson200};
            }
          }
        `}
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer">
        <InstagramIcon
          className="instagram-icon"
          css={css`
            fill: ${colors.gray400};
            width: 25px;
            height: auto;
          `}
        />
      </a>
    </div>
  );
};
