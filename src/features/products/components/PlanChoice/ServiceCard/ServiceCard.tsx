import React from 'react';
import { css } from '@emotion/core';
import { colors, mediaQueries } from '../../../../../common/theme';
import { ScalableImage } from '../../../../../common/components/ImageContainer';
import { GhostButton } from '../../../../../common/components/Button';
import { Check as CheckIcon } from 'react-feather';
import { GatsbyImage } from '../../../../../common/helpers/gatsby';
import { CardTitle } from './CardTitle';
import { CardFooter } from './CardFooter';
import { callOnEnterOrSpaceKey } from '@chipp972/accessibility';

const selectedCardShadow = `0px 0px 0px 2px ${colors.gray50}`;
const transitionDuration = '0.4s';
const cardWidth = '30rem';

type Props = {
  plan: string;
  image: GatsbyImage;
  price: string | number;
  frequency?: string;
  description: string;
  benefits: string[];
  isSelected: boolean;
  onClick: (cardId: string) => void;
};

const activeStyle = `
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
`;

// eslint-disable-next-line
export const ServiceCard: React.FC<Props> = ({
  plan,
  description,
  image,
  price,
  frequency,
  benefits,
  isSelected,
  onClick
}) => { 
  const handleClick = () => onClick(plan);
  return (
    <div
      tabIndex={0}
      css={css`
        background-color: ${isSelected ? colors.black12dp : colors.black06dp};
        padding: 0;
        width: ${cardWidth};
        display: flex;
        flex-flow: column nowrap;
        transition: all ${transitionDuration} ease-in-out;
        box-shadow: ${isSelected ? selectedCardShadow : 'none'};
        cursor: pointer;
        margin-top: 3rem;

        ${activeStyle};

        :hover,
        :active {
          background-color: ${colors.crimson04dp};
          box-shadow: ${selectedCardShadow};
        }
        :focus,
        :hover {
          ${activeStyle}
        }

        ${mediaQueries.fromTablet} {
          margin: 3rem 3rem 0 0;

          .pricing-plan-image {
            transform: scale(1);

            :after {
              content: none;
            }
          }

          .plan-choose-button {
            opacity: 0;
          }
        }
      `}
      onKeyDown={callOnEnterOrSpaceKey(handleClick)}
      onClick={handleClick}>
      <ScalableImage
        image={image}
        height="300px"
        scalableImageClassName="pricing-plan-image">
        <GhostButton
          tabIndex={-1}
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
          `}>
          Choose
        </GhostButton>
      </ScalableImage>
      <CardTitle plan={plan} />
      <section
        css={css`
          padding: 3rem 4rem;
        `}>
        <p
          css={css`
            font-weight: 600;
            margin-bottom: 2rem;
          `}>
          {description}
        </p>
        <table
          css={css`
            line-height: 2.4rem;
          `}>
          <tbody>
            {benefits.map((item) => (
              <tr
                key={item}
                css={css`
                  padding-bottom: 1rem;
                `}>
                <td
                  css={css`
                    margin-right: 1rem;
                    text-align: center;
                    vertical-align: middle;
                    width: 1.6rem;
                  `}>
                  <CheckIcon />
                </td>
                <td
                  css={css`
                    font-size: 1.6rem;
                    padding: 1rem;
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
