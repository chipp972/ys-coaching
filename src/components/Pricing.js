import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/core';
import {colors} from './theme';

const selectedCardShadow = `0px 0px 20px 5px ${colors.green2}`;

const PlanCard = ({ plan, description, image, price, items }) => {
  const [isSelected, updateSelection] = React.useState(false);
  return (
  <div css={css`
    background-color: ${isSelected ? colors.black08dp : colors.black04dp};
    padding: 0;
    width: 330px;
    display: flex;
    flex-flow: column nowrap;
    margin: 30px 30px 0 0;
    transition: background-color 0.15s ease-in-out;
    box-shadow: ${isSelected ? selectedCardShadow : 'none'};
    cursor: pointer;
    :hover, :active {
      background-color: ${colors.black08dp};
      box-shadow: ${selectedCardShadow};
    }
    `} onClick={() => updateSelection(!isSelected)}>
    <div css={css`
        background-image: url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        });
        height: 300px;
        background-position: center;
        background-size: cover;
      `} />
    <span css={css`
      padding: 20px;
      color: ${colors.gray100};
      font-family: Noto Sans JP;
      border-bottom: 3px solid ${colors.gray100};
      margin: 0;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      `}>
      {plan}
    </span>
    <section css={css`padding: 30px 40px;`}>
      <p css={css`font-weight: 600;`}>{description}</p>
      <ul>
        {items.map((item) => (
          <li key={item} css={css`font-size: 1rem; line-height: 2rem;`}>
            {item}
          </li>
        ))}
      </ul>
    </section>
    <section css={css`
      margin-top: auto;
      background-color: ${colors.gray100};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 10px;
      border-radius: 0 0 5px 5px;`}>
      <span css={css`
          text-align: center;
          font-size: 3rem;
          font-weight: 800;
          color: ${colors.black};
          font-family: Noto Sans JP;`}>
        {price}€
      </span>
    </section>
  </div>
)};

const Pricing = ({ data }) => (
  <div css={css`
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      @media (min-width: 768px) {
        justify-content: space-around;
        flex-flow: row wrap;
        align-items: stretch;
      }`}>
    {data.map((planData) => <PlanCard key={planData.plan} {...planData} />)}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array
    })
  )
};

export default Pricing;
