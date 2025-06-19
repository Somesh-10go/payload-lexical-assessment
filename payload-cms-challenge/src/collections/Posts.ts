import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
    },
  ],
};
