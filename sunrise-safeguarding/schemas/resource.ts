import {defineType, defineField} from 'sanity'

const resource = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'typeLabel',
      title: 'Type Label (e.g. Free Checklist)',
      type: 'string',
      initialValue: 'Free Resource',
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g. 2025',
    }),

    defineField({
      name: 'file',
      title: 'Download File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'pages',
      title: 'Number of Pages',
      type: 'string',
      description: 'e.g. 2 pages',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'typeLabel',
    },
  },
})

export default resource
