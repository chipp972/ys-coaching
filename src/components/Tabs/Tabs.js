import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { colors, fontFamilies, mediaQueries } from '../theme';

const TabItem = ({ option, selectTab, isSelected}) => (
  <li css={css`
    position: relative;
    padding-bottom: 10px;
    margin-right: 20px;
    text-align: center;
    cursor: pointer;

    :hover {
      :after {
        transition: width .15s ease;
        width: 100%;
      }
    }
    :after {
      content: '';
      position: absolute;
      height: 1px;
      width: 0;
      background-color: ${colors.gray50};
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }

    ${mediaQueries.fromTablet} {
      padding-bottom: 25px;
      margin-right: 50px;
    }
    
    :last-of-type {
      margin-right: 0;
    }

    ${isSelected && `
      color: ${colors.crimson200};

      :after {
        width: 100%;
        background-color: ${colors.crimson200};
      }
    `}
  `} onClick={selectTab}>{option}</li>
);

export const Tabs = ({ items, defaultValue = items[0].value, ...props }) => { 
  const [selectedValue, updateValue] = React.useState(defaultValue);
  return (
    <ul {...props} css={css`
      display: flex;
      font-family: ${fontFamilies.notoSans};
      font-size: 18px;
      color: ${colors.gray50};
      text-transform: uppercase;
    `}>
      {items.map(({ option, value }) => (
        <TabItem
          key={value}
          option={option}
          selectTab={() => updateValue(value)}
          isSelected={selectedValue === value} />
      ))}
    </ul>
  );
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
  defaultValue: PropTypes.string
};
