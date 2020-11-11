import { ButtonProps } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { LocalizedField } from '../../../custom';
import { useI18n } from '../../layout/Multilanguage';
import { PrimaryButton } from './GhostButton';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing(8)} 0`
  },
  cta: {
    fontSize: '2rem',
    borderWidth: '3px',
    borderColor: theme.palette.primary.main,
    textAlign: 'center',
    wordSpacing: '0.5rem',
    '&:hover': {
      borderWidth: '3px'
    }
  }
}));

export type CtaProps = {
  url?: string;
  isInternal?: boolean;
  label?: string;
  _allLabelLocales?: LocalizedField[];
};

export const RedirectLink: React.FC<CtaProps & ButtonProps> = ({
  className,
  url,
  isInternal,
  _allLabelLocales,
  label,
  ...props
}) => {
  const { container, cta } = useStyles();
  const { getLocalizedContent } = useI18n();

  if (!url) {
    return null;
  }

  return (
    <div className={clsx(container, className)}>
      <PrimaryButton {...props} className={cta} url={url} isInternal={isInternal}>
        {_allLabelLocales ? getLocalizedContent(_allLabelLocales) : label}
      </PrimaryButton>
    </div>
  );
};
