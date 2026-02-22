import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqPage',
  title: 'FAQ Page',
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
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'array',
              of: [{type: 'block'}],
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
      return {
        title: 'FAQ Page',
      }
    },
  },
})
