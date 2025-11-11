import { Rule } from "sanity";

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule :Rule) => Rule.required().min(5).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule :Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule :Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'This will be shown in blog cards and previews.',
      validation: (Rule :Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule :Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
      validation: (Rule :Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
