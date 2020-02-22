import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { ServiceCard } from './ServiceCard/ServiceCard';
import { mediaQueries } from './theme';

const Pricing = ({ data }) => (
  <div
    css={css`
      display: flex;
      flex-flow: column wrap;
      align-items: center;

      ${mediaQueries.fromTablet} {
        justify-content: flex-start;
        flex-flow: row wrap;
        align-items: stretch;
      }
    `}>
    {data.map((planData) => (
      <ServiceCard key={planData.plan} {...planData} />
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      frequency: PropTypes.string,
      description: PropTypes.string,
      items: PropTypes.array
    })
  )
};

export default Pricing;
