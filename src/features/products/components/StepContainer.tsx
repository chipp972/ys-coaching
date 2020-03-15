import React from 'react';
import { SectionTitle } from '../../../common/theme';
import { Section } from '../../../common/layout';
import { css } from '@emotion/core';

type Props = {
  heading: string;
  description: string;
};

export const StepContainer: React.FC<Props> = ({ heading, description, children }) => (
  <Section css={css`
    display: flex;
    flex-direction: column;
  `}>
    <SectionTitle>{heading}</SectionTitle>
    {description && <p>{description}</p>}
    {children}
  </Section>
);
