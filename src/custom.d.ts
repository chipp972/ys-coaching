import { FluidObject } from 'gatsby-image';

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.inline.svg' {
  const content: any;
  export default content;
}

declare module 'react-case-when' {
  export const Switch: import('react').FC;
  export const Case: import('react').FC<{when: boolean}>;
}

declare type HeaderProps = {
  _allTitleLocales: LocalizedField[];
  _allSubtitleLocales: LocalizedField[];
  image?: {
    fluid: FluidObject;
  };
};

declare type PageData<PageSpecificData = any> = {
  page: {
    header: HeaderProps;
    seoMetaTags: { tags: any[] };
  } & PageSpecificData;
};

declare type SvgProps = {
  size?: number;
  className?: string;
};

declare type MarkdownField = {
  childMarkdownRemark: {
    html: string;
  };
};

declare type LocalizedField<T = string> = {
  locale: string;
  value: T;
};
