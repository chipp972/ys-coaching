import * as R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { colors, fontFamilies } from '../theme';
import { TabItem } from './TabItem';
import { TabContent } from './TabContent';

export const Tabs = ({ items, defaultValue = items[0].value, ...props }) => { 
  const [selectedValue, updateValue] = React.useState(defaultValue);
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
    `}>
      <ul {...props} css={css`
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
            isSelected={selectedValue === value} />
        ))}
      </ul>
      {items.map(({value, content}) => (
        <TabContent isVisible={value === selectedValue}>
          {content}
        </TabContent>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    content: PropTypes.node
  })).isRequired,
  defaultValue: PropTypes.string
};
