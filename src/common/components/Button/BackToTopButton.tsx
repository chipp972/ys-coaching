import React from 'react';

export const BackToTopButton = () => (
  <button
    onClick={() =>
      typeof window !== 'undefined' &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }>
    Back to top
  </button>
);
