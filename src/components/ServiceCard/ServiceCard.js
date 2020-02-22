import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { colors, fontFamilies } from '../theme';
import { ScalableImage } from '../ImageContainer/ScalableImage';
import { GhostButton } from '../Buttons/Buttons';
import checkIcon from '../../img/icon/check.svg';

const selectedCardShadow = `0px 0px 0px 2px ${colors.gray50}`;
const transitionDuration = '0.4s';
const cardWidth = '300px';

const CardTitle = ({ plan }) => (
      <div css={css`
        padding: 30px;
        position: relative;
        text-align: center;
      `}>
        <span
          css={css`
            color: ${colors.gray100};
            font-family: Noto Sans JP;
            padding-bottom: 30px;
            margin: 0;
            font-size: 20px;
            font-weight: 600;
            width: 100%;

            :after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 10%;
              width: 80%;
              height: 3px;
              background-color: ${colors.gray100};
            }
          `}>
          {plan}
        </span>
      </div>
);

const CardFooter = ({ frequency, price }) => (
  <section
    css={css`
      margin-top: auto;
      background-color: ${colors.gray100};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 10px;
      border-radius: 0 0 5px 5px;
    `}>
    <span
      css={css`
        text-align: center;
        font-size: 3rem;
        font-weight: 800;
        color: ${colors.black};
        font-family: ${fontFamilies.notoSans};
      `}>
      {price}€
    </span>
    {frequency && (
      <span
        css={css`
          color: ${colors.black};
          margin-left: 1rem;
        `}>
        / {frequency}
      </span>
    )}
  </section>
);

export const ServiceCard = ({ plan, description, image, price, frequency, items }) => {
  const [isSelected, updateSelection] = React.useState(false);
  return (
    <div
      css={css`
        background-color: ${isSelected ? colors.black12dp : colors.black04dp};
        padding: 0;
        width: ${cardWidth};
        display: flex;
        flex-flow: column nowrap;
        margin: 30px 30px 0 0;
        transition: all ${transitionDuration} ease-in-out;
        box-shadow: ${isSelected ? selectedCardShadow : 'none'};
        cursor: pointer;
        :hover,
        :active {
          background-color: ${colors.crimson04dp};
          box-shadow: ${selectedCardShadow};
        }
        :hover {
          .pricing-plan-image {
            transform: scale(1.2);
            position: relative;

            :after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.7);
            }
          }
          .plan-choose-button {
            opacity: 1;
          }
        }
      `}
      onClick={() => updateSelection(!isSelected)}>
      <ScalableImage
        image={image}
        height="300px"
        scalableImageClassName="pricing-plan-image">
        <GhostButton title="Choose" theme="light" size="medium" className="plan-choose-button" css={css`
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        `} />
      </ScalableImage>
      <CardTitle plan={plan} />
      <section
        css={css`
          padding: 30px 40px;
        `}>
        <p
          css={css`
            font-weight: 600;
            margin-bottom: 20px;
          `}>
          {description}
        </p>
        <table css={css`line-height: 1.5rem;`}>
          <tbody>
            {items.map((item) => (
              <tr key={item} css={css`padding-bottom: 10px;`}>
                <td css={css`
                  margin-right: 10px;
                  text-align: center;
                  vertical-align: middle;
                  width: 16px;
                `}><img src={checkIcon} alt="bullet point" aria-hidden="true" /></td>
                <td css={css`font-size: 1rem; padding: 10px;`}>
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <CardFooter frequency={frequency} price={price} />
    </div>
  );
};

ServiceCard.propTypes = {
  plan: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  frequency: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array
};