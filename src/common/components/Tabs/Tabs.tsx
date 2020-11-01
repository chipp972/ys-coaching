import { css } from '@emotion/core';
import React from 'react';
import { colors, mediaQueries } from '../../theme';
import { TabContent } from './TabContent';
import { TabItem } from './TabItem';

export type TabItemData = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type Props = {
  labels: string[];
  onChange?: (newTabIndex: number) => void;
};

const TabList: React.FC = ({ children }) => (
  <ul
    css={css`
      display: flex;
      justify-content: space-around;
      font-size: 18px;
      color: ${colors.gray50};
      text-transform: uppercase;
      padding: 25px 0;

      ${mediaQueries.fromTablet} {
        justify-content: flex-start;
      }
    `}>
    {children}
  </ul>
);

export const Tabs: React.FC<Props> = ({ labels, children, onChange, ...props }) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  return (
    <div
      {...props}
      css={css`
        display: flex;
        flex-direction: column;
      `}>
      <TabList>
        {labels.map((label, index) => (
          <TabItem
            key={`tab-${index}`}
            label={label}
            selectTab={() => {
              setCurrentTab(index);
              onChange?.(index);
            }}
            isSelected={currentTab === index}
          />
        ))}
      </TabList>
      <div
        css={css`
          position: relative;
          background-color: ${colors.black02dp};
        `}>
        {React.Children.map(children, (child, index) => (
          <TabContent
            key={`tabcontent-${index}`}
            isVisible={index === currentTab}>
            {child}
          </TabContent>
        ))}
      </div>
    </div>
  );
};
