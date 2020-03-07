import React from 'react';
import { css } from '@emotion/core';
import { colors, fontFamilies } from '../theme';
import { TabItem } from './TabItem';
import { TabContent } from './TabContent';

export type TabItemData = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type Props = {
  items: TabItemData[];
  defaultValue?: string;
  className?: string;
};

export const Tabs: React.FC<Props> = ({
  className = '',
  items,
  defaultValue = items[0].value,
  ...props
}) => {
  const [selectedValue, updateValue] = React.useState(defaultValue);
  return (
    <div
      className={className}
      css={css`
        display: flex;
        flex-direction: column;
      `}>
      <ul
        {...props}
        css={css`
          display: flex;
          font-family: ${fontFamilies.notoSans};
          font-size: 18px;
          color: ${colors.gray50};
          text-transform: uppercase;
          padding: 25px 0;
        `}>
        {items.map(({ label, value }) => (
          <TabItem
            key={value}
            label={label}
            selectTab={() => updateValue(value)}
            isSelected={selectedValue === value}
          />
        ))}
      </ul>
      <div
        css={css`
          position: relative;
          background-color: ${colors.black02dp};
        `}>
        {items.map(({ value, content }) => (
          <TabContent key={value} isVisible={value === selectedValue}>
            {content}
          </TabContent>
        ))}
      </div>
    </div>
  );
};
