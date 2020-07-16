import { keyframes } from '@emotion/core';

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const slideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(2rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInAnimation = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
};
