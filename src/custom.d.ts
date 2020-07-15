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

declare type PageData<FrontMatter = any, Node = any> = {
  allMarkdownRemark?: {
    edges: { node: Node }[];
  };
  markdownRemark: {
    html?: string;
    frontmatter: {
      title: string;
      subtitle?: string;
      image?: any;
    } & FrontMatter;
  };
};

declare type PageProps<FrontMatter = any, Node = any> = {
  location: {
    pathname: string;
  };
  data: PageData<FrontMatter, Node>;
};
