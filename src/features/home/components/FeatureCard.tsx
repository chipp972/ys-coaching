import React from 'react';
import { Card } from '../home.context';
import { HorizontalCard } from './HorizontalCard';
import { VerticalCard } from './VerticalCard';

export const FeatureCard: React.FC<Card> = ({ cardType, ...props }) => cardType === 'vertical'
    ? <VerticalCard {...props} />
    : <HorizontalCard {...props} />;
