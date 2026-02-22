import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',

  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),

    defineField({
      name: 'heroText',
      title: 'Hero Subtitle',
      type: 'text',
    }),

    defineField({
      name: 'roleLabel',
      title: 'Role Label (small pill text)',
      type: 'string',
    }),

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),

    defineField({
      name: 'values',
      title: 'Values Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'valueCard',
          title: 'Value Card',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    }),

    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'text',
    }),

    defineField({
      name: 'ctaButton',
      title: 'CTA Button Text',
      type: 'string',
    }),
  ],

  preview: {
    prepare() {
      return {title: 'About Page'}
    },
  },
})
