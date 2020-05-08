import { Button } from '@material-ui/core';
import React from 'react';

export const BackToTopButton = () => (
  <Button
    style={{ textTransform: 'none' }}
    onClick={() =>
      typeof window !== 'undefined' &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }>
    Back to top
  </Button>
);
