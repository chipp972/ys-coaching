import { Button } from '@material-ui/core';
import { ArrowUpwardRounded } from '@material-ui/icons';
import React from 'react';

export const BackToTopButton = () => (
  <Button
    style={{ textTransform: 'none' }}
    startIcon={<ArrowUpwardRounded aria-hidden="true" />}
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
