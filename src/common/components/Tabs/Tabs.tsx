import React from 'react';
import { css } from '@emotion/core';
import { colors, fontFamilies, mediaQueries } from '../../theme';
import { TabItem } from './TabItem';
import { TabContent } from './TabContent';

export type TabItemData = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type Props = {
  labels: string[];
};

const TabList: React.FC = ({ children }) => (
  <ul
    css={css`
      display: flex;
      justify-content: space-around;
      font-family: ${fontFamilies.notoSans};
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

export const Tabs: React.FC<Props> = ({ labels, children, ...props }) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  if (labels.length !== React.Children.count(children)) {
    throw new Error(
      `The number of tabs (${
        labels.length
      }) and tab contents (${React.Children.count(children)}) are different`
    );
  }
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
            selectTab={() => setCurrentTab(index)}
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
