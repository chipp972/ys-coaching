import React from 'react';
import { css } from '@emotion/core';
import { colors } from '../../../../common/theme';
import { ScalableImage } from '../../../../common/components/ImageContainer';
import { GhostButton } from '../../../../common/components/Button';
import CheckIcon from '../../../../img/icon/check.inline.svg';
import { GatsbyImage } from '../../../../common/helpers/gatsby';
import { CardTitle } from './CardTitle';
import { CardFooter } from './CardFooter';

const selectedCardShadow = `0px 0px 0px 2px ${colors.gray50}`;
const transitionDuration = '0.4s';
const cardWidth = '300px';

type Props = {
  plan: string;
  image: GatsbyImage;
  price: string | number;
  frequency?: string;
  description: string;
  benefits: string[];
  onClick: (cardId: string) => void;
};

// eslint-disable-next-line
export const ServiceCard: React.FC<Props> = ({
  plan,
  description,
  image,
  price,
  frequency,
  benefits,
  onClick
}) => {
  const [isSelected, updateSelection] = React.useState(false);
  return (
    <div
      css={css`
        background-color: ${isSelected ? colors.black12dp : colors.black06dp};
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
      onClick={() => {
        updateSelection(!isSelected);
        onClick(plan);
      }}>
      <ScalableImage
        image={image}
        height="300px"
        scalableImageClassName="pricing-plan-image">
        <GhostButton
          theme="light"
          size="medium"
          className="plan-choose-button"
          css={css`
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          `}>Choose</GhostButton>
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
        <table
          css={css`
            line-height: 1.5rem;
          `}>
          <tbody>
            {benefits.map((item) => (
              <tr
                key={item}
                css={css`
                  padding-bottom: 10px;
                `}>
                <td
                  css={css`
                    margin-right: 10px;
                    text-align: center;
                    vertical-align: middle;
                    width: 16px;
                  `}>
                  <CheckIcon />
                </td>
                <td
                  css={css`
                    font-size: 1rem;
                    padding: 10px;
                  `}>
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
