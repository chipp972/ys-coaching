import React from 'react';

export const BetterMarkdownImage = {
  id: 'image-adv',
  label: 'image advanced',
  fields: [
    { name: 'image', label: 'Image', widget: 'image', media_library: { allow_multiple: false } },
    { name: 'title', label: 'Title', widget: 'string' },
    { name: 'alt', label: 'Alternative text', widget: 'string' },
    {
      name: 'position',
      label: 'Position',
      widget: 'select',
      options: [
        { label: 'center', value: 'center' },
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
        { label: 'full width', value: 'fullWidth' },
        { label: 'full height', value: 'fullHeight' }
      ],
      default: 'fullWidth'
    }
  ],
  pattern: /^!\[(.*)\]\((\S+)#(\S+)(\s"(.*)")?\)$/,
  fromBlock: (match) => match && {
      alt: match[1],
      image: match[2],
      position: match[3],
      title: match[5]
    },
  toBlock: ({ alt, image, title, position }) =>
    `![${alt || ''}](${image || ''}#${position}${title ? ` "${title.replace(/"/g, '\\"')}"` : ''})`,
  toPreview: ({ alt, image, title }, getAsset, fields) => {
    const imageField = fields?.find((f) => f.get('widget') === 'image');
    const src = getAsset(image, imageField);
    return <img src={src || ''} alt={alt || ''} title={title || ''} />;
  }
};
