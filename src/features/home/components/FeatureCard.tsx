import React from 'react';
import { Card } from '../home.context';
import { HorizontalCard } from './HorizontalCard';
import { VerticalCard } from './VerticalCard';

export const FeatureCard: React.FC<Card> = ({ type, ...props }) => type === 'vertical'
    ? <VerticalCard {...props} />
    : <HorizontalCard {...props} />;
